function GenerateBugID() {
  function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  let word = "";
  for (i = 0; i < 5; i++) {
    word += generateRandomLetter();
  }
  number = Math.floor(Math.random() * (9 - 0));
  const UniqueChar = "BUG-" + word + "-" + number;

  return UniqueChar;
}
module.exports = GenerateBugID;
