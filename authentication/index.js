// function Show(id)
// {
//   if (document.getElementById(id).style.display == 'none') {
//        document.getElementById(id).style.display = 'block';
//   }
//   else {
//        document.getElementById(id).style.display = 'none';
//   }
// };

//Submit Button
function Verify() {
  var userRef = "Ujjwal";
  var passRef = "7310710532";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
     window.open('https://google.com');
  } else {
  alert("It's seem you make a mistake...")
  }
};