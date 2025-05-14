function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false