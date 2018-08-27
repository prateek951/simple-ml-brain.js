const brain = require('brain.js');
const dataset = require('./dataset.json');

// Long short term memory

const network = new brain.recurrent.LSTM();
const training_data = dataset.map(obs => ({
    input: obs.text,
    output: obs.category
}));

network.train(training_data,{
    iterations: 2000
});

//Given a piece of text, the neuralnet will predict whether the piece of text is pertaining to hardware or software based on the training data is provided on
const output = network.run('The code has large number of bugs');

console.log(`Category : ${output}`);