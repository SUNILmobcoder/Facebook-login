// 981387414214-1m5a0gjsrcqd2sjdfcs6ec489tektvol.apps.googleusercontent.com
// sBRbQ5s3Ixm_bAhR_fZHukIo


// Google singIn function
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    $(".img").attr(src, profile.getImageUrl());
    $(".name").text(profile.getName());
    $(".email").text(profile.getEmail());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
  }



  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      $(".data").css("display","none");
    $(".g-signin2").css("display","block");
    });
  }
