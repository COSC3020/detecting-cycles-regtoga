const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

graph1 = // has cycle
[ //[0, 1, 2, 3, 4, 5, 6]
    [0, 0, 3, 0, 0, 2, 0], //A, 0
    [0, 0, 0, 1, 2, 5, 2], //B, 1
    [3, 0, 0, 4, 1, 2, 0], //C, 2
    [0, 1, 4, 0, 0, 0, 0], //D, 3
    [0, 2, 1, 0, 0, 3, 0], //E, 4
    [2, 6, 2, 0, 3, 0, 5], //F, 5
    [0, 2, 0, 0, 0, 5, 0], //G, 6
]; //[0, 1, 2, 3, 4, 5, 6]

graph2 = // has cycle
[ //[0, 1, 2, 3, 4]
    [0, 1, 1, 1, 0], //A, 0
    [1, 0, 0, 0, 1], //B, 1
    [1, 0, 0, 0, 0], //C, 2
    [1, 0, 0, 0, 0], //D, 3
    [0, 1, 0, 0, 0]  //E, 4
] //[0, 1, 2, 3, 4]

graph3 = // has cycle
[ //[0, 1, 2, 3, 4]
    [0, 1, 1, 3, 0], //A, 0
    [0, 0, 0, 0, 1], //B, 1
    [0, 0, 0, 0, 3], //C, 2
    [3, 0, 0, 0, 0], //D, 3
    [0, 0, 0, 0, 1]  //E, 4
] //[0, 1, 2, 3, 4]

graph4 = // no cycle
[ //[0, 1, 2, 3, 4]
    [0, 0, 3, 0, 0], //A, 0
    [4, 0, 0, 0, 0], //B, 1
    [0, 0, 0, 0, 0], //C, 2
    [1, 0, 0, 0, 0], //D, 3
    [0, 5, 0, 0, 0]  //E, 4
] //[0, 1, 2, 3, 4]

graph5 = // ahs cycle
[
    [1]
]
graph6 = // no cycle
[
    [0]
]

graph7 = // ahs cycle
[ //[0, 1, 2, 3, 4]
    [0, 0, 0, 0, 0], //A, 0
    [0, 0, 0, 0, 1], //B, 1
    [1, 0, 0, 1, 0], //C, 2
    [1, 0, 0, 0, 0], //D, 3
    [0, 1, 0, 0, 0]  //E, 4
] //[0, 1, 2, 3, 4]

graph8 = // no cycle
[
    []
]

function allTests() {
    const results = [
        hasCycle(graph1) === true,
        hasCycle(graph2) === true,
        hasCycle(graph3) === true,
        hasCycle(graph4) === false,
        hasCycle(graph5) === true,
        hasCycle(graph6) === false,
        hasCycle(graph7) === true,
        hasCycle(graph8) === false
    ];
    return results.every(Boolean);
}

jsc.check(allTests);