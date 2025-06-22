function isCanadaPostCode(value) {
    return /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i.test(value.trim());
  }
  

  console.log(isCanadaPostCode("K1A 0B1"));   // true
  console.log(isCanadaPostCode("B2C3D4"));    // true
  console.log(isCanadaPostCode("123456"));    // false
  