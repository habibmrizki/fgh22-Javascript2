// 1.) Method Map
// Map adalah sebuah metode untuk menampilkan isi didalam sebuah array tanpa menggunakan perulangan dengan mengembalikan nilai array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2);

// 2. Method forEach
// untuk melakukan perulangan dalam array

// const motor = ["beat", "nmax", "supra", "mio"];
// motor.forEach((item) => {
//   console.log(item);
// });

// 3.) Method filter
// Fungsi filter() dalam JavaScript memungkinkan kamu untuk membuat array baru dari array yang sudah ada, berdasarkan kriteria tertentu.
// Fungsi ini dimanfaatkan untuk memanipulasi data dan membuat kode lebih efisien sekaligus mudah dibaca.
// Contoh :

// 4.). Method Find
// menemukan suatu value dengan kriteria tertentu
// var angka = [1,4,5,6,78,23,14,15]
// var angka2 = angka.find(function(x){
//     return x < 6;
// });
// console.log(angka2)

// const number = [1, 2, 10, 5, 20, 3, 6, 7, 4, 8];
// const newNumber = number.filter(function (x) {
//   return x > 5;
// });
// console.log(newNumber);
//  Output =>[ 10, 20, 6, 7, 8 ]

// 5.) Method Includes
// untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak.
// dengan output berupa boolean
// contoh :

// const angka = [1, 2, 3, 4, 5];
// const ada = angka.includes(3);
// const tidakAda = angka.includes(6);

// console.log(`${ada} \n${tidakAda}`);

// Output =>
// true
// false

// 6.) Method Every
// digunakan untuk memeriksa apakah semua elemen dalam sebuah array memenuhi suatu kondisi yang diberikan oleh fungsi callback.
// contoh :

// const numbers = [1, -2, 3, 4];

// const allPositive = numbers.every(function(number) {
//   return number > 0;
// });

// console.log(allPositive); // Output: false

// 7.) Method Some
// metode yang digunakan pada array untuk memeriksa apakah setidaknya satu elemen dari array tersebut memenuhi kondisi yang diberikan
// contoh :

// const words = ['apple', 'banana', 'cherry', 'kiwi'];

// const hasLongWord = words.some(function(word) {
//     return word.length > 5;
//   });

//   console.log(hasLongWord); // Output: true

// 8.) Method Reduce
// merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array,
// nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.
// contoh :

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

// 9.) Method Slice
// Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array untuk menjadi array yang baru
// Contoh :

// const fruits = ["Mangga", "Jeruk", "Pisang", "Manggis", "Duku"];
// const slicefruits = fruits.slice(1, 3);
// console.log(slicefruits);

// // Output => [ 'Jeruk', 'Pisang' ]

// 10.) Method Splice
// Merupakan method array di JavaScript yang berfungsi untuk mengubah elemen array termasuk menghapus, mengganti, atau menambah elemen baru.
// Contoh :

// const hari = ['senin', 'selasa', 'ayam', 'bebek', 'rabu', 'kamis'];

// hari.splice(2, 2);

// console.log(hari); // [ 'senin', 'selasa', 'rabu', 'kamis' ]

// 11.) Method Push
// Method Pudh digunakan untuk menambah elemen array di akhir array.
// Setelah menambahkan elemen-elemen ke akhir suatu array, push() akan mengembalikan nilai berupa jumlah elemen yang ada.
// contoh :

// let languages = ["Java", "PHP", "Python"];
// let addlanguages = languages.push("JS");

// console.log(addlanguages);
// // Output => 4

// console.log(languages);
// // Output => [ 'Java', 'PHP', 'Python', 'JS' ]

// 12.) Method Pop
// Method Pudh digunakan untuk menghapus elemen array di akhir array
// contoh :

// const names = ["Dadang", "Temon", "Goping"];
// names.pop();
// console.log(names);
// // Output => [ 'Dadang', 'Temon' ]

// 13. Method Sort
// metode yang digunakan untuk mengurutkan sebuah value
// contoh :

// var angka = [1, 2, 6, 9, 5, 20, 3, 7, 8];

// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka);

// output => [
//   1, 2, 3,  5, 6,
//   7, 8, 9, 20
// ]

// 14.) Method Reverse
// methode yang digunakan untuk membalik suatu value dimulai dari karakter terakhir
// contoh :

// var nama = ["Habib", "Muhammad", "Rizki"];
// nama.reverse();
// console.log(nama);

// Output => [ 'Rizki', 'Muhammad', 'Habib' ]
