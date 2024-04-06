//1. Mulai
//2. Terima input untuk hari, bulan, dan tahun.
//3. Tentukan variabel namaBulan.
//4. Gunakan switch case untuk memeriksa nilai bulan:
//5. Jika bulan adalah 1, tetapkan namaBulan ke "Januari".
//6. Jika bulan adalah 2, tetapkan namaBulan ke "Februari".
//7. Lanjutkan untuk bulan 3 sampe 12, sesuaikan namaBulan dengan nama bulan yang sesuai.
//8. Jika bulan tidak dalam rentang 1 sampe 12, tetapkan namaBulan ke "Bulan tidak valid".
//9. Cetak hasil dalam format "hari namaBulan tahun".
//10. Kelar

let hari = 1;
let bulan = 1;
let tahun = 2000;

let namaBulan;

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak valid";
}

console.log(`${hari} ${namaBulan} ${tahun}`);
