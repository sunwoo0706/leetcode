/** 풀이 참조 : https://chamdom.blog/pg2-181188/ */

const targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

function solution(targets) {
  targets.sort((a, b) => b[0] - a[0]);

  let answer = 1;
  let checkPoint = targets[0][0];

  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (end <= checkPoint) {
      checkPoint = start;
      answer++;
    }
  }

  return answer;
}

console.log(solution(targets));
