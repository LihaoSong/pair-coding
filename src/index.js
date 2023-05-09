volumeOfContainer({ width: 2, length: 5, height: 1 })

function volumeOfContainer({ width, length, height }) {
    return width * length * height;
  }
  
  console.log(volumeOfContainer({ width: 2, length: 5, height: 1 }));
  
  function ConvertArray(obj) {
    return Object.entries(obj);
  }
  
  console.log(ConvertArray({a: 1, b: 2, c: 2}));

  Numbers&Letters("Hello Wold 2023") - {"letters": 10, "numbers": 4}

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
  
//   Number.isNaN()
//   .push
//   .length
//   .split()
//   for loops
//   if , else
//   No to REGX
