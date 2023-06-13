function LogOut() {
  console.log("logout ")
  var userSession = sessionStorage.getItem('user')
  if(userSession){
    sessionStorage.removeItem('user');
  //   auth.signOut();
  }
  window.location.href="./HTML/Buttonpage.html";
}

console.log("file connected")