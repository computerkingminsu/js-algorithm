function solution(array, commands) {
  var answer = [];
  let a = [];
  for (let i = 0; i < commands.length; i++) {
    a = array.slice(commands[i][0] - 1, commands[i][1]);
    a.sort((a, b) => a - b);
    answer.push(a[commands[i][2] - 1]);
  }
  return answer;
}
