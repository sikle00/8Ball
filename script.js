let answers = ['The heavens says yes', 'Not likely', 'hell nah', 'hell yeah', 'Im not sure', 'not likely', 'you wish', 'unlucky', 'Its written in the stars', 'Go for it!', 'Sounds exciting'];
let answer = '8';
let classFont = 'font';

updateView()
function updateView(){
    let html = '';
    html += /*html*/` 
    <div class="baller">
        <button id="eightBTN" class="whiteCircle" onclick="answerMe()" disabled="disabled">
            <div class="${classFont}">${answer}</div>
        </button>
    </div>
    <input id="question" placeholder="Write question here">`
    document.getElementById('app').innerHTML = html
}
function answerMe(){
    let randomIndex = Math.floor(Math.random() * answers.length)
    let ansTxt = answers.length > 0 ? answers[randomIndex] : 'Refresh the page to get more attempts'
    classFont = '';
    answer = ansTxt;
    answers.splice(randomIndex, 1);
    updateView();
}
