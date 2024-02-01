//Tagged templates

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
      priceCategory = 'fairly priced';
    }
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
    //   strings[2]
    // }`;
    return {name: productName, price: productPrice};
  }
  
  const prodName = 'JavaScript Course';
  const prodPrice = 29.99;
  
  const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
  console.log(productOutput);
   /**************************************************** */
   function upperCase(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
      if (i < values.length) {
        result += values[i].toUpperCase();
      }
    }
    return result;
  }
  
  const name = 'John';
  const greeting = upperCase`Hello ${name}, how are you?`;
  
  console.log(greeting);  // Outputs: "Hello JOHN, how are you?"
  