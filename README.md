# anagram
Two words are anagrams of each other if they both contain the same exact letters. This function finds anagrams of a particular word from a list of words. It takes two inputs, a word and an array with words, and returns an array of all anagrams (or an empty array if there are none). 

For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
