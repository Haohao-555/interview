var isValidSudoku = function (board) {
  let set = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        let val = board[i][j];
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        let r = val + "in row" + i;
        let c = val + "in col" + j;
        let b = val + "in box" + boxIndex;

        if (set.has(r) || set.has(c) || set.has(b)) {
          return false;
        } else {
          set.add(r);
          set.add(c);
          set.add(b);
        }
      }
    }
  }
  return true;
};
let data = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["2", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(data))