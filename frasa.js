/*
  Senarai ayat yang disebut dalam game "Jom Jalan! Kenali Kawasan".
  Setiap ayat ada kunci. Rakaman suara disimpan sebagai audio/<kunci>.wav
  (guna rakam-suara.html untuk merakam semuanya).
  Jika ubah ayat di sini, rakam semula ayat itu.
*/
(function () {
  var KAWASAN = ['berumput', 'berpasir', 'berair', 'berbatu'];
  var PUJI = ['Bagus!', 'Hebat!', 'Pandai!', 'Betul!'];
  var PETUNJUK = [
    { k: 'berumput', t: 'Ada rumput hijau yang lembut di kaki.' },
    { k: 'berumput', t: 'Kita berjalan di padang yang hijau.' },
    { k: 'berpasir', t: 'Kaki tenggelam sedikit dalam pasir halus.' },
    { k: 'berpasir', t: 'Ada pantai dan kulit kerang.' },
    { k: 'berair',   t: 'Kaki terasa basah dan sejuk.' },
    { k: 'berair',   t: 'Bunyi kocak-kocak bila kaki melangkah.' },
    { k: 'berbatu',  t: 'Tanah keras dan ada banyak batu.' },
    { k: 'berbatu',  t: 'Langkah perlahan supaya tidak tersadung batu.' }
  ];

  var F = {};
  F.tulis_nama = 'Tulis nama samaran dahulu.';
  F.soalan_a = 'Murid ini berjalan di kawasan apa?';
  KAWASAN.forEach(function (k) { F['soalan_b_' + k] = 'Tekan gambar kawasan ' + k + '.'; });
  PETUNJUK.forEach(function (p, i) { p.kunci = 'petunjuk_' + (i + 1); F[p.kunci] = p.t + ' Ini kawasan apa?'; });
  PUJI.forEach(function (t, i) { F['puji_' + (i + 1)] = t; });
  KAWASAN.forEach(function (k) { F['kawasan_' + k] = 'Kawasan ' + k + '.'; });
  F.cuba_lagi = 'Cuba lagi.';
  KAWASAN.forEach(function (k) { F['jawapan_' + k] = 'Jawapannya, kawasan ' + k + '.'; });
  F.tamat_3 = 'Hebat! Kamu dapat tiga bintang.';
  F.tamat_2 = 'Bagus! Kamu dapat dua bintang.';
  F.tamat_1 = 'Syabas kerana mencuba! Mari main lagi.';

  window.FRASA = F;
  window.PETUNJUK = PETUNJUK;
  window.PUJI = PUJI;
})();
