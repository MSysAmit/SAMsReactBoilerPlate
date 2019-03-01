class Utils {
  showSnackbar(message) {
    console.log("I am in Sanckbar", message);
    // Get the snackbar DIV
    var x = document.getElementById('snackbar');

    x.innerHTML = message;

    // Add the 'show' class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      x.className = '';
    }, 3000);
  }

  saveToken(token) {
    localStorage.setItem('samsentry-token', token);
  }

  get token() {
    return localStorage.getItem('samsentry-token');
  }

  removeToken() {
    localStorage.removeItem('samsentry-token');
  }

}