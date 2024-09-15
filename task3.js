function filterAndSortStrings(minLength, maxLength, stringArray) {
  // Pastikan minLength lebih kecil dari maxLength
  if (minLength >= maxLength) {
    console.log("minLength harus lebih kecil dari maxLength.");
    return;
  }

  // Pastikan jumlah elemen dalam stringArray lebih dari 3
  if (stringArray.length <= 3) {
    console.log("Jumlah elemen dalam stringArray harus lebih dari 3.");
    return;
  }

  // Filter string berdasarkan panjangnya
  const filteredArray = stringArray.filter(
    (str) => str.length >= minLength && str.length <= maxLength
  );

  // Sort array yang sudah difilter secara ascending (abjad)
  const sortedArray = filteredArray.sort();

  // Print hasilnya ke console
  console.log(sortedArray);
}

// Contoh penggunaan
filterAndSortStrings(3, 7, [
  "apple",
  "banana",
  "kiwi",
  "cherry",
  "berry",
  "plum",
  "peach",
]);
