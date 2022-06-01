const bs = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


let count = 0;

bs.forEach(element => {
    if (element ===true) {
        count++
    }
    return count
})
console.log(count)

