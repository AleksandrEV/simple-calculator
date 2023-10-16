let result = document.getElementById('result');
let answer = document.querySelector('.answer');
let save = [];
console.log(save)

result.addEventListener('click', function () {
   let checkedBtn = document.querySelector('.radio-btn:checked');
   let firstInput = document.getElementById('firstNum');
   let secondInput = document.getElementById('secondNum');
   let firstNum = firstInput.value;
   let secondNum = secondInput.value;
   let checkBtnFormassiv = checkedBtn.value;

   save.push (
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

   console.log(save);
});