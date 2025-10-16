/**
 * Web Vitals reporting function that captures Core Web Vitals metrics
 * @param {Function} onPerfEntry Callback function to handle performance metrics
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Only load web-vitals when we have a valid callback
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift
      getCLS(onPerfEntry);
      // First Input Delay
      getFID(onPerfEntry);
      // First Contentful Paint
      getFCP(onPerfEntry);
      // Largest Contentful Paint
      getLCP(onPerfEntry);
      // Time to First Byte
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;