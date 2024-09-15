const searchName = function (keyword, limit, cb) {
  const names = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];

  const searchResult = names.filter((name) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );

  cb(searchResult.slice(0, limit));
};

function limitResult(arr) {
  console.log(arr);
}

searchName("an", 3, limitResult);
