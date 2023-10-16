let result = document.getElementById('result');
let btnBack = document.getElementById('btn-back')
let answer = document.querySelector('.answer');
let save0 = [];
//console.log(save0);

result.addEventListener('click', function () {
   let checkedBtn = document.querySelector('.radio-btn:checked');
   let firstInput = document.getElementById('firstNum');
   let secondInput = document.getElementById('secondNum');
   let firstNum = firstInput.value;
   let secondNum = secondInput.value;
   let checkBtnFormassiv = checkedBtn.value;


   let save1 = [firstNum, secondNum, checkBtnFormassiv, answer];

   save0.push (
      {firstNum, secondNum, checkBtnFormassiv, answer},
   );

   if (checkedBtn.value === '+') {
      answer.textContent = Number(firstNum) + Number(secondNum);
   };
   if (checkedBtn.value === '-') {
      answer.textContent = Number(firstNum) - Number(secondNum);
   };
   if (checkedBtn.value === '*') {
      answer.textContent = Number(firstNum) * Number(secondNum);
   };
   if (checkedBtn.value === '/') {
      answer.textContent = Number(firstNum) / Number(secondNum);
   };

   console.log(save0);
});


   btnBack.addEventListener('click', function () {
      save0.reverse();
      console.log(save0);
      save1 = save0[0];
   })