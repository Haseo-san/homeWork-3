(function delayedOutput() {
    let inputT = userInput('Enter text'),
        inputN = userInput('Enter timings').map(Number).map(time => time *= 1000),
        offset = 0,
        lastNumberInput = inputN[inputN.length - 1];
    while (inputN.length < inputT.length){
    inputN.push(lastNumberInput);
    }

    if (inputT.length < inputN.length){
        inputN.splice(inputN.length)
    }

    inputN.map(function(number, i){
        setTimeout(function(){
            console.log(inputT[i]);
            console.log(inputN[i]);
        }, number + offset);
        offset += number;
    });

    function userInput(message) {
        let input = prompt(message);
        return input && input.trim().split(' ') || null;
    }

}());