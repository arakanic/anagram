String.prototype.sorted = function() {
    return this.split("").sort().join("")
  }
  
  function anagrams(word, words) {
    return words.filter(arrayWord => {
      return arrayWord.sorted() === word.sorted()
    })
  }

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) // => []
