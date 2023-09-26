const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength, message, ...params) {
    super(message, ...params);

    if (Error.captureStackLength) {
      Error.captureStackLength(this, MaximumLengthExceededError);
    }

    this.name = 'MaximumLengthExceededError';
    if (excessLength) {
      this.message = `Maximum length exceeded by ${excessLength}`;
    } else {
      this.message = `Maximum length exceeded`
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}