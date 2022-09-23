// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

const findRepeatedDNASequence = (s) => {
  const set = new Set();
  const resultSet = new Set();

  let i = 0;
  while (i + 10 <= s.length) {
    const dna = s.substring(i, i + 10)
    if (!set.has(dna)) {
      set.add(dna)
    } else {
      resultSet.add(dna)
    }

    i++
  }

  return [...resultSet]
}