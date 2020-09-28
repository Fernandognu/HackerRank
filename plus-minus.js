'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let fracPos = 0;
    let fracNeg = 0;
    let fracZero = 0;
    const size = arr.length;

    for (let i in arr) {
        let val = arr[i];
        if (val > 0) {
            // fracPos
            fracPos += 1;
        } else {
            if (val < 0) {
                // fracNeg
                fracNeg += 1;
            } else {
                // fracZero
                fracZero += 1;
            }
        }
    }
    console.log(fracPos / size)
    console.log(fracNeg / size)
    console.log(fracZero / size)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

