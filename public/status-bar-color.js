// This script helps ensure the status bar color is applied correctly
// on Android devices in various browsers and environments

(function() {
  // Set the status bar for Android browsers
  function setAndroidStatusBarColor() {
    // Add a theme-color meta tag if one doesn't exist
    if (!document.querySelector('meta[name="theme-color"]')) {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#CBACF9'; // Your purple color
      document.head.appendChild(meta);
    } else {
      // Update existing theme-color meta tags
      const metaTags = document.querySelectorAll('meta[name="theme-color"]');
      metaTags.forEach(tag => {
        tag.content = '#CBACF9';
      });
    }
    
    // Force a refresh of the status bar in some browsers
    document.documentElement.style.setProperty('--theme-color', '#CBACF9');
  }

  // Run when the document is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setAndroidStatusBarColor();
  } else {
    document.addEventListener('DOMContentLoaded', setAndroidStatusBarColor);
  }
  
  // Also run after window loads to handle any late-loading scenarios
  window.addEventListener('load', setAndroidStatusBarColor);
})();