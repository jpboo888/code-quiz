const quizData = [
    {
        question:  "What does Kevin suggest Dwight put in his gun holster?",
        a: "A cell phone",
        b: "A toothbrush",
        c: "A Big Mac",
        d: "A banana",
        correct: "d",
    },
    {
        question:  "After going with Andy to Donna's husband's baseball game, what does Michael take from the game to bring back to the office?",
        a: "Ice cream sandwiches",
        b: "A bag of orance slices",
        c: "A Tortoise",
        d: "A toothbrush",
        correct: "b",
    },
    {
        question:  "What does Michael eat instead of ice cream because they don't have any?",
        a: "Mayo and black olives",
        b: "3 strips of bacon",
        c: "A Big Mac",
        d: "A sugar-free cookie",
        correct: "a",
    },
    {
        question:  "On what social media site does Creed say that Michale's nephew is trashing them relentlessly?",
        a: "Facebook",
        b: "Twitter",
        c: "Instagram",
        d: "Tumblr",
        correct: "b",
    },
];

// global consts and variables

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const timeH = document.querySelector('h1')
const startBtn = document.getElementById('start')

let currentQuiz = 0
let score = 0
let timeSecond = 30

function loadQuiz()  {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers()  {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected()  {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked)  {
            answer = answerEl.id
        }
    })
        
    return answer  
}

// submit button

submitBtn.addEventListener('click', () =>  {
    const answer = getSelected()
    if(answer)  {
        if (answer === quizData[currentQuiz].correct)  {
            score++
        } 
        else  {
            timeSecond=timeSecond-5
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length)  {
            loadQuiz()
        }
        else  {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly<h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

// start button

startBtn.addEventListener('click', () =>  {

timeH.innerHTML = `00:${timeSecond}`

const countDown = setInterval(()=>  {
    timeSecond--
    timeH.innerHTML = `00:${timeSecond}`

    if(timeSecond <=0 || timeSecond<1){
        clearInterval(countDown)
    }
},1000
)

if  (timeSecond === 0)  {
    throw error
}

loadQuiz()
})

