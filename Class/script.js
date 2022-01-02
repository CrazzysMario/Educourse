class askUser {
  constructor(fname, lname, age, email) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.email = email;
  }

  result() {
    return `first name: ${this.fname}<br>last name: ${this.lname}<br>age: ${this.age}<br>email: ${this.email}`;
  }
}

function ifClick() {
  let fname = prompt("What your first name:");
  let lname = prompt("What your last name:");
  let age = prompt("What your age");
  let email = prompt("What your email");
  let user = new askUser(fname, lname, age, email);
  let create = confirm(
    `first name: ${user.fname}\nlast name: ${user.lname}\nage: ${user.age}\nemail: ${user.email}\n\nAre you sure?`
  );
  if (create) {
    document.querySelector("h1#root").innerHTML = user.result();
    document.querySelector("h1#root").style.fontFamily = "Arial";
    document.querySelector("h1#root").style.fontWeight = 100;
  } else {
    document.querySelector("h1#root").innerHTML = null;
  }
}
