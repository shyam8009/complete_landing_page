import React, { useEffect, useState } from 'react'
import { LayoutProps } from 'sanity'
import { FileText, Image as ImageIcon, Settings, Eye } from 'lucide-react'

// Hardcoded inline styles to ensure the layout works without styled-components dependency issues
const layoutStyle: React.CSSProperties = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: '#101112' // Dark umbraco-like background
}

const sidebarStyle: React.CSSProperties = {
  width: '70px',
  backgroundColor: '#1c1c1e', // Slightly lighter than background
  borderRight: '1px solid #333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '24px',
  zIndex: 100, // Ensure it sits above Sanity's content
  boxShadow: '4px 0 15px rgba(0,0,0,0.5)'
}

const defaultContainerStyle: React.CSSProperties = {
  flex: 1,
  height: '100%',
  overflow: 'hidden',
  position: 'relative'
}

const navItemStyle = (isActive: boolean): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '12px 0',
  marginBottom: '16px',
  cursor: 'pointer',
  color: isActive ? '#84CC16' : '#888', // Green active color like Sahana
  borderLeft: isActive ? '3px solid #84CC16' : '3px solid transparent',
  transition: 'all 0.2s ease',
  textDecoration: 'none'
})

const iconWrapperStyle = {
  fontSize: '28px',
  marginBottom: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const labelStyle: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.5px'
}

export function UmbracoLayout(props: LayoutProps) {
  const [activePath, setActivePath] = useState('')

  // Track the current path to highlight the active menu item
  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname)
    }
    
    // Initial check
    handleLocationChange()

    // Listen for pushState/popState (SPA navigation)
    window.addEventListener('popstate', handleLocationChange)
    
    // Monkey patch pushState to detect Sanity's internal navigation
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      history.pushState = originalPushState;
    }
  }, [])

  // Determine active states based on path
  // Paths: / (Content), /media (Media), /settings (Settings), /vision (Vision)
  const isMedia = activePath.startsWith('/media')
  const isSettings = activePath.startsWith('/settings')
  const isVision = activePath.startsWith('/vision')
  const isContent = !isMedia && !isSettings && !isVision // Default is content

  return (
    <div style={layoutStyle}>
      {/* FAR-LEFT SIDEBAR (Umbraco Style) */}
      <div style={sidebarStyle}>
        
        {/* Content (Default Desk) */}
        <a href="/" style={navItemStyle(isContent)} title="Content">
          <div style={iconWrapperStyle}>
            <FileText size={24} />
          </div>
          <span style={labelStyle}>Content</span>
        </a>

        {/* Media Library */}
        <a href="/media" style={navItemStyle(isMedia)} title="Media">
          <div style={iconWrapperStyle}>
            <ImageIcon size={24} />
          </div>
          <span style={labelStyle}>Media</span>
        </a>

        {/* Settings (Singleton Desk) - REMOVED per user request */}


        {/* Vision (GROQ) */}
        <a href="/vision" style={navItemStyle(isVision)} title="Vision">
          <div style={iconWrapperStyle}>
            <Eye size={24} />
          </div>
          <span style={labelStyle}>Vision</span>
        </a>

      </div>

      {/* DEFAULT SANITY LAYOUT (takes remaining space) */}
      <div style={defaultContainerStyle}>
        {props.renderDefault(props)}
      </div>
    </div>
  )
}
