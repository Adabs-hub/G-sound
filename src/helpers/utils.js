/**
 * Utility functions for currency formatting, calculations and other helpers
 */

/**
 * Format number as Indian Rupees currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string without decimal places
 */
export const displayMoney = (amount) => {
  if (typeof amount !== 'number') {
    console.warn('displayMoney called with non-number value');
    return '₹0';
  }

  try {
    const numFormat = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
    return numFormat.format(amount).split('.', 1)[0];
  } catch (err) {
    console.error('Error formatting currency:', err);
    return '₹0';
  }
};

/**
 * Calculate discount percentage
 * @param {number} discountedPrice - Price after discount
 * @param {number} originalPrice - Original price before discount
 * @returns {number} Discount percentage rounded to nearest integer
 */
export const calculateDiscount = (discountedPrice, originalPrice) => {
  if (!discountedPrice || !originalPrice || originalPrice === 0) {
    return 0;
  }

  const discountedPercent = (discountedPrice / originalPrice) * 100;
  return Math.round(discountedPercent);
};

/**
 * Calculate sum of array of numbers
 * @param {Array<number>} numbers - Array of numbers to sum
 * @returns {number} Total sum
 */
export const calculateTotal = (numbers) => {
  if (!Array.isArray(numbers)) {
    return 0;
  }

  return numbers.reduce((accum, val) => {
    const numVal = Number(val);
    return accum + (isNaN(numVal) ? 0 : numVal);
  }, 0);
};

/**
 * Calculate price including any discounts
 * @param {number} basePrice - Original price
 * @param {number} discountPercent - Discount percentage (0-100)
 * @returns {number} Final price after discount
 */
export const calculateFinalPrice = (basePrice, discountPercent = 0) => {
  if (typeof basePrice !== 'number' || basePrice < 0) {
    return 0;
  }

  const discount = Math.min(Math.max(discountPercent, 0), 100);
  return basePrice * (1 - discount / 100);
};