/*
calculate average score 
data bonus 1: dolphin 97, 112, and 101
koalas 109, 95, 123
data bonus 2: dolphin 97, 112, 101
koalas 109, 95, 106
*/
const teamdolphinScore1 = '97';
const teamdolphinScore2 = '112';
const teamdolphinScore3 = '101';
const teamkoalasScore1 = '109';
const teamkoalasScore2 = '95';
const teamkoalasScore3 = '123';

console.log(Number(teamdolphinScore1 + teamdolphinScore2 + teamdolphinScore3 / 3));
console.log(Number(teamkoalasScore1 + teamkoalasScore2 + teamkoalasScore3 / 3));

const scoredolphin = (96 + 112 + 101 / 3 );
const scorekoala = (109 + 95 + 123 / 3);
console.log(scoredolphin, scorekoala);

if (scoredolphin > scorekoala) {
    console.log('Dolphins win the trophy');
}else if (scorekoala > scoredolphin) {
    console.log('Koala win the trophy');
}else if (scoredolphin === scorekoala){
    console.log('Both win the trophy');
}

