// Initialize card number Var
var cardNum = 1;
// Initialize start Vars for animation
var startInstr2, startInstr3, startInstr4, startInstr5, startInstr6, startInstr7, startInstr8, startInstr9, startTask11 = null;

// Let's declare a state matrix which tells us how to display elements
var stateMatrix = [
  ['VI',0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,2,1,0,0,0,1,0,0,0,3,1,0,0,0,1,0,0,0],
  ['VI',0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,3,1,0,0,0,1,0,0,0,2,1,0,0,0,1,0,0,0],
  ['V',0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,3,1,0,1,0,1,0,1,0,2,1,0,1,0,1,0,1,0],
  ['II',0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,3,1,0,1,0,1,0,1,1,4,1,0,1,1,1,0,1,1],
  ['V',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,2,1,1,0,0,1,1,0,0,3,1,1,0,0,1,1,0,0],
  ['II',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,2,1,1,0,0,1,1,0,1,4,1,1,0,1,1,1,0,1],
  ['IV',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,2,1,1,0,0,1,1,1,0,3,1,1,1,0,1,1,1,0],
  ['III',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,2,1,1,0,0,1,1,1,0,3,1,1,1,0,1,1,1,1],
  ['I',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,2,1,1,0,0,1,1,1,1,4,1,1,0,1,1,1,1,1],
  ['IV',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,3,1,0,1,0,1,1,1,0,2,1,1,1,0,1,1,1,0],
  ['III',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,3,1,0,1,0,1,1,1,0,2,1,1,1,0,1,1,1,1],
  ['I',0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,3,1,0,1,0,1,1,1,1,4,1,0,1,1,1,1,1,1]
];
console.log(stateMatrix);
// Assign probability to each outcome type (I, II, etc.)
// These are the Common Cause probabilities from flow chart
var phi = 0.8; // This is the chance elements successfully unlock
// Outcome proability goes into this array
var outcomeProbs = [];
// We will expand the state matrix into this array
var stateMatrixNew = [];
for (var i=0;i<=11;i++) {
  if (stateMatrix[i][0] == 'I') {
    outcomeProbs[0] = Math.round(100*(Math.pow(phi,3)/2));
    for (var j=0;j<outcomeProbs[0];j++) {
      stateVec = Array(35)
      for (var k=0;k<=35;k++){
        stateVec[k] = stateMatrix[i][k];
      }
      stateMatrixNew.push(stateVec);
    }
  } else if (stateMatrix[i][0] == 'II') {
    outcomeProbs[1] = Math.round(100*(2*Math.pow(phi,2)*(1-phi))/2);
    for (var j=0;j<outcomeProbs[1];j++) {
      stateVec = Array(35)
      for (var k=0;k<=35;k++){
        stateVec[k] = stateMatrix[i][k];
      }
      stateMatrixNew.push(stateVec);
    }
  } else if (stateMatrix[i][0] == 'III') {
    outcomeProbs[2] = Math.round(100*(Math.pow(phi,3)*(1-phi))/2);
    for (var j=0;j<outcomeProbs[2];j++) {
      stateVec = Array(35)
      for (var k=0;k<=35;k++){
        stateVec[k] = stateMatrix[i][k];
      }
      stateMatrixNew.push(stateVec);
    }
  } else if (stateMatrix[i][0] == 'IV') {
    outcomeProbs[3] = Math.round(100*(Math.pow(phi,2)*Math.pow((1-phi),2))/2);
    for (var j=0;j<outcomeProbs[3];j++) {
      stateVec = Array(35)
      for (var k=0;k<=35;k++){
        stateVec[k] = stateMatrix[i][k];
      }
      stateMatrixNew.push(stateVec);
    }
  } else if (stateMatrix[i][0] == 'V') {
    outcomeProbs[4] = Math.round(100*(2*phi*Math.pow(1-phi,2))/2);
    for (var j=0;j<outcomeProbs[4];j++) {
      stateVec = Array(35)
      for (var k=0;k<=35;k++){
        stateVec[k] = stateMatrix[i][k];
      }
      stateMatrixNew.push(stateVec);
    }
  } else if (stateMatrix[i][0] == 'VI') {
    outcomeProbs[5] = Math.round(100*(Math.pow(1-phi,2))/2);
    for (var j=0;j<outcomeProbs[5];j++) {
      stateVec = Array(35)
      for (var k=0;k<=35;k++){
        stateVec[k] = stateMatrix[i][k];
      }
      stateMatrixNew.push(stateVec);
    }
  }
}
stateMatrix = stateMatrixNew
// Next, shuffle the rows of the matrix
var trialNums = [];
for (i=0;i<stateMatrix.length;i++) {
  trialNums.push(i);
}
// We will put shuffled trial numbers into this array
var trialNumsNew = [];
for (i=0;i<stateMatrix.length;i++) {
  trialNumsNew.push(getRandomFromBucket(trialNums));
}
trialNums = trialNumsNew;
// Need to declare an attempt number to cycle through state sequences
var attemptNum = 0; // This needs to be declared outside of a function

// Hide each card except for initial card
hideCards();

// Listen for events
addBtnEvents();

// Add function for hiding all cards at beginning
function hideCards() {
  document.getElementById('instructions-2').style.display = 'none'
  document.getElementById('instructions-3').style.display = 'none'
  document.getElementById('instructions-4').style.display = 'none'
  document.getElementById('instructions-5').style.display = 'none'
  document.getElementById('instructions-6').style.display = 'none'
  document.getElementById('instructions-7').style.display = 'none'
  document.getElementById('instructions-8').style.display = 'none'
  document.getElementById('instructions-9').style.display = 'none'
  document.getElementById('instructions-10').style.display = 'none'
}

