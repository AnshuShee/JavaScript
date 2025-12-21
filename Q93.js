function charFrequency(str) {
  const freq = {};

  for (const ch of str) {
    if (freq[ch]) {
      freq[ch] += 1;
    } else {
      freq[ch] = 1;
    }
  }

  return freq;
}
console.log(charFrequency("hello world")); 
