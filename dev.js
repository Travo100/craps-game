var diceOne, diceTwo, roll, point;
var turns = 0,
    point = 0;
var dice1P = document.getElementById('dice1p');
var dice2p = document.getElementById('dice2p');
var rollp = document.getElementById('rollp');
var rollBtn = document.getElementById('roll');
var currPoint = document.getElementById('currPoint');
var currRoll = document.getElementById('currRoll');
var diceOneDiv = document.getElementById('diceOneDiv');
var diceTwoDiv = document.getElementById('diceTwoDiv');

rollBtn.addEventListener('click', onClick);

function onClick() {
  rollDice();
  turns++;
  currRoll.innerHTML = "The current turn is : " + turns.toString();  
}

function rollDice() {

  diceOne = Math.floor(Math.random() * 6) + 1; //1-6
  diceTwo = Math.floor(Math.random() * 6) + 1; //1-6
  roll = diceOne + diceTwo;

  dice1p.innerHTML = diceOne.toString();
  dice2p.innerHTML = diceTwo.toString();
  rollp.innerHTML = roll.toString();

  diceOneDiv.setAttribute("class", "value" + diceOne);
  diceTwoDiv.setAttribute("class", "value" + diceTwo);

  //Did we win or lose?
  if (turns === 0) {
    if(roll === 7 || roll === 11) {
      rollp.innerHTML = 'You Win!';
      turns = 0;  
    } else if (roll === 2 || roll === 3 || roll === 12) {
      rollp.innerHTML = 'You Lose!'; 
      turns = 0;
    } else {
      point = roll;
      currPoint.innerHTML = "The current point is : " + point.toString();
    }
  }
  if (turns >= 1) {
    
    if (roll === 7 || roll === point) {
      rollp.innerHTML = 'You Lose!';
      turns = -1;
      point = 0;
      currPoint.innerHTML = "The current point is : " + point.toString();
    }
  } 
}