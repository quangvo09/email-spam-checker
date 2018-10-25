# Email Spam Checker
A wrapper of email validater. It's useful for backend to avoid spam emails.
- This package uses email-addresses(https://www.npmjs.com/package/email-address) to validate email.
- Using a list of domains for disposable and temporary email addresses (https://gist.github.com/adamloving/4401361) to avoid spam emails.

## Install
```sh
$ npm install email-spam-checker
```

## Usage
```js
var emailChecker = require('email-spam-checker');
emailChecker('abc@xyz.com')
  .then(() => {
      // You give me a valid email ^^
  })
  .catch(err => {
      // Email is invalid
      const { type } = err;
      console.log(`Error type: ${type}`); 
  })
```

## Error Types
- 'EMAIL_INVALID': email is invalid
- 'EMAIL_SPAM': domain's email is in blacklist