// Add function for listening to events
function addBtnEvents(){
  // Listen for Page 1 submit
  document.getElementById('next-btn-1').addEventListener('click', function(){
    document.getElementById('instructions-1').style.display = 'none';
    document.getElementById('instructions-2').style.display = 'block';
    cardNum = 2;
    window.requestAnimationFrame(stepInstr2);
  });
  // Listen for Page 2 submit
  document.getElementById('next-btn-2').addEventListener('click', function(){
    document.getElementById('instructions-2').style.display = 'none';
    document.getElementById('instructions-3').style.display = 'block';
    cardNum = 3;
    window.requestAnimationFrame(stepInstr3);
  })
  // Listen for Page 3 submit
  document.getElementById('next-btn-3').addEventListener('click', function(){
    document.getElementById('instructions-3').style.display = 'none';
    document.getElementById('instructions-4').style.display = 'block';
    cardNum = 4;
    window.requestAnimationFrame(stepInstr4);
  })
  // Listen for Page 4 submit
  document.getElementById('next-btn-4').addEventListener('click', function(){
    document.getElementById('instructions-4').style.display = 'none';
    document.getElementById('instructions-5').style.display = 'block';
    cardNum = 5;
    window.requestAnimationFrame(stepInstr5);
  })
  // Listen for Page 5 submit
  document.getElementById('next-btn-5').addEventListener('click', function(){
    document.getElementById('instructions-5').style.display = 'none';
    document.getElementById('instructions-6').style.display = 'block';
    cardNum = 6;
    window.requestAnimationFrame(stepInstr6);
  })
  // Listen for Page 6 submit
  document.getElementById('next-btn-6').addEventListener('click', function(){
    document.getElementById('instructions-6').style.display = 'none';
    document.getElementById('instructions-7').style.display = 'block';
    cardNum += 1;
    window.requestAnimationFrame(stepInstr7);
  })
  // Listen for Page 7 submit
  document.getElementById('next-btn-7').addEventListener('click', function(){
    document.getElementById('instructions-7').style.display = 'none';
    document.getElementById('instructions-8').style.display = 'block';
    cardNum += 1;
    window.requestAnimationFrame(stepInstr8);
  })
  // Listen for Page 8 submit
  document.getElementById('next-btn-8').addEventListener('click', function(){
    document.getElementById('instructions-8').style.display = 'none';
    document.getElementById('instructions-9').style.display = 'block';
    cardNum += 1;
    window.requestAnimationFrame(stepInstr9);
  })
  // Listen for Page 9 submit
  document.getElementById('next-btn-9').addEventListener('click', function(){
    document.getElementById('instructions-9').style.display = 'none';
    document.getElementById('instructions-10').style.display = 'block';
    cardNum += 1;
  })
  // Listen for Page 10 submit
  document.getElementById('next-btn-10').addEventListener('click', function(){
    document.getElementById('instructions-10').style.display = 'none';
    document.getElementById('task-11').style.display = 'block';
    cardNum += 1;
    // Determine the position of each button (9 possible positions)
    var bucket = [];
    for (var i=0;i<=8;i++) {
      bucket.push(i);
    }
    // Pick a random number between 0 and 8 (3 times)
    // Use these values to place buttons in random positions
    elementPositions = []
    for (var i=0;i<=2;i++) {
      elementPositions.push(getRandomFromBucket(bucket));
    }
    elementPositions.push(9); // Add 9 to account for box position
    // Show action sequences for each possible attempt
    window.requestAnimationFrame(stepTask11);
  })
}

// Add function to get randomized button positions
function getRandomFromBucket(bucket) {
   var randomIndex = Math.floor(Math.random()*bucket.length);
   return bucket.splice(randomIndex, 1)[0];
}

