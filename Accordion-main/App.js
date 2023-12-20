const container = document.querySelector('.container');
const Question = document.querySelector('.question');

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('question')) {
   
    const answer = e.target.nextElementSibling;
    answer.classList.toggle('hidden');
    
    const downIcon = e.target.querySelector('.fa-circle-chevron-down');
    const upIcon = e.target.querySelector('.fa-caret-up');
    downIcon.classList.toggle('hidden');
    upIcon.classList.toggle('hidden');
  }
});


