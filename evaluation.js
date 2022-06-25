function printEvaluation() {
    let form = document.getElementsByClassName("form-control")[0].value;
    document.getElementById("text").innerHTML = form;
}

document.getElementsByClassName("btn-primary")[0].addEventListener("click", printEvaluation)