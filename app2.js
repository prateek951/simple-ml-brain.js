const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
  { input: [1, 2], output: [1] }, //Team 2 wins
  { input: [2, 3], output: [0] }, //Team 2 wins
  { input: [2, 4], output: [1] }, //Team 4 wins
  { input: [3, 1], output: [0] } // Team 3 wins
]);

const output = network.run([1,4]);

console.log(`Probability comes out to be: ${output}`);

//Neural network gives the right prediction that team 4 should win 

