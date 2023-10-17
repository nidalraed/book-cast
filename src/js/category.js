// Nav Bar Profile icon appearence 

if (isUserLoggedIn()) {
    // User is logged in, hide the button
    document.getElementById("navbar_container-profile").style.display = "none";
  } else {
    // User is not logged in, show the button
    document.getElementById("navbar_container-profile").style.display = "block";
    document.getElementById("navbar_container-signinup").style.display = "none";
  }
