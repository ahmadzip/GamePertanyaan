const question = document.querySelector('.card-text');
const btnNext = document.querySelector('.btn-next');
let randomQuestion = [];
let url = new URL(window.location.href);
let questionParam = url.searchParams.get("question");
if (questionParam == null) {
    window.location.href = "./404.html";
}else{
    $.getJSON("./database/" + questionParam, function (data) {
        $.each(data, function (key, val) {
            randomQuestion.push(val);
        });
    }).then(() => {
        let random = Math.floor(Math.random() * randomQuestion.length);
        question.innerHTML = randomQuestion[random]
        randomQuestion.splice(random, 1);
        document.querySelector('.question-kecil').innerHTML = `Question ${randomQuestion.length}`;
        btnNext.addEventListener('click', () => {
            if (randomQuestion.length === 0) {
                alert('Semua pertanyaan sudah dijawab');
            } else {
                let random = Math.floor(Math.random() * randomQuestion.length);
                question.innerHTML = randomQuestion[random]
                randomQuestion.splice(random, 1);
                document.querySelector('.question-kecil').innerHTML = `Question ${randomQuestion.length}`;
            }
        });
    });
}