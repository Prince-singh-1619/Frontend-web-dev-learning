const countValue = document.querySelector('#counter');

function increment () {
    // get the value from UI
    let value = parseInt(countValue.innerText);    // parseInt converts the string value in int value
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};


function decrement () {
    // get the value from UI
    let value = parseInt(countValue.innerText);    // parseInt converts the string value in int value
    // update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value;
};