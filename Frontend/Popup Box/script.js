function konfirmasi() {
  let v = confirm("Do you want to continue?");
  let userConfirm = document.getElementById("confirm");

  if (v == true) {
    var x = "You choose OK..!";
  } else {
    var x = "You choose cancel";
  }
  userConfirm.innerText = x;
}

function isian() {
  let userName = document.getElementById("userName");
  let askUserName = prompt("What's your name:");

  if (askUserName.length > 0) {
    y = "Hi <span>" + askUserName + "</span>, How are you today?";
    document.querySelector("#userName span").style.color = "green";
    userName.style.color = "black";
    userName.innerText = y;
  } else {
    userName.innerText = "User name is undefined";
    userName.style.color = "red";
  }
}
