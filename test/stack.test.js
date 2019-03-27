const Stack = require('../index.js');
const assert = require('assert');

test('simple stack test', () => {
    let solution = [1, 2, 3];
    let stack = new Stack();

    for (let i of solution) stack.push(i);

    solution.reverse();

    let j = 0;
    for (let i of stack) {
        console.log(`stack ${i} solution: ${solution[j]}`);
        assert(i == solution[j++]);
    }
});
