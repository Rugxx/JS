'use strict';

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      // Get the answer
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register Answer
    typeof answer === `number` &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults(`string`);
  },
  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, `string`);
*/

// CHALLANGE 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();

(function () {
  const header2 = document.querySelector('h1');
  header2.style.color = 'black';

  document.querySelector(`body`).addEventListener(`click`, function () {
    header2.style.color = `yellow`;
  });
})();
