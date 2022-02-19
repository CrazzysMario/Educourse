var keranjang = [];
// var totalHarga = 0

function addMenu(namaMakanan) {
  keranjang.push(namaMakanan);

  refreshKeranjang();
}

function refreshKeranjang() {
  for (var i = 0; i < keranjang.length; i++) {
    number = i.toString();
    document.getElementById(number).innerHTML = keranjang[i];
    if (keranjang[i] === "Bakso") {
      document.getElementById(number).src =
        "https://asset.kompas.com/crops/mP8RdLa_dNdpSO6sDJJGEcLzXOg=/194x2:751x374/750x500/data/photo/2017/08/27/1140357898.jpg";
    } else if (keranjang[i] === "Sate") {
      document.getElementById(number).src =
        "http://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg";
    } else if (keranjang[i] === "Ramen") {
      document.getElementById(number).src =
        "https://cms.sehatq.com/public/img/article_img/ramen-adalah-mie-kuah-a-la-jepang-apa-saja-jenisnya-1607011253.jpg";
    }
  }
}
