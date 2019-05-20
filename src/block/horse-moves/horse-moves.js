/* eslint-disable no-alert */
const additionBtn = document.querySelector('.horse-moves__btn');
const input = document.querySelector('.horse-moves__input');

const numberOfX = {
  A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7,
};
const x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const createMove = (val1, val2) => {
  if (val1 && val2) {
    return `${val1}${val2} `;
  }
  return '';
};

const getPossibleMoves = (c, b) => {
  const a = numberOfX[c.toUpperCase()];

  if (b < 1 || b > 8 || a === undefined) {
    return alert('Ошибка: Неправильное исходное положение! Пример исходного положения: "D4"');
  }

  const x1 = x[a - 1] === undefined ? false : x[a - 1];
  const y1 = (b - 2) > 0 ? (b - 2) : false;
  const move1 = createMove(x1, y1);

  const x2 = x[a - 1] === undefined ? false : x[a - 1];
  const y2 = (b + 2) < 9 ? (b + 2) : false;
  const move2 = createMove(x2, y2);

  const x3 = x[a - 2] === undefined ? false : x[a - 2];
  const y3 = (b - 1) > 0 ? (b - 1) : false;
  const move3 = createMove(x3, y3);

  const x4 = x[a - 2] === undefined ? false : x[a - 2];
  const y4 = b + 1 < 9 ? (b + 1) : false;
  const move4 = createMove(x4, y4);

  const x5 = x[a + 1] === undefined ? false : x[a + 1];
  const y5 = b + 2 < 9 ? (b + 2) : false;
  const move5 = createMove(x5, y5);

  const x6 = x[a + 1] === undefined ? false : x[a + 1];
  const y6 = (b - 2) > 0 ? (b - 2) : false;
  const move6 = createMove(x6, y6);

  const x7 = x[a + 2] === undefined ? false : x[a + 2];
  const y7 = b + 1 < 9 ? (b + 1) : false;
  const move7 = createMove(x7, y7);

  const x8 = x[a + 2] === undefined ? false : x[a + 2];
  const y8 = (b - 1) > 0 ? (b - 1) : false;
  const move8 = createMove(x8, y8);
  const moves = move1 + move2 + move3 + move4 + move5 + move6 + move7 + move8;
  return alert(`Возможные варианты хода: \n\n ${moves}`);
};

additionBtn.addEventListener('click', () => {
  const position = input.value;
  getPossibleMoves(position[0], Number(position[1]));
  input.value = '';
});
