# Email Spam Checker
A wrapper of email validater. It's useful for backend to avoid spam emails.

## Install
```sh
$ npm install mysql
```

## Usage
```js
var emailChecker = require('email-spam-checker');
emailChecker('abc@xyz.com')
  .then(() => {
      // You give me an valid email ^^
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