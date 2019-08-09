
document.getElementById("zero").addEventListener("click", function () { changeImage("zero", 0)});
document.getElementById("one").addEventListener("click", function () { changeImage("one", 1)});
document.getElementById("two").addEventListener("click", function () { changeImage("two", 2)});
document.getElementById("three").addEventListener("click", function () { changeImage("three", 3)});
document.getElementById("four").addEventListener("click", function () { changeImage("four", 4)});
document.getElementById("five").addEventListener("click", function () { changeImage("five", 5)});
document.getElementById("six").addEventListener("click", function () { changeImage("six", 6)});
document.getElementById("seven").addEventListener("click", function () { changeImage("seven", 7)});
document.getElementById("eight").addEventListener("click", function () { changeImage("eight", 8)});
document.getElementById("nine").addEventListener("click", function () { changeImage("nine", 9)});
document.getElementById("ten").addEventListener("click", function () { changeImage("ten", 10)});
document.getElementById("eleven").addEventListener("click", function () { changeImage("eleven", 11)});
document.getElementById("twelve").addEventListener("click", function () { changeImage("twelve", 12)});
document.getElementById("thirteen").addEventListener("click", function () { changeImage("thirteen", 13)});
document.getElementById("fourteen").addEventListener("click", function () { changeImage("fourteen", 14)});
document.getElementById("fifteen").addEventListener("click", function () { changeImage("fifteen", 15)});

let fruits = ["apple.jpg","orange.jpg","papaya.jpg","apple.jpg","pineapple.jpg",
    "guava.jpg","banana.jpg","papaya.jpg","orange.jpg","kiwi.jpg","grapes.jpg","pineapple.jpg",
    "banana.jpg","guava.jpg","kiwi.jpg","grapes.jpg"];
let count =0;
let firstId;
let first, second;
let successMatchCount = 0;


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let shuffleFruits = shuffle(fruits);

function shuffleArray() {
    document.location.reload();
    shuffleFruits();
}

async function changeImage(idValue, index) {
    
    if (document.getElementById(idValue).getAttribute("src") === "blue.jpg") {
        count++;
        document.getElementById(idValue).src = fruits[index];
    }
    if(count === 1) {
        first = document.getElementById(idValue).src;
        firstId = idValue;
    }
    if(count === 2) {
        second = document.getElementById(idValue).src;
        if(first !== second) {
            await sleep(500);
            document.getElementById(idValue).src = "blue.jpg";
            document.getElementById(firstId).src = "blue.jpg";
        }
    count = 0;
    }
    
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
