const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
  {
    input: [0,0,0],
    output: [0]
  },
  {
      input: [0,0,1],
      output: [0]
  },
  {
      input: [0,1,1],
      output: [0]
  },
  {
      input: [1,0,1],
      output: [1]
  },
  {
      input: [1,1,1],
      output: [1]
  }
]);

const output = network.run([1,0,0]);

console.log(`Probability that this will be 1: ${output}`);

const output2 = network.run([0,0,0]);

console.log(`Probability that this will be 0 : ${output2}`);

