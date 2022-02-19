var penumpang = [];

function refreshPenumpang() {
  for (var i = 0; i < penumpang.length; i++) {
    if (penumpang[i] === undefined) {
      number = i.toString();
      document.getElementById(number).innerHTML = "";
      document.getElementById(number).style.backgroundColor = "chartreuse";
    } else if (penumpang[i] !== undefined) {
      number = i.toString();
      document.getElementById(number).innerHTML = penumpang[i];
      document.getElementById(number).style.color = "white";
      document.getElementById(number).style.backgroundColor = "red";
    }
  }
}

function tambahPenumpang() {
  var namaPenumpang = document
    .getElementById("namaPenumpang")
    .value.toUpperCase();
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    alert("penumpang yang masuk " + namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] === namaPenumpang) {
        alert(namaPenumpang + " sudah ada di dalam angkot");
        return penumpang;
      }
    }
    if (penumpang[i] !== namaPenumpang) {
      penumpang.push(namaPenumpang);
      return penumpang;
    }
  }
}

function naikinPenumpang() {
  tambahPenumpang();
  refreshPenumpang();
}

function turuninPenumpang() {
  hapusPenumpang();
  refreshPenumpang();
}

function hapusPenumpang() {
  var namaPenumpang = document
    .getElementById("namaPenumpang")
    .value.toUpperCase();

  if (penumpang.length === 0) {
    alert("Angkot masih kosong");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      }
    }
    if (penumpang[i] !== namaPenumpang) {
      alert(namaPenumpang + " tidak ada di dalam angkot");
    }
  }
}
