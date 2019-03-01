require('../../../globals');
let localStorage = global.window.localStorage;

const showSnackbar = message => {
  console.log('I am in Sanckbar', message);
  // Get the snackbar DIV
  var x = document.getElementById('snackbar');

  x.innerHTML = message;

  // Add the 'show' class to DIV
  x.className = 'show';

  // After 3 seconds, remove the show class from DIV
  setTimeout(function() {
    x.className = 'hide';
  }, 3000);
};

const auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param {string} email The email of the user
   * @param {string} password The password of the user
   */

  storeItem(token) {
    localStorage.setItem('samsentry-token', token);
  },

  clearItem() {
    localStorage.removeItem('samsentry-token');
  },

  get token() {
    return localStorage.getItem('samsentry-token');
  },

  login(email, password) {
    // Post a request
    return fetch('http://localhost:8000/api/signin', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(global.handleErrors)
      .then(response => response.json())
      .then(response => {
        // Save token to local storage
        auth.storeItem(response.token);
        console.log('Token', response.token);
        console.log('response for signIn', response);
        return Promise.resolve(true);
      })
      .catch(error => {
        showSnackbar(error.message || error);
      });
  },
};

export default auth;
