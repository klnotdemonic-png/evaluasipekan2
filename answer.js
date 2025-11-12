
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
