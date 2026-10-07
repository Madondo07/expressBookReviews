const express = require('express');
const session = require('express-session');

const general = require('./router/general.js');
const regd_users = require('./router/auth_users.js').authenticated;

const app = express();

app.use(express.json());

app.use(
  session({
    secret: 'fingerprint_customer',
    resave: false,
    saveUninitialized: true
  })
);

// Public routes
app.use('/', general);

// Registered user routes
app.use('/customer', regd_users);

// Required login endpoint for the assignment
app.use('/', regd_users);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});