let result = document.getElementById('result');
let answer = document.querySelector('.answer');

result.addEventListener('click', function () {
   let checkedBtn = document.querySelector('.radio-btn:checked');
   let firstNum = document.getElementById('firstNum');
   let secondNum = document.getElementById('secondNum');

   if (checkedBtn.value === '+') {
      answer.textContent = Number(firstNum.value) + Number(secondNum.value);
   };
   if (checkedBtn.value === '-') {
      answer.textContent = Number(firstNum.value) - Number(secondNum.value);
   };
   if (checkedBtn.value === '*') {
      answer.textContent = Number(firstNum.value) * Number(secondNum.value);
   };
   if (checkedBtn.value === '/') {
      answer.textContent = Number(firstNum.value) / Number(secondNum.value);
   };

});