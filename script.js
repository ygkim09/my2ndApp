const answer = Math.floor(Math.random() * 100) + 1;
let tries = 0;

function checkGuess() {
  const guess = Number(document.getElementById('guess').value);
  const result = document.getElementById('result');
  tries++;

  if (guess === answer) {
    result.textContent = `정답입니다! 시도 횟수: ${tries}번`;
  } else if (guess < answer) {
    result.textContent = '너무 작아요!';
  } else {
    result.textContent = '너무 커요!';
  }
}
