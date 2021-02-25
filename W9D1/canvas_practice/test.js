function curriedConcat() {
  words = [];
  sent = words.join(" ");

  return function addWord(word) {
    words.push(word);
    if (word.slice(-1) === "!") console.log(sent);
  };

  return curriedConcat();
}
