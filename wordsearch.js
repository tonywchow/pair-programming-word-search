const wordSearch = (letters, word) => {
  if(letters.length === 0) {//Checks if empty array;
    return false
  }
  let verticalArray = transpose(letters);//transposed the array
  const verticalJoin = verticalArray.map(ls => ls.join(''));//Joins all the elements together into a new array
  const horizontalJoin = letters.map(ls => ls.join(''));
  let result = false; 
  for (let l of horizontalJoin) {//Checks horizontally if the word is present
    if (l.includes(word)) {
      return true;
    }
  }
  for (let v of verticalJoin) {//checks vertically if the word is present
    if (v.includes(word)) {
      return true;
    }
  }
  return result;
};

const transpose = function(matrix) {
  let finalArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newArr = [];
    for (let j = 0; j < matrix.length; j++) {
      newArr.push([matrix[j][i]]);
    }
    finalArr.push(newArr);
  }
  return finalArr;
};
  

module.exports = wordSearch;