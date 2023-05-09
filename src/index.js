volumeOfContainer({ width: 2, length: 5, height: 1 })


// function to figure out the volume of a container with width: 2, length: 5, height: 1

function volumeOfContainer(sizes) {
    let volume = 1;
    for (let i = 0; i < sizes.length; i++) {
        volume *= sizes[i];
    }
    return volume;
}

console.log(volumeOfContainer([2, 5, 1])); // 10


