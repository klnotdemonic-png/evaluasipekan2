
// sintaks dan operator
function hitungTotal(harga, qty, pajakPct, diskonPct) {

  let subtotal = harga * qty;

  let diskon = subtotal * (diskonPct / 100);
  let setelahDiskon = subtotal - diskon;

  let pajak = setelahDiskon * (pajakPct / 100);
  let total = setelahDiskon + pajak;

  return Math.round(total);
}
console.log(hitungTotal(10000, 2, 10, 20)); 

 // if / else
function gradeIfElse(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else if (nilai >= 60) {
    return "D";
  } else {
    return "E";
  }
}

console.log(gradeIfElse(95)); // Output: "A"
console.log(gradeIfElse(82)); // Output: "B"
console.log(gradeIfElse(75)); // Output: "C"
console.log(gradeIfElse(65)); // Output: "D"
console.log(gradeIfElse(50)); // Output: "E"

// switch

function kategoriSwitch(kode) {
  switch (kode) {
    case "S":
      return "Santri";
    case "M":
      return "Mentor";
    case "A":
      return "Admin";
    default:
      return "Tamu";
  }
}

console.log(kategoriSwitch("S")); // Santri
console.log(kategoriSwitch("M")); // Mentor
console.log(kategoriSwitch("A")); // Admin
console.log(kategoriSwitch("X")); // Tamu

// jumlah bilangan genap

function jumlahGenap(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total += arr[i];
    }
  }
  return total;
}

console.log(jumlahGenap([1,2,3,4,5,6]))
console.log(jumlahGenap([7,9,11]))
console.log(jumlahGenap([10,20,30]))

//akumulasi sampai batas

function akumulasiSampai(batas) {
  let total = 0;
  for (let i = 1; ; i++) {
    if (total + i > batas) {
      break;
    }
    total += i;
  }
  return total;
}

console.log(akumulasiSampai(10));
console.log(akumulasiSampai(15));
console.log(akumulasiSampai(5))

// deklaratif VS ekspresi

function luasPersegiPanjang(p, l) {
  return p * l;
}

const luasPersegi = function(s) {
  return s * s;
};

consolconsole.log(luasPersegiPanjang(5, 3));
console.log(luasPersegi(4))     

//array dasar - immutable

function kelolaAntrian(list, aksi) {
  const baru = [...list]; 

  switch (aksi.type) {
    case "push":
      return [...baru, aksi.value];

    case "pop":
      return baru.slice(0, -1);

    case "shift":
      return baru.slice(1);

    case "unshift":
      return [aksi.value, ...baru];

    case "insert":
    
      return [
        ...baru.slice(0, aksi.index),
        aksi.value,
        ...baru.slice(aksi.index)
      ];
    case "remove":
    
      return [
        ...baru.slice(0, aksi.index),
        ...baru.slice(aksi.index + 1)
      ];
    default:
      return baru;
  }
}

// map - kurva nilai

function kurvaNilai(santri, tambah) {
  return santri.map(s => ({
    nama: s.nama,
    nilaiBaru: s.nilai + tambah
  }));
}

const dataSantri = [
  { nama: "Ali", nilai: 75 },
  { nama: "Budi", nilai: 82 },
  { nama: "Citra", nilai: 68 }
];

const hasilKurva = kurvaNilai(dataSantri, 5);

console.log(hasilKurva);

// filter dan cari

function seleksiDanCari(arr, batas, namaDicari) {
  const lulus = arr.filter(item => item.nilai >= batas);
  const ditemukan = lulus.find(item => item.nama === namaDicari) || null;
  return { lulus, ditemukan };
}
 const data = [
  { nama: "Ali", nilai: 85 },
  { nama: "Budi", nilai: 72 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dina", nilai: 65 }
];

const hasil = seleksiDanCari(data, 75, "Citra");

console.log(hasil);

// reduce

function analitikNilai(...nilai) {
  const total = nilai.reduce((acc, n) => acc + n, 0);
  const rata = nilai.length > 0 ? total / nilai.length : 0;
  return { total, rata };
}
console.log(analitikNilai(80, 90, 70));

console.log(analitikNilai());

//destructuringh

function setGetDynamic(obj, key, value) {
  const objBaru = { ...obj, [key]: value };
  return {
    value: objBaru[key],
    obj: objBaru
  };
}

//spread n rest

function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {
  const profilGabung = { ...admin, ...asrama };
  const totalTambahan = nilaiTambahan.reduce((acc, n) => acc + n, 0);
  return { profilGabung, totalTambahan };
}

//integrasi ringkas

function laporanProgram(pondok) {
  let output = `📍 Pondok: ${pondok.nama}\n`;

  for (const prog of pondok.program) {
    output += `\n📘 Program: ${prog.nama}\n👨‍🏫 Mentor: ${prog.mentor}\n`;

    // modul dan submodul
    for (const modul of prog.modul) {
      output += `- Modul: ${modul.nama}\n`;
      if (modul.submodul && modul.submodul.length > 0) {
        for (const sub of modul.submodul) {
          output += `  • Submodul: ${sub}\n`;
        }
      }
    }

    // santri
    const santriUrut = [...prog.santri].map(s => {
      const totalNilai = s.nilai.reduce((acc, n) => acc + n, 0);
      const rata = s.nilai.length ? totalNilai / s.nilai.length : 0;

      const totalHadir = s.kehadiran.length;
      const jumlahTrue = s.kehadiran.filter(h => h).length;
      const hadirPct = totalHadir ? (jumlahTrue / totalHadir) * 100 : 0;

      const statusNilai = rata >= 75 ? "Lulus" : "Tidak Lulus";
      const statusHadir = hadirPct >= 75 ? "Rajin" : "Kurang Rajin";

      return { ...s, rata, hadirPct, statusNilai, statusHadir };
    }).sort((a, b) => b.rata - a.rata);

    for (const s of santriUrut) {
      output += `\n👤 ${s.nama}\n`;
      output += `   Rata-rata Nilai: ${s.rata.toFixed(2)} (${s.statusNilai})\n`;
      output += `   Kehadiran: ${s.hadirPct.toFixed(1)}% (${s.statusHadir})\n`;
    }
  }

  return output;
}