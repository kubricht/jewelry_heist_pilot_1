// Initialize card number Var
var cardNum = 1;
// Initialize start Vars for animation
var startInstr2, startInstr3, startInstr4, startInstr5, startInstr6, startInstr7, startInstr8, startInstr9 = null;

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