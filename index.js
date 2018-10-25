var addrs = require("email-addresses");
var checkDomainBlacklist = require('./scripts/checkDomainBlacklist');

var ERRORS = {
  EMAIL_INVALID: "EMAIL_INVALID",
  EMAIL_SPAM: "EMAIL_SPAM"
}

module.exports = function (email) {
  return parseEmailDomain(email)
    .then(({ domain }) => {
      const isSpam = checkDomainBlacklist(domain);
      if (isSpam) {
        return Promise.reject({ type: ERRORS.EMAIL_SPAM });
      }

      return Promise.resolve();
    })
}

function parseEmailDomain(email) {
  const obj = addrs.parseOneAddress(email)
  if (!obj) {
    return Promise.reject({ type: ERRORS.EMAIL_INVALID });
  }

  const { domain } = obj;
  return Promise.resolve({ domain });
}