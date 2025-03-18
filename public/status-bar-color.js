// Enhanced script for Android status bar color
(function() {
  // Force the status bar color with a stronger approach
  function forceStatusBarColor() {
    // Remove any existing theme-color meta tags
    const existingMetaTags = document.querySelectorAll('meta[name="theme-color"]');
    existingMetaTags.forEach(tag => tag.remove());
    
    // Create and insert new theme-color meta tags
    const metaTag = document.createElement('meta');
    metaTag.name = 'theme-color';
    metaTag.content = '#CBACF9';
    document.head.appendChild(metaTag);
    
    // For Chrome/Android browser
    document.querySelector('html').style.backgroundColor = '#CBACF9';
    
    // Create a temporary overlay that forces a browser repaint
    const overlay = document.createElement('div');
    overlay.id = 'status-bar-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #CBACF9;
      z-index: 999999;
    `;
    document.body.appendChild(overlay);
    
    // Force browser to recalculate layout
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      // Remove overlay after a delay
      setTimeout(() => {
        overlay.remove();
      }, 2000);
    }, 100);
  }

  // Apply immediately and also when page loads
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    forceStatusBarColor();
  } else {
    document.addEventListener('DOMContentLoaded', forceStatusBarColor);
  }
  
  // Also run after full page load
  window.addEventListener('load', forceStatusBarColor);
  
  // Run again after navigation events
  window.addEventListener('popstate', forceStatusBarColor);
  window.addEventListener('hashchange', forceStatusBarColor);
})();