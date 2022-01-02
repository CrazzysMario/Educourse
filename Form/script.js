function setName() {
  const fName = $("#fName").val();
  const lName = $("#lName").val();
  const pw = $("#pw").val();

  if (pw == "123456") {
    $("#userName").html(fName + "<br>" + lName);
  } else {
    $("#userName").html("...");
  }
}
