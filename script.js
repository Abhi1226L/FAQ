let questionContainer = document.getElementsByClassName("question-container");
let question = document.getElementsByClassName("question");
for (let i = 0; i < questionContainer.length; i++) {
    questionContainer[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}
