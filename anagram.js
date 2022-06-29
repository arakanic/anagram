String.prototype.sorted = function() {
    return this.split("").sort().join("")
  }
  
  function anagrams(word, words) {
    return words.filter(arrayWord => {
      return arrayWord.sorted() === word.sorted()
    })
  }