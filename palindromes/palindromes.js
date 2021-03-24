const palindromes = function(str) {
    let cleaned = str.toLowerCase().match(/[a-z]/gi).reverse();
    return cleaned.join('') === cleaned.reverse().join('');
}

module.exports = palindromes
