const form = document.querySelector("#form-control");
const dataNumber = [];

const formResult = () => {
    event.preventDefault();

    const result = document.querySelector("#result");
    const number = document.querySelector("#number").value;
    const para = document.createElement("p");

    dataNumber.push(number);

    dataNumber.forEach(data => {
        console.log(data);
    })

    if (number < 1) {
        result.innerHTML = "invalid input";
        result.style.color = "red";
    } else  {
        if (number % 3 === 0 && number % 5 === 0) {
            para.innerHTML = "FizzBuzz!";
        } else if (number % 3 === 0) {
            para.innerHTML = "Fizz!";
        } else if (number % 5 === 0) {
            para.innerHTML = "Buzz!";
        } else {
            para.innerHTML = number;
        }

    }

    result.appendChild(para);
}

form.addEventListener("submit", formResult);