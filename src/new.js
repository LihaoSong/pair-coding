function NumbersAndLetters(str) {
    let letters = 0;
    let numbers = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "a" && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z") {
        letters++;
      } else if (Number.isInteger(Number(str[i]))) {
        numbers++;
      }
    }
  
    return {
      "letters": letters,
      "numbers": numbers
    };
  }  
  
  console.log(NumbersAndLetters("Hello World 2023"));