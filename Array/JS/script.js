var penumpang = [];
var apps = true;
var keranjang = [];
var menu = ["BAKSO", "SATE", "NASI GORENG"];
var price = [15000, 20000, 13000];
var totalHarga = 0;
var pin = "superflex12!";

function tambahPenumpang(namaPenumpang) {
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    console.log("penumpang yang masuk", namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] === namaPenumpang) {
        console.log(namaPenumpang, "sudah ada di dalam angkot");
        return penumpang;
      }
    }
    if (penumpang[i] !== namaPenumpang) {
      penumpang.push(namaPenumpang);
      return penumpang;
    }
  }
}

function hapusPenumpang(namaPenumpang) {
  if (penumpang.length === 0) {
    console.log("Angkot masih kosong");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang.splice(i, 1);
        return penumpang;
      }
    }
    if (penumpang[i] !== namaPenumpang) {
      console.log(namaPenumpang, "tidak ada di dalam angkot");
    }
  }
}

function pilihMakanan(namaMakanan) {
  if (parseInt(namaMakanan - 1) < menu.length && parseInt(namaMakanan) > 0) {
    keranjang.push(menu[namaMakanan - 1]);
  } else {
    for (var i = 0; i < menu.length; i++) {
      if (namaMakanan === menu[i]) {
        keranjang.push(namaMakanan);
        return keranjang;
      } else if (i === menu.length - 1) {
        alert(`Makanan ${namaMakanan} yang anda pilih tidak tersedia`);
      }
    }
  }
}

function hitungHarga() {
  var harga = 0;
  for (var i = 0; i < keranjang.length; i++) {
    if (keranjang[i] === "BAKSO") {
      harga += price[0];
    } else if (keranjang[i] === "SATE") {
      harga += price[1];
    } else if (keranjang[i] === "NASI GORENG") {
      harga += price[2];
    }
  }
  totalHarga = harga;
}

function pembayaran() {
  var kalkulasiHarga = null;
  var pilihMetode = prompt("Pilih metode pembayaran :\n1. CASH\n2. OVO");

  if (pilihMetode.toUpperCase() === "CASH" || pilihMetode === "1") {
    while (kalkulasiHarga < 0 || kalkulasiHarga == null) {
      var jumlahCash = 0;
      jumlahCash += prompt("Masukan jumlah uang anda");
      kalkulasiHarga = jumlahCash - totalHarga;

      if (kalkulasiHarga < 0) {
        alert(`Uang anda kurang! Rp.${Math.abs(kalkulasiHarga)}`);
      }
    }
    alert(
      `Pembayaran berhasil!\nUang Kembalian anda: Rp.${kalkulasiHarga}\nTerima kasih sudah membeli makanan disini`
    );
    apps = false;
  } else if (pilihMetode.toUpperCase() === "OVO" || pilihMetode === "2") {
    var pembayaranOvo = true;
    while (pembayaranOvo) {
      var masukanPin = prompt("Masukan PIN OVO anda");

      if (pin == masukanPin) {
        pembayaranOvo = false;
      } else {
        alert("Pin yang anda masukan salah!");
      }
    }
    alert("Pembayaran berhasil!\nTerima kasih sudah membeli makanan disini");
    apps = false;
  } else {
    alert(`Pilihan ${pilihMetode} tidak tersedia`);
  }
}

function button() {
  while (true) {
    var User = prompt(
      "Penumpang = [ " +
        penumpang.join(", ") +
        " ]\n" +
        "Pilih Action \nA. Naikin penumpang \nB. Turunin Penumpang\nC. Keluar"
    );
    if (User === "A" || User === "a") {
      var pilihan1 = prompt("Masukan nama yang naik");
      for (var i in penumpang) {
        if (penumpang[i] === undefined) {
          penumpang[i] = pilihan1;
          alert("Penumpang = [ " + penumpang.join(", ") + " ]");
          return penumpang;
        } else if (penumpang[i] === pilihan1) {
          alert(pilihan1 + " sudah ada di dalam angkot");
          return penumpang;
        }
      }
      if (penumpang[i] !== pilihan1) {
        penumpang.push(pilihan1);
        alert("Penumpang = [ " + penumpang.join(", ") + " ]");
        return penumpang;
      }
    } else if (User === "B" || User === "b") {
      var pilihan2 = prompt("Masukan nama yang turun");
      if (penumpang.length === 0) {
        alert("Angkot masih kosong");
      } else {
        for (var i in penumpang) {
          if (pilihan2 === penumpang[i]) {
            penumpang.splice(i, 1);
            if (penumpang.length === 0) {
              alert("Angkot Menjadi kosong");
            } else {
              alert("Penumpang = [ " + penumpang.join(", ") + " ]");
            }
            return penumpang;
          }
        }
        if (pilihan2 !== penumpang[i]) {
          alert(pilihan2 + " tidak ada di dalam angkot");
          return penumpang;
        }
      }
    } else if (
      toUpperCase(User) === "C" ||
      User === "keluar" ||
      User === "Keluar" ||
      User === "exit" ||
      User === "Exit"
    ) {
      return penumpang;
    } else {
      alert("Anda Salah Masuki nilai");
    }
  }
}

function button2() {
  var apps = true;
  while (apps) {
    var order = prompt(
      `Silahkan pesan: \n1. ${menu[0]}\n2. ${menu[1]}\n3. ${menu[2]}`
    );
    pilihMakanan(order.toUpperCase());
    hitungHarga();
    var konfirmasiOrder = confirm(
      `Keranjang Anda : [ ${keranjang} ]\nTotal Harga Pesanan Anda : Rp.${totalHarga}\n\nAda tambahan order?`
    );
    if (konfirmasiOrder) {
      apps = true;
    } else {
      while (apps) {
        pembayaran();
        var apps = false;
      }
    }
  }
}
