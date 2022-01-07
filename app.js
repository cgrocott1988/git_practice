// Putting motivational quotes into a array

const quote1 = 'We cannot solve problems with the kind of thinking we employed when we came up with them.';
const quote2 = 'Learn as if you will live forever, live like you will die tomorrow.';
const quote3 = 'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.';
const quote4 = 'When you change your thoughts, remember to also change your world.';
const quote5 = 'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.';
const quote6 = 'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.';
// All arrays in a batch variable
const batch = [quote1, quote2, quote3, quote4, quote5, quote6];
// Function to generate random number depending on array length.
const randomQuote = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  return random;
}
// Run the program.
const runProgram = () => console.log(`Heare is your quote: ${batch[randomQuote(batch)]}`);

runProgram();

