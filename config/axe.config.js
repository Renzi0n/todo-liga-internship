const { configureAxe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

const axe = configureAxe({
  rules: {
    'heading-order': { enabled: false },
  },
});

module.exports = axe;
