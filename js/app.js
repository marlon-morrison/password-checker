// Password must have at least 8 characters but no more than 20;
// Must contain at least one special charcter(!, @, #, $, %, &); 
// Must contain at least one uppercase letter; 
// must contain at least one lowercase letter; 
// Must contain at least one number; 
// cannot contain spaces

function confirm() {
    event.preventDefault();
    var username = (document.getElementById("username").value)
    var password1 = (document.getElementById("password1").value)
    var password2 = (document.getElementById("password2").value)
    //var regexp = ;
      if (username.length < 7) {
        alert("Your username needs to equal 8 characters or above")
      } else if (password1.length < 10) {
        alert("Your password needs a maximum of 10 characters")
      } else if (password1.search(/[a-z]/) < 0) {
        alert("Your password needs a lower case letter")
      }else if(password1.search(/[A-Z]/) < 0) {
        alert("Your password needs an uppser case letter")
      } else  if (password1.search(/[0-9]/) < 0) {
        alert("Your password needs a number")
      } else if (password1.search(/[^\S]/) > 0) {
        alert("Your password contains spaces")
      } else if (password1.search(/[!|@|#|$|%|&]/) < 0) {
        alert("Your password need at least one special charcter")
      } else if (password1 != password2) {
        alert ("\nPassword did not match: Please try again...") 
        return false; 
      } else {
        location = "https://marlon-morrison.github.io/age-confirm/"
      }

      
    };

function showPassword() {
    if (password1.type == "password") {
        password1.type = "text";
        password2.type = 'text'
      } else {
        password1.type = "password"
        password2.type = "password"
      }
    };