import React from 'react'
import { NavbarProps } from 'sanity'

export function CustomNavbar(props: NavbarProps) {
  return (
    <>
      <style>
        {`
          /* Hide the default tool switcher (tabs) from the top bar because we have them in the left sidebar */
          div[data-ui="ToolSwitcher"] {
            display: none !important;
          }
          
          /* Sanity v3 specific layout trick: sometimes it's wrapped in a different box */
          nav > div:nth-child(2) {
             /* usually the tool tabs are the second block in the nav flex row */
             /* We'll use a more generic approach: hide links that look like tool tabs */
          }

          /* Specifically target the container that holds the tool tabs */
          nav a[data-ui="Tab"] {
            display: none !important;
          }
        `}
      </style>
      {props.renderDefault(props)}
    </>
  )
}