/*
----------------------
STEP FUNCTIONS GO HERE
----------------------
*/ 
// Step function (Instructions 2)
function stepInstr2(timestamp){
  if (!startInstr2 && cardNum === 2) {
    document.getElementById('instr-2-btn-1').src = "img/btn_gray_off.png";
    document.getElementById('instr-2-btn-2').src = "img/btn_gray_off.png";
    document.getElementById('instr-2-btn-3').src = "img/btn_gray_off.png";
    document.getElementById('instr-2-off-1').style.display = 'block';
    document.getElementById('instr-2-off-2').style.display = 'block';
    document.getElementById('instr-2-off-3').style.display = 'block';
    document.getElementById('instr-2-on-1').style.display = 'none';
    document.getElementById('instr-2-on-2').style.display = 'none';
    document.getElementById('instr-2-on-3').style.display = 'none';
    document.getElementById('instr-2-pointer-1').style.display = 'none';
    document.getElementById('instr-2-pointer-2').style.display = 'none';
    document.getElementById('instr-2-pointer-3').style.display = 'none';
    setTimeout(function(){
      document.getElementById('instr-2-btn-1').src = "img/btn_gray_on.png";
      document.getElementById('instr-2-off-1').style.display = 'none';
      document.getElementById('instr-2-on-1').style.display = 'block';
      document.getElementById('instr-2-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-2-btn-2').src = "img/btn_gray_on.png";
      document.getElementById('instr-2-off-2').style.display = 'none';
      document.getElementById('instr-2-on-2').style.display = 'block';
      document.getElementById('instr-2-pointer-1').style.display = 'none';
      document.getElementById('instr-2-pointer-2').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-2-btn-3').src = "img/btn_gray_on.png";
      document.getElementById('instr-2-off-3').style.display = 'none';
      document.getElementById('instr-2-on-3').style.display = 'block';
      document.getElementById('instr-2-pointer-2').style.display = 'none';
      document.getElementById('instr-2-pointer-3').style.display = 'block';
    }, 3000);
    startInstr2 = timestamp;
  }
  var progress = timestamp - startInstr2;
  if (progress > 4500 && cardNum === 2) {
    document.getElementById('instr-2-btn-1').src = "img/btn_gray_off.png";
    document.getElementById('instr-2-btn-2').src = "img/btn_gray_off.png";
    document.getElementById('instr-2-btn-3').src = "img/btn_gray_off.png";
    document.getElementById('instr-2-off-1').style.display = 'block';
    document.getElementById('instr-2-off-2').style.display = 'block';
    document.getElementById('instr-2-off-3').style.display = 'block';
    document.getElementById('instr-2-on-1').style.display = 'none';
    document.getElementById('instr-2-on-2').style.display = 'none';
    document.getElementById('instr-2-on-3').style.display = 'none';
    document.getElementById('instr-2-pointer-1').style.display = 'none';
    document.getElementById('instr-2-pointer-2').style.display = 'none';
    document.getElementById('instr-2-pointer-3').style.display = 'none';
    setTimeout(function(){
      document.getElementById('instr-2-btn-1').src = "img/btn_gray_on.png";
      document.getElementById('instr-2-off-1').style.display = 'none';
      document.getElementById('instr-2-on-1').style.display = 'block';
      document.getElementById('instr-2-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-2-btn-2').src = "img/btn_gray_on.png";
      document.getElementById('instr-2-off-2').style.display = 'none';
      document.getElementById('instr-2-on-2').style.display = 'block';
      document.getElementById('instr-2-pointer-1').style.display = 'none';
      document.getElementById('instr-2-pointer-2').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-2-btn-3').src = "img/btn_gray_on.png";
      document.getElementById('instr-2-off-3').style.display = 'none';
      document.getElementById('instr-2-on-3').style.display = 'block';
      document.getElementById('instr-2-pointer-2').style.display = 'none';
      document.getElementById('instr-2-pointer-3').style.display = 'block';
    }, 3000);
    startInstr2 = timestamp;
  }
  window.requestAnimationFrame(stepInstr2);
}
// Step function (Instructions 3)
function stepInstr3(timestamp){
  if (!startInstr3 && cardNum === 3) {
    document.getElementById('instr-3-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-3-pointer-1').style.display = 'none';
    document.getElementById('instr-3-pointer-2').style.display = 'none';
    document.getElementById('instr-3-pointer-3').style.display = 'none';
    setTimeout(function(){
      document.getElementById('instr-3-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-3-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-3-pointer-1').style.display = 'none';
      document.getElementById('instr-3-pointer-2').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-3-pointer-2').style.display = 'none';
      document.getElementById('instr-3-pointer-3').style.display = 'block';
    }, 3000);
    startInstr3 = timestamp;
  }
  var progress = timestamp - startInstr3;
  if (progress > 4500 && cardNum === 3) {
    document.getElementById('instr-3-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-3-pointer-1').style.display = 'none';
    document.getElementById('instr-3-pointer-2').style.display = 'none';
    document.getElementById('instr-3-pointer-3').style.display = 'none';
    setTimeout(function(){
      document.getElementById('instr-3-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-3-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-3-pointer-1').style.display = 'none';
      document.getElementById('instr-3-pointer-2').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-3-pointer-2').style.display = 'none';
      document.getElementById('instr-3-pointer-3').style.display = 'block';
    }, 3000);
    startInstr3 = timestamp;
  }
  window.requestAnimationFrame(stepInstr3);
}
// Step function (Instructions 4)
function stepInstr4(timestamp){
  if (!startInstr4 && cardNum === 4) {
    document.getElementById('instr-4-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-4-btn-2').src = "img/btn_red_off.png";
    document.getElementById('instr-4-pointer-1').style.display = 'none';
    document.getElementById('instr-4-active-2').style.display = 'none';
    document.getElementById('instr-4-inactive-2').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-4-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-4-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-4-pointer-1').style.display = 'block';
      document.getElementById('instr-4-inactive-2').style.display = 'none';
      document.getElementById('instr-4-active-2').style.display = 'block';
    }, 1000);
    startInstr4 = timestamp;
  }
  var progress = timestamp - startInstr4;
  if (progress > 3500 && cardNum === 4) {
    document.getElementById('instr-4-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-4-btn-2').src = "img/btn_red_off.png";
    document.getElementById('instr-4-pointer-1').style.display = 'none';
    document.getElementById('instr-4-active-2').style.display = 'none';
    document.getElementById('instr-4-inactive-2').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-4-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-4-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-4-pointer-1').style.display = 'block';
      document.getElementById('instr-4-inactive-2').style.display = 'none';
      document.getElementById('instr-4-active-2').style.display = 'block';
    }, 1000);
    startInstr4 = timestamp;
  }
  window.requestAnimationFrame(stepInstr4);
}
// Step function (Instructions 5)
function stepInstr5(timestamp){
  if (!startInstr5 && cardNum === 5) {
    document.getElementById('instr-5-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-5-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-5-btn-3').src = "img/btn_green_off.png";
    document.getElementById('instr-5-pointer-1').style.display = 'none';
    document.getElementById('instr-5-pointer-2').style.display = 'none';
    document.getElementById('instr-5-pointer-3').style.display = 'none';
    document.getElementById('instr-5-box-unlocked').style.display = 'none';
    document.getElementById('instr-5-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-5-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-5-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-5-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-5-pointer-1').style.display = 'none';
      document.getElementById('instr-5-pointer-2').style.display = 'block';
      document.getElementById('instr-5-box-locked').style.display = 'none';
      document.getElementById('instr-5-box-unlocked').style.display = 'block';
    }, 2000);
    startInstr5 = timestamp;
  }
  var progress = timestamp - startInstr5;
  if (progress > 3500 && cardNum === 5) {
    document.getElementById('instr-5-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-5-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-5-btn-3').src = "img/btn_green_off.png";
    document.getElementById('instr-5-pointer-1').style.display = 'none';
    document.getElementById('instr-5-pointer-2').style.display = 'none';
    document.getElementById('instr-5-pointer-3').style.display = 'none';
    document.getElementById('instr-5-box-unlocked').style.display = 'none';
    document.getElementById('instr-5-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-5-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-5-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-5-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-5-pointer-1').style.display = 'none';
      document.getElementById('instr-5-pointer-2').style.display = 'block';
      document.getElementById('instr-5-box-locked').style.display = 'none';
      document.getElementById('instr-5-box-unlocked').style.display = 'block';
    }, 2000);
    startInstr5 = timestamp;
  }
  window.requestAnimationFrame(stepInstr5);
}
// Step function (Instructions 6)
function stepInstr6(timestamp){
  if (!startInstr6 && cardNum === 6) {
    document.getElementById('instr-6-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-6-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-6-btn-3').src = "img/btn_green_off.png";
    document.getElementById('instr-6-pointer-1').style.display = 'none';
    document.getElementById('instr-6-pointer-2').style.display = 'none';
    document.getElementById('instr-6-pointer-3').style.display = 'none';
    document.getElementById('instr-6-box-unlocked').style.display = 'none';
    document.getElementById('instr-6-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-6-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-6-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-1').style.display = 'none';
      document.getElementById('instr-6-pointer-2').style.display = 'block';
      document.getElementById('instr-6-box-locked').style.display = 'none';
      document.getElementById('instr-6-box-unlocked').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-6-btn-1').src = "img/btn_green_off.png";
      document.getElementById('instr-6-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-6-btn-3').src = "img/btn_green_off.png";
      document.getElementById('instr-6-pointer-1').style.display = 'none';
      document.getElementById('instr-6-pointer-2').style.display = 'none';
      document.getElementById('instr-6-pointer-3').style.display = 'none';
      document.getElementById('instr-6-box-unlocked').style.display = 'none';
      document.getElementById('instr-6-box-locked').style.display = 'block';
    }, 4000)
    setTimeout(function(){
      document.getElementById('instr-6-btn-3').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-3').style.display = 'block';
    }, 5000);
    setTimeout(function(){
      document.getElementById('instr-6-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-3').style.display = 'none';
      document.getElementById('instr-6-pointer-2').style.display = 'block';
      document.getElementById('instr-6-box-locked').style.display = 'none';
      document.getElementById('instr-6-box-unlocked').style.display = 'block';
    }, 6000);
    startInstr6 = timestamp;
  }
  var progress = timestamp - startInstr6;
  if (progress > 9000 && cardNum === 6) {
    document.getElementById('instr-6-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-6-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-6-btn-3').src = "img/btn_green_off.png";
    document.getElementById('instr-6-pointer-1').style.display = 'none';
    document.getElementById('instr-6-pointer-2').style.display = 'none';
    document.getElementById('instr-6-pointer-3').style.display = 'none';
    document.getElementById('instr-6-box-unlocked').style.display = 'none';
    document.getElementById('instr-6-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-6-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-6-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-1').style.display = 'none';
      document.getElementById('instr-6-pointer-2').style.display = 'block';
      document.getElementById('instr-6-box-locked').style.display = 'none';
      document.getElementById('instr-6-box-unlocked').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-6-btn-1').src = "img/btn_green_off.png";
      document.getElementById('instr-6-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-6-btn-3').src = "img/btn_green_off.png";
      document.getElementById('instr-6-pointer-1').style.display = 'none';
      document.getElementById('instr-6-pointer-2').style.display = 'none';
      document.getElementById('instr-6-pointer-3').style.display = 'none';
      document.getElementById('instr-6-box-unlocked').style.display = 'none';
      document.getElementById('instr-6-box-locked').style.display = 'block';
    }, 4000)
    setTimeout(function(){
      document.getElementById('instr-6-btn-3').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-3').style.display = 'block';
    }, 5000);
    setTimeout(function(){
      document.getElementById('instr-6-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-6-pointer-3').style.display = 'none';
      document.getElementById('instr-6-pointer-2').style.display = 'block';
      document.getElementById('instr-6-box-locked').style.display = 'none';
      document.getElementById('instr-6-box-unlocked').style.display = 'block';
    }, 6000);
    startInstr6 = timestamp;
  }
  window.requestAnimationFrame(stepInstr6);
}
// Step function (Instructions 7)
function stepInstr7(timestamp){
  if (!startInstr7 && cardNum === 7) {
    document.getElementById('instr-7-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-7-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-7-pointer-pb-a3').style.display = 'none';
    document.getElementById('instr-7-box-opened').style.display = 'none';
    document.getElementById('instr-7-box-unlocked').style.display = 'none';
    document.getElementById('instr-7-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-7-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-7-pointer-p1-a1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-7-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-7-pointer-p1-a1').style.display = 'none';
      document.getElementById('instr-7-pointer-p2-a2').style.display = 'block';
      document.getElementById('instr-7-box-locked').style.display = 'none';
      document.getElementById('instr-7-box-unlocked').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-7-pointer-p2-a2').style.display = 'none';
      document.getElementById('instr-7-pointer-pb-a3').style.display = 'block';
      document.getElementById('instr-7-box-unlocked').style.display = 'none';
      document.getElementById('instr-7-box-opened').style.display = 'block';
    }, 3000)
    startInstr7 = timestamp;
  }
  var progress = timestamp - startInstr7;
  if (progress > 4500 && cardNum === 7) {
    document.getElementById('instr-7-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-7-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-7-pointer-pb-a3').style.display = 'none';
    document.getElementById('instr-7-box-opened').style.display = 'none';
    document.getElementById('instr-7-box-unlocked').style.display = 'none';
    document.getElementById('instr-7-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-7-btn-1').src = "img/btn_green_on.png";
      document.getElementById('instr-7-pointer-p1-a1').style.display = 'block';
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-7-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-7-pointer-p1-a1').style.display = 'none';
      document.getElementById('instr-7-pointer-p2-a2').style.display = 'block';
      document.getElementById('instr-7-box-locked').style.display = 'none';
      document.getElementById('instr-7-box-unlocked').style.display = 'block';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-7-pointer-p2-a2').style.display = 'none';
      document.getElementById('instr-7-pointer-pb-a3').style.display = 'block';
      document.getElementById('instr-7-box-unlocked').style.display = 'none';
      document.getElementById('instr-7-box-opened').style.display = 'block';
    }, 3000)
    startInstr7 = timestamp;
  }
  window.requestAnimationFrame(stepInstr7);
}
// Step function (Instructions 8)
function stepInstr8(timestamp){
  if (!startInstr8 && cardNum === 8) {
    document.getElementById('instr-8-attempt').innerHTML = "ATTEMPT #1";
    document.getElementById('instr-8-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-8-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-8-btn-3').src = "img/btn_green_off.png";
    document.getElementById('instr-8-pointer-1').src = "";
    document.getElementById('instr-8-pointer-2').src = "";
    document.getElementById('instr-8-pointer-3').src = "";
    document.getElementById('instr-8-box-unlocked').style.display = 'none';
    document.getElementById('instr-8-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-8-pointer-2').src = "img/pointer_a1.png";
      document.getElementById('instr-8-btn-2').src = "img/btn_green_on.png";
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-2').src = "";
      document.getElementById('instr-8-pointer-3').src = "img/pointer_a2.png";
      document.getElementById('instr-8-btn-3').src = "img/btn_green_on.png";
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-3').src = "";
      document.getElementById('instr-8-pointer-1').src = "img/pointer_a3.png";
      document.getElementById('instr-8-btn-1').src = "img/btn_green_on.png";
    }, 3000)
    setTimeout(function(){
      document.getElementById('instr-8-attempt').innerHTML = "ATTEMPT #2";
      document.getElementById('instr-8-btn-1').src = "img/btn_green_off.png";
      document.getElementById('instr-8-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-8-btn-3').src = "img/btn_green_off.png";
      document.getElementById('instr-8-pointer-1').src = "";
      document.getElementById('instr-8-pointer-2').src = "";
      document.getElementById('instr-8-pointer-3').src = "";
    }, 5000)
    setTimeout(function(){
      document.getElementById('instr-8-pointer-3').src = "img/pointer_a1.png";
      document.getElementById('instr-8-btn-3').src = "img/btn_green_on.png";
    }, 6000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-3').src = "";
      document.getElementById('instr-8-pointer-1').src = "img/pointer_a2.png";
      document.getElementById('instr-8-btn-1').src = "img/btn_green_on.png";
    }, 7000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-1').src = "";
      document.getElementById('instr-8-pointer-2').src = "img/pointer_a3.png";
      document.getElementById('instr-8-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-8-box-unlocked').style.display = 'block';
      document.getElementById('instr-8-box-locked').style.display = 'none';
    }, 8000)
    startInstr8 = timestamp;
  }
  var progress = timestamp - startInstr8;
  if (progress > 10000 && cardNum === 8) {
    document.getElementById('instr-8-attempt').innerHTML = "ATTEMPT #1";
    document.getElementById('instr-8-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-8-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-8-btn-3').src = "img/btn_green_off.png";
    document.getElementById('instr-8-pointer-1').src = "";
    document.getElementById('instr-8-pointer-2').src = "";
    document.getElementById('instr-8-pointer-3').src = "";
    document.getElementById('instr-8-box-unlocked').style.display = 'none';
    document.getElementById('instr-8-box-locked').style.display = 'block';
    setTimeout(function(){
      document.getElementById('instr-8-pointer-2').src = "img/pointer_a1.png";
      document.getElementById('instr-8-btn-2').src = "img/btn_green_on.png";
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-2').src = "";
      document.getElementById('instr-8-pointer-3').src = "img/pointer_a2.png";
      document.getElementById('instr-8-btn-3').src = "img/btn_green_on.png";
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-3').src = "";
      document.getElementById('instr-8-pointer-1').src = "img/pointer_a3.png";
      document.getElementById('instr-8-btn-1').src = "img/btn_green_on.png";
    }, 3000)
    setTimeout(function(){
      document.getElementById('instr-8-attempt').innerHTML = "ATTEMPT #2";
      document.getElementById('instr-8-btn-1').src = "img/btn_green_off.png";
      document.getElementById('instr-8-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-8-btn-3').src = "img/btn_green_off.png";
      document.getElementById('instr-8-pointer-1').src = "";
      document.getElementById('instr-8-pointer-2').src = "";
      document.getElementById('instr-8-pointer-3').src = "";
    }, 5000)
    setTimeout(function(){
      document.getElementById('instr-8-pointer-3').src = "img/pointer_a1.png";
      document.getElementById('instr-8-btn-3').src = "img/btn_green_on.png";
    }, 6000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-3').src = "";
      document.getElementById('instr-8-pointer-1').src = "img/pointer_a2.png";
      document.getElementById('instr-8-btn-1').src = "img/btn_green_on.png";
    }, 7000);
    setTimeout(function(){
      document.getElementById('instr-8-pointer-1').src = "";
      document.getElementById('instr-8-pointer-2').src = "img/pointer_a3.png";
      document.getElementById('instr-8-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-8-box-unlocked').style.display = 'block';
      document.getElementById('instr-8-box-locked').style.display = 'none';
    }, 8000)
    startInstr8 = timestamp;
  }
  window.requestAnimationFrame(stepInstr8);
}
// Step function (Instructions 9)
function stepInstr9(timestamp){
  if (!startInstr9 && cardNum === 9) {
    document.getElementById('instr-9-attempt').innerHTML = "ATTEMPT #1";
    document.getElementById('instr-9-pointer-box').src = "";
    document.getElementById('instr-9-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-9-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-9-box').src = 'img/box_locked.png';
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "img/pointer_a1.png";
      document.getElementById('instr-9-btn-1').src = "img/btn_green_on.png";
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "";
      document.getElementById('instr-9-pointer-2').src = "img/pointer_a2.png";
      document.getElementById('instr-9-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-9-box').src = 'img/box_unlocked.png';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-2').src = "";
      document.getElementById('instr-9-pointer-box').src = "img/pointer_a3.png";
      document.getElementById('instr-9-box').src = 'img/box_open.png';
    }, 3000)
    setTimeout(function(){
      document.getElementById('instr-9-attempt').innerHTML = "ATTEMPT #2";
      document.getElementById('instr-9-pointer-box').src = "";
      document.getElementById('instr-9-btn-1').src = "img/btn_green_off.png";
      document.getElementById('instr-9-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-9-box').src = 'img/box_locked.png';
    }, 5000)
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "img/pointer_a1.png";
      document.getElementById('instr-9-btn-1').src = "img/btn_green_on.png";
    }, 6000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "";
      document.getElementById('instr-9-pointer-2').src = "img/pointer_a2.png";
      document.getElementById('instr-9-btn-2').src = "img/btn_green_on.png";
    }, 7000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-2').src = "";
      document.getElementById('instr-9-pointer-box').src = "img/pointer_a3.png";
    }, 8000)
    startInstr9 = timestamp;
  }
  var progress = timestamp - startInstr9;
  if (progress > 10000 && cardNum === 9) {
    document.getElementById('instr-9-attempt').innerHTML = "ATTEMPT #1";
    document.getElementById('instr-9-pointer-box').src = "";
    document.getElementById('instr-9-btn-1').src = "img/btn_green_off.png";
    document.getElementById('instr-9-btn-2').src = "img/btn_green_off.png";
    document.getElementById('instr-9-box').src = 'img/box_locked.png';
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "img/pointer_a1.png";
      document.getElementById('instr-9-btn-1').src = "img/btn_green_on.png";
    }, 1000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "";
      document.getElementById('instr-9-pointer-2').src = "img/pointer_a2.png";
      document.getElementById('instr-9-btn-2').src = "img/btn_green_on.png";
      document.getElementById('instr-9-box').src = 'img/box_unlocked.png';
    }, 2000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-2').src = "";
      document.getElementById('instr-9-pointer-box').src = "img/pointer_a3.png";
      document.getElementById('instr-9-box').src = 'img/box_open.png';
    }, 3000)
    setTimeout(function(){
      document.getElementById('instr-9-attempt').innerHTML = "ATTEMPT #2";
      document.getElementById('instr-9-pointer-box').src = "";
      document.getElementById('instr-9-btn-1').src = "img/btn_green_off.png";
      document.getElementById('instr-9-btn-2').src = "img/btn_green_off.png";
      document.getElementById('instr-9-box').src = 'img/box_locked.png';
    }, 5000)
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "img/pointer_a1.png";
      document.getElementById('instr-9-btn-1').src = "img/btn_green_on.png";
    }, 6000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-1').src = "";
      document.getElementById('instr-9-pointer-2').src = "img/pointer_a2.png";
      document.getElementById('instr-9-btn-2').src = "img/btn_green_on.png";
    }, 7000);
    setTimeout(function(){
      document.getElementById('instr-9-pointer-2').src = "";
      document.getElementById('instr-9-pointer-box').src = "img/pointer_a3.png";
    }, 8000)
    startInstr9 = timestamp;
  }
  window.requestAnimationFrame(stepInstr9);
}
// Step function (Task 11)
function stepTask11(timestamp){
  if (!startTask11 && cardNum === 11) {
    console.log(attemptNum)
    // We will change the displayed attempt number here
    document.getElementById('task-11-attempt').innerHTML = "ATTEMPT #" + (attemptNum+1).toString();
    // Declare IDs for button and pointer elements
    buttonIds = ['task-11-btn-1', 'task-11-btn-2', 'task-11-btn-3', 'task-11-btn-4', 'task-11-btn-5', 'task-11-btn-6', 'task-11-btn-7', 'task-11-btn-8', 'task-11-btn-9']
    pointerIds = ['task-11-pointer-1', 'task-11-pointer-2', 'task-11-pointer-3', 'task-11-pointer-4', 'task-11-pointer-5', 'task-11-pointer-6', 'task-11-pointer-7', 'task-11-pointer-8', 'task-11-pointer-9', 'task-11-pointer-box'];
    // Hide all button and pointer elements
    for (var i=0;i<=8;i++) {
      document.getElementById(buttonIds[i]).src = "";
    }
    for (var i=0;i<=9;i++) {
      document.getElementById(pointerIds[i]).src = "";
    }
    // Initially display locked box image
    document.getElementById('task-11-box').src = "img/box_locked.png";
    // Display the system's initial state based on randomly sampled element positions
    document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
    document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
    document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
    // Run through state sequence
    setTimeout(function(){
      // Add Action 1 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[0]][9]-1]]).src = "img/pointer_a1.png";
      // Change first button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][10] == 1 && stateMatrix[trialNums[0]][14] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][10] == 0 && stateMatrix[trialNums[0]][14] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][10] == 0 && stateMatrix[trialNums[0]][14] == 0) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_red_off.png";
      }
      // Change second button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][11] == 1 && stateMatrix[trialNums[0]][15] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][11] == 0 && stateMatrix[trialNums[0]][15] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][11] == 0 && stateMatrix[trialNums[0]][15] == 0) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
      }
      // Change third button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][12] == 1 && stateMatrix[trialNums[0]][16] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][12] == 0 && stateMatrix[trialNums[0]][16] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][12] == 0 && stateMatrix[trialNums[0]][16] == 0) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
      }
    }, 1000);
    setTimeout(function(){
      // Remove Action 1 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[0]][9]-1]]).src = "";
      // Add Action 2 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[0]][18]-1]]).src = "img/pointer_a2.png";
      // Change first button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][19] == 1 && stateMatrix[trialNums[0]][23] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][19] == 0 && stateMatrix[trialNums[0]][23] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][19] == 0 && stateMatrix[trialNums[0]][23] == 0) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_red_off.png";
      }
      // Change second button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][20] == 1 && stateMatrix[trialNums[0]][24] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][20] == 0 && stateMatrix[trialNums[0]][24] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][20] == 0 && stateMatrix[trialNums[0]][24] == 0) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
      }
      // Change third button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][21] == 1 && stateMatrix[trialNums[0]][25] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][21] == 0 && stateMatrix[trialNums[0]][25] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][21] == 0 && stateMatrix[trialNums[0]][25] == 0) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
      }
      // Change box's state according to stateMatrix
      if (stateMatrix[trialNums[0]][22] == 1 && stateMatrix[trialNums[0]][26] == 1) {
        document.getElementById('task-11-box').src = "img/box_open.png";
      } else if (stateMatrix[trialNums[0]][22] == 0 && stateMatrix[trialNums[0]][26] == 1) {
        document.getElementById('task-11-box').src = "img/box_unlocked.png";
      } else if (stateMatrix[trialNums[0]][22] == 0 && stateMatrix[trialNums[0]][26] == 0) {
        document.getElementById('task-11-box').src = "img/box_locked.png";
      }
    }, 2000);
    setTimeout(function(){
      // Remove Action 2 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[0]][18]-1]]).src = "";
      // Add Action 3 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[0]][27]-1]]).src = "img/pointer_a3.png";
      // Change first button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][28] == 1 && stateMatrix[trialNums[0]][32] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][28] == 0 && stateMatrix[trialNums[0]][32] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][28] == 0 && stateMatrix[trialNums[0]][32] == 0) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_red_off.png";
      }
      // Change second button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][29] == 1 && stateMatrix[trialNums[0]][33] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][29] == 0 && stateMatrix[trialNums[0]][33] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][29] == 0 && stateMatrix[trialNums[0]][33] == 0) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
      }
      // Change third button's state according to stateMatrix
      if (stateMatrix[trialNums[0]][30] == 1 && stateMatrix[trialNums[0]][34] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[0]][30] == 0 && stateMatrix[trialNums[0]][34] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[0]][30] == 0 && stateMatrix[trialNums[0]][34] == 0) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
      }
      // Change box's state according to stateMatrix
      if (stateMatrix[trialNums[0]][31] == 1 && stateMatrix[trialNums[0]][35] == 1) {
        document.getElementById('task-11-box').src = "img/box_open.png";
      } else if (stateMatrix[trialNums[0]][31] == 0 && stateMatrix[trialNums[0]][35] == 1) {
        document.getElementById('task-11-box').src = "img/box_unlocked.png";
      } else if (stateMatrix[trialNums[0]][31] == 0 && stateMatrix[trialNums[0]][35] == 0) {
        document.getElementById('task-11-box').src = "img/box_locked.png";
      }



    }, 3000)
    startTask11 = timestamp;
    attemptNum += 1;
  }
  var progress = timestamp - startTask11;
  if (progress > 5000 && cardNum === 11) {
    // We will change the displayed attempt number here
    document.getElementById('task-11-attempt').innerHTML = "ATTEMPT #" + (attemptNum+1).toString();
    // Declare IDs for button and pointer elements
    buttonIds = ['task-11-btn-1', 'task-11-btn-2', 'task-11-btn-3', 'task-11-btn-4', 'task-11-btn-5', 'task-11-btn-6', 'task-11-btn-7', 'task-11-btn-8', 'task-11-btn-9']
    pointerIds = ['task-11-pointer-1', 'task-11-pointer-2', 'task-11-pointer-3', 'task-11-pointer-4', 'task-11-pointer-5', 'task-11-pointer-6', 'task-11-pointer-7', 'task-11-pointer-8', 'task-11-pointer-9', 'task-11-pointer-box'];
    // Hide all button and pointer elements
    for (var i=0;i<=8;i++) {
      document.getElementById(buttonIds[i]).src = "";
    }
    for (var i=0;i<=9;i++) {
      document.getElementById(pointerIds[i]).src = "";
    }
    // Initially display locked box image
    document.getElementById('task-11-box').src = "img/box_locked.png";
    // Display the system's initial state based on randomly sampled element positions
    document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
    document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
    document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
    // Run through state sequence
    setTimeout(function(){
      // Add Action 1 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[attemptNum]][9]-1]]).src = "img/pointer_a1.png";
      // Change first button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][10] == 1 && stateMatrix[trialNums[attemptNum]][14] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][10] == 0 && stateMatrix[trialNums[attemptNum]][14] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][10] == 0 && stateMatrix[trialNums[attemptNum]][14] == 0) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_red_off.png";
      }
      // Change second button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][11] == 1 && stateMatrix[trialNums[attemptNum]][15] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][11] == 0 && stateMatrix[trialNums[attemptNum]][15] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][11] == 0 && stateMatrix[trialNums[attemptNum]][15] == 0) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
      }
      // Change third button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][12] == 1 && stateMatrix[trialNums[attemptNum]][16] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][12] == 0 && stateMatrix[trialNums[attemptNum]][16] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][12] == 0 && stateMatrix[trialNums[attemptNum]][16] == 0) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
      }
    }, 1000);
    setTimeout(function(){
      // Remove Action 1 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[attemptNum]][9]-1]]).src = "";
      // Add Action 2 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[attemptNum]][18]-1]]).src = "img/pointer_a2.png";
      // Change first button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][19] == 1 && stateMatrix[trialNums[attemptNum]][23] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][19] == 0 && stateMatrix[trialNums[attemptNum]][23] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][19] == 0 && stateMatrix[trialNums[attemptNum]][23] == 0) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_red_off.png";
      }
      // Change second button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][20] == 1 && stateMatrix[trialNums[attemptNum]][24] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][20] == 0 && stateMatrix[trialNums[attemptNum]][24] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][20] == 0 && stateMatrix[trialNums[attemptNum]][24] == 0) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
      }
      // Change third button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][21] == 1 && stateMatrix[trialNums[attemptNum]][25] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][21] == 0 && stateMatrix[trialNums[attemptNum]][25] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][21] == 0 && stateMatrix[trialNums[attemptNum]][25] == 0) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
      }
      // Change box's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][22] == 1 && stateMatrix[trialNums[attemptNum]][26] == 1) {
        document.getElementById('task-11-box').src = "img/box_open.png";
      } else if (stateMatrix[trialNums[attemptNum]][22] == 0 && stateMatrix[trialNums[attemptNum]][26] == 1) {
        document.getElementById('task-11-box').src = "img/box_unlocked.png";
      } else if (stateMatrix[trialNums[attemptNum]][22] == 0 && stateMatrix[trialNums[attemptNum]][26] == 0) {
        document.getElementById('task-11-box').src = "img/box_locked.png";
      }
    }, 2000);
    setTimeout(function(){
      // Remove Action 2 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[attemptNum]][18]-1]]).src = "";
      // Add Action 3 pointer
      document.getElementById(pointerIds[elementPositions[stateMatrix[trialNums[attemptNum]][27]-1]]).src = "img/pointer_a3.png";
      // Change first button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][28] == 1 && stateMatrix[trialNums[attemptNum]][32] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][28] == 0 && stateMatrix[trialNums[attemptNum]][32] == 1) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][28] == 0 && stateMatrix[trialNums[attemptNum]][32] == 0) {
        document.getElementById(buttonIds[elementPositions[0]]).src = "img/btn_red_off.png";
      }
      // Change second button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][29] == 1 && stateMatrix[trialNums[attemptNum]][33] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][29] == 0 && stateMatrix[trialNums[attemptNum]][33] == 1) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][29] == 0 && stateMatrix[trialNums[attemptNum]][33] == 0) {
        document.getElementById(buttonIds[elementPositions[1]]).src = "img/btn_red_off.png";
      }
      // Change third button's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][30] == 1 && stateMatrix[trialNums[attemptNum]][34] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_on.png";
      } else if (stateMatrix[trialNums[attemptNum]][30] == 0 && stateMatrix[trialNums[attemptNum]][34] == 1) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_green_off.png";
      } else if (stateMatrix[trialNums[attemptNum]][30] == 0 && stateMatrix[trialNums[attemptNum]][34] == 0) {
        document.getElementById(buttonIds[elementPositions[2]]).src = "img/btn_red_off.png";
      }
      // Change box's state according to stateMatrix
      if (stateMatrix[trialNums[attemptNum]][31] == 1 && stateMatrix[trialNums[attemptNum]][35] == 1) {
        document.getElementById('task-11-box').src = "img/box_open.png";
      } else if (stateMatrix[trialNums[attemptNum]][31] == 0 && stateMatrix[trialNums[attemptNum]][35] == 1) {
        document.getElementById('task-11-box').src = "img/box_unlocked.png";
      } else if (stateMatrix[trialNums[attemptNum]][31] == 0 && stateMatrix[trialNums[attemptNum]][35] == 0) {
        document.getElementById('task-11-box').src = "img/box_locked.png";
      }
    }, 3000)
    startTask11 = timestamp; 
    attemptNum += 1;  
  }
  window.requestAnimationFrame(stepTask11);

}