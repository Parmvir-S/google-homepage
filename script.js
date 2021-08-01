function feelingLucky() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

const lucky = document.querySelector(".b2")
lucky.addEventListener("click", feelingLucky)

function getUserInput() {
    let input = document.getElementById("search").value;
    let bing = input.split(" ").join("-").toLowerCase();
    let url = `https://www.google.ca/search?q=${bing}`;
    window.location.href = url;
}

const userInput = document.querySelector(".b1")
userInput.addEventListener("click", getUserInput)


window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        getUserInput();
    }
})

