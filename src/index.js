volumeOfContainer({ width: 2, length: 5, height: 1 })

function volumeOfContainer({ width, length, height }) {
    return width * length * height;
  }
  
  console.log(volumeOfContainer({ width: 2, length: 5, height: 1 }));
  
  function ConvertArray(obj) {
    return Object.entries(obj);
  }
  
  console.log(ConvertArray({a: 1, b: 2, c: 2}));
  
