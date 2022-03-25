// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

// create a global variable called "pwLength" with a number between 10 and 18

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");

let buttonHandler = () => {
    if(document.querySelector(".modal").classList.contains('hide'))
    {
        document.querySelector(".modal").classList.remove('hide');
        document.querySelector(".modal").classList.add('show');
    }
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======




//getting the number from user input
let getUserChoice = ()=>{
    userInput =  document.getElementById("userChoice").value
    if(userInput < 6 || userInput > 50){
        document.querySelector(".validationError").innerHTML = "Your choice was wrong, enter a number from 6 to 50";
        return document.getElementById("password").value = "";
        
    }else {
        document.querySelector(".validationError").innerHTML = ""
        return userInput
    }
}

//generate a random password
const addNewPassword = async ()=>{
    const length = await getUserChoice();
    let returnedValue = "";
    const characters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
    //loop through the array and generate random outputs for return value
    for(let i = 0, n = characters.length; i < length; i++){
        returnedValue += characters[Math.floor(Math.random() * n)];
    }
    return returnedValue;
}

//get user input and assign it to the password box
let getPromptNum = document.querySelector(".sendNumber");
const sendAnswer = async ()=>{
    document.getElementById("password").value = await addNewPassword();
    document.querySelector(".modal").classList.add('hide');
}
getPromptNum.addEventListener("click", sendAnswer);


//handle button than closes the modal
const closeModalBtn = document.querySelector('.closeBtn');
function closeModal(){ 
    document.querySelector(".modal").classList.add("hide");
}
closeModalBtn.addEventListener("click", closeModal)