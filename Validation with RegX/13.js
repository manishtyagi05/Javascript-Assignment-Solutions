function isUKPostCode(value) {
    return /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i.test(value.trim());
  }
  

  console.log(isUKPostCode("SW1A 1AA"));   // true
  console.log(isUKPostCode("M1 1AE"));     // true
  console.log(isUKPostCode("INVALID"));    // false
  