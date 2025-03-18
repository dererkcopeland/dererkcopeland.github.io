'use client'

import React, { useEffect } from 'react'

/**
 * Component that forces the status bar color in Android browsers
 * This is particularly useful for development environments
 */
const StatusBarColorFix = () => {
  useEffect(() => {
    // Function to force the status bar color
    const forceStatusBarColor = () => {
      // 1. Update the theme-color meta tag
      let metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta')
        metaThemeColor.setAttribute('name', 'theme-color')
        document.head.appendChild(metaThemeColor)
      }
      metaThemeColor.setAttribute('content', '#CBACF9')
      
      // 2. Create a temporary element at the top of the viewport
      // This forces some browsers to redraw the status bar
      const statusBarElement = document.createElement('div')
      statusBarElement.style.position = 'fixed'
      statusBarElement.style.top = '0'
      statusBarElement.style.left = '0'
      statusBarElement.style.width = '100%'
      statusBarElement.style.height = '5px' // Just enough to touch the status bar area
      statusBarElement.style.backgroundColor = '#CBACF9'
      statusBarElement.style.zIndex = '9999'
      document.body.appendChild(statusBarElement)
      
      // 3. Force a layout recalculation
      document.documentElement.style.paddingTop = '0.1px'
      setTimeout(() => {
        document.documentElement.style.paddingTop = '0'
      }, 10)
      
      // 4. Remove the temporary element after it has done its job
      setTimeout(() => {
        document.body.removeChild(statusBarElement)
      }, 2000)
    }
    
    // Run immediately
    forceStatusBarColor()
    
    // Also run after the page has loaded completely
    window.addEventListener('load', forceStatusBarColor)
    
    // Run when navigating between pages
    window.addEventListener('popstate', forceStatusBarColor)
    
    // Cleanup
    return () => {
      window.removeEventListener('load', forceStatusBarColor)
      window.removeEventListener('popstate', forceStatusBarColor)
    }
  }, [])
  
  // This component doesn't render anything visible
  return null
}

export default StatusBarColorFix