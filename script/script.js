document.addEventListener('DOMContentLoaded', function() {
'use strict';

    const btnOpenModal = document.querySelector('#btnOpenModal'),
          modalBlock = document.querySelector('#modalBlock'),
          closeModal = document.querySelector('#closeModal'),
          questionTitle = document.querySelector('#question'),
          formAnswers = document.querySelector('#formAnswers');

    const questions = [
        {
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
        }
    ];
          
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });
    
    // функция запуска тестирования
    const playTest = () => {

        const renderAnswers = () => {
            questions[0].answers.forEach((answer) => {
            const answerItem = document.createElement('div');

            answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
            
            answerItem.innerHTML = `
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${answer.url}" alt="burger">
                        <span>${answer.title}</span>
                    </label>            
            `;
            formAnswers.appendChild(answerItem);
          });
        };

        const renderQuestions = () => {
            questionTitle.textContent = `${questions[0].question}`;

            renderAnswers();
        };
        renderQuestions();


    };

});