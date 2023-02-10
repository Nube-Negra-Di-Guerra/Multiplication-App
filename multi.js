const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("asked")
const inputEl = document.getElementById("answer");
const formEl = document.getElementById("forma");
const scoreEl = document.getElementById("marks");

let score = JSON.parse(localStorage.getItem("marks"));
if(!score){
    score = 0;
}

scoreEl.innerText = 'Score: ' + (score)
questionEl.innerText= 'what is ' + (num1) + ' x ' + (num2) + '?';

const correctAns = num1 * num2;

formEl.addEventListener("submit", (Enter)=>{
    const userAns = +inputEl.value 
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("marks",JSON.stringify(score))
};