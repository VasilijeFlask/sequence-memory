let level = document.getElementById('level');

let square_elements = [];
for (let i = 1; i <= 9; i++) {
  let square = document.getElementById(i.toString());
  square_elements.push(square);
}



let randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let randomIndex1 = Math.floor(Math.random() * randoms.length);
let randomNumber1 = randoms[randomIndex1];
randoms.splice(randomIndex1, 1);

let randomIndex2 = Math.floor(Math.random() * randoms.length);
let randomNumber2 = randoms[randomIndex2];
randoms.splice(randomIndex2, 1);

let randomIndex3 = Math.floor(Math.random() * randoms.length);
let randomNumber3 = randoms[randomIndex3];
randoms.splice(randomIndex3, 1);

let randomSquare1 = document.getElementById(randomNumber1.toString());
let randomSquare2 = document.getElementById(randomNumber2.toString());
let randomSquare3 = document.getElementById(randomNumber3.toString());



console.log(randomNumber1);
console.log(randomNumber2)
console.log(randomNumber3);


//square1 flash
function flash() {
  setTimeout(() => {
    randomSquare1.style.backgroundColor = 'white';
  }, 1000);
  setTimeout(() => {
    randomSquare1.style.backgroundColor = '#234E70';
  }, 2000);
}
flash();

//square2 flash
function flash2() {
  setTimeout(() => {
    randomSquare2.style.backgroundColor = 'white';
  }, 1000);
  setTimeout(() => {
    randomSquare2.style.backgroundColor = '#234E70';
  }, 2000);
}

//square3 flash
function flash3() {
  setTimeout(() => {
    randomSquare3.style.backgroundColor = 'white';
  }, 1000);
  setTimeout(() => {
    randomSquare3.style.backgroundColor = '#234E70';
  }, 2000);
}


//adding listeners to squares
setTimeout(() => {
  randomSquare1.addEventListener('click', correctClick);
  square_elements.forEach(element => {
    element.addEventListener('click', wrongClick);
  });
}, 3000);

//correct click1
let firstSquareCorrect = false
function correctClick(event) {
  let clickedSquare = event.target;
  if (clickedSquare === randomSquare1) {
    clickedSquare.style.backgroundColor = 'white';
    setTimeout(() => {
      clickedSquare.style.backgroundColor = '#234E70';
    }, 1000);
    setTimeout(() => {
      level.textContent = Number(level.textContent) + 1;
    }, 2000);
    randomSquare1.removeEventListener('click', correctClick);
    square_elements.forEach(element => {
      element.removeEventListener('click', wrongClick);
    });
    
  setTimeout(() => {
    flash()
    setTimeout(() => {
      flash2()
      randomSquare2.addEventListener('click', correctClick2)
      square_elements.forEach(element => {
        if (element !== randomSquare2) {
          element.addEventListener('click', wrongClick)
        }
      })
    }, 1000)
  }, 2000)
  firstSquareCorrect = true
  }
}

//correct click2
function correctClick2(event) {
  

  let clickedSquare = event.target;
  if (clickedSquare === randomSquare2 && firstSquareCorrect) {
    clickedSquare.style.backgroundColor = 'white';
    setTimeout(() => {
      clickedSquare.style.backgroundColor = '#234E70';
    }, 1000);
    setTimeout(() => {
      level.textContent = Number(level.textContent) + 1;
    }, 2000);
    randomSquare2.removeEventListener('click', correctClick2);
    square_elements.forEach(element => {
      element.removeEventListener('click', wrongClick);
    });
    setTimeout(() => {
      flash();
      setTimeout(() => {
        flash2();
        setTimeout(() => {
          flash3();
          // randomSquare3.addEventListener('click', correctClick3);
          // square_elements.forEach(element => {
          //   if (element !== randomSquare3) {
          //     element.addEventListener('click', wrongClick);
          //   }
          // });
        }, 1000);
      }, 1000);
    }, 2000);
    firstSquareCorrect = false
  }
}








//wrong click
function wrongClick(event) {
  let clickedSquare = event.target;
  if (clickedSquare !== randomSquare1) {
    clickedSquare.style.backgroundColor = 'red';
    setTimeout(() => {
      clickedSquare.style.backgroundColor = '#234E70';
    }, 1000);
    randomSquare1.removeEventListener('click', correctClick);
    square_elements.forEach(element => {
      element.removeEventListener('click', wrongClick);
    });
    try_again = document.getElementById('try_again');
    setTimeout(() => {
      try_again.style.display = 'block';
      try_again.addEventListener('click', tryAgain);
    }, 2000);
  }
}

//tryagain
function tryAgain() {
  level.textContent = 1;
  flash();
  try_again.style.display = 'none';
}
