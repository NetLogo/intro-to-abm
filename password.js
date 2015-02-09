var insecurePassword = 'abmiscool';

function promptForPassword(redirect) {
  var guess = prompt('This page is under construction. Please enter the password to continue');
  checkPassword(guess);
}

function checkPassword(guess) {
  if (guess !== insecurePassword) {
    alert('Incorrect password.');
    window.location.replace("http://ccl.northwestern.edu/netlogo")
  }
}
