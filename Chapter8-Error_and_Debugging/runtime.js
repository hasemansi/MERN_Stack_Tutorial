const runtimeError = () => {
    let num = 10;
    num();
    //TypeError: num is not a function
}

module.exports = runtimeError;