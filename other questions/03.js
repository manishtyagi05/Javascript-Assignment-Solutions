function uniqueChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!result.includes(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
  
  // Test
  console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog")); 
  // Output: "thequickbrownfxjmpsvlazydg"
  