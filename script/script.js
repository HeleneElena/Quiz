document.addEventListener('DOMContentLoaded', function() {
'use strict';

    const btnOpenModal = document.querySelector('#btnOpenModal'),
          modalBlock = document.querySelector('#modalBlock'),
          closeModal = document.querySelector('#closeModal'),
          questionTitle = document.querySelector('#question'),
          formAnswers = document.querySelector('#formAnswers');

    const questions = {
        question: 'Какого цвета бургер вы хотите?',
        answers: [
            {
                title: 'Стандарт',
                url: './image/burger.png'
            },
            {
                title: 'Черный',
                url: './image/burgerBlack.png'
            }
        ]
    };
          
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playTest = () => {
        const renderQuestions = () => {
            questionTitle.textContent = `${questions.question}`;

            formAnswers.innerHTML = `
                <div class="answers-item d-flex flex-column">
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${questions.answers[0].url}" alt="burger">
                        <span>${questions.answers[0].title}</span>
                    </label>
                </div>
            `;
        };
        renderQuestions();

    const renderAnswers = () => {
        for (i = 0; i < 2; i++) {
            const answerItem = document.createElement('div');

            answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
            
            answerItem.innerHTML = `
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${questions.answers[0].url}" alt="burger">
                        <span>${questions.answers[0].title}</span>
                    </label>            
            `;
            formAnswers.appendChild(answerItem);


            console.log(answerItem);
        }
    }
    renderQuestions();
    };

});