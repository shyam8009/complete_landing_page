import React from 'react';
import { Navigate } from 'react-router';

// This page is now fully managed via Sanity CMS.
// The DynamicPageLoader at /:category/:slug handles this route.
export default function IntelligenceSurveillancePage() {
  return <Navigate to="/information-warfare/intelligence-surveillance" replace />;
}
