let result = document.getElementById('result');
let answer = document.querySelector('.answer');

result.addEventListener('click', function () {
   let checkedBtn = document.querySelector('.radio-btn:checked');
   let firstNum = document.getElementById('firstNum');
   let secondNum = document.getElementById('secondNum');

   if (checkedBtn = '+') {
      answer.textContent = (Number(firstNum)) + (Number(secondNum));
      console.log(answer);
   }

   //answer.textContent = Number(firstNum.value) + (checkedBtn.value) + Number(secondNum.value);
   //let answer1 = answer.textContent;
   
   

});
//console.log(result);
//console.log(answer);