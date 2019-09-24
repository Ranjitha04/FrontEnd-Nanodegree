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

let fruits = ["apple.jpg","orange.jpg","papaya.jpg","apple.jpg","pineapple.jpg","guava.jpg",
			  "banana.jpg","papaya.jpg","orange.jpg","kiwi.jpg","grapes.jpg","pineapple.jpg",
              "banana.jpg","guava.jpg","kiwi.jpg","grapes.jpg"];
	
let ids = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
           "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"];
    
let count =0;
let firstId;
let first, second;

//Function to shuffle array.
let shuffleFruits = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
	return array;
}

/*
	Function to reset game.
*/
function resetGame() {
	for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).src = "blue.jpg";
    }
    fruits = shuffleFruits(fruits);
}

/*
	Function that carries image flipping logic.
*/	
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

 
/*
	Sleep function makes second image clicked to be visible, 
	otherwise flipping happens so fast that user will not 
	recognize second image clicked.
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
