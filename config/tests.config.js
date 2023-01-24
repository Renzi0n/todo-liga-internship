require('reflect-metadata');
require('@testing-library/jest-dom');

HTMLCanvasElement.prototype.getContext = () => {
  return true;
};
