// algoritma
// 1. Tampung nilai nama dan peran.
// 2. Periksa apakah nama sudah diisi.
// 3. Jika nama kosong, tampilkan pesan "nama wajib diisi".
// 4. Jika nama sudah diisi, periksa peran.
// 5. Jika peran kosong, tampilkan pesan "Pilih Peranmu untuk memulai game".
// 6. Jika peran tidak kosong, cek peran yang dipilih.
// 7. Jika peran adalah Ksatria, tampilkan pesan sesuai dengan peran Ksatria.
// 8. Jika peran adalah Tabib, tampilkan pesan sesuai dengan peran Tabib.
// 9. Jika peran adalah Penyihir, tampilkan pesan sesuai dengan peran Penyihir.
// 10. Jika peran tidak sesuai dengan Ksatria, Tabib, atau Penyihir, tampilkan pesan bahwa peran tidak ada.

let nama = "Yudi";
let peran = "asd";
if (nama === "") {
  console.log("Nama Wajib Di isi");
} else if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game");
} else {
  switch (peran) {
    case "Ksatria":
      console.log("halo Ksatria " + nama + " , kamu dapat menyerang dengan senjatamu!");
      break;
    case "Tabib":
      console.log("halo Tabib " + nama + " , kamu akan membantu temanmu yang terluka");
      break;
    case "Penyihir":
      console.log("halo Penyihir " + nama + " , ciptakan keajaiban yang membantu kemenanganmu!");
      break;
    default:
      console.log("eummm... " + nama + " kayaknya kamu jadi NPC aja ya, peran yang kamu pilih ga ada");
      break;
  }
}
