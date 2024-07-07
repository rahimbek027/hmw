const tel_numbers = [
    ["+ 9 9 8"], //tel_number1
    ["2 0", "3 3", "5 0", "5 5", "7 7", "8 8", "9 0", "9 1", "9 3", "9 4", "9 5", "9 7", "9 8", "9 9"], // tel_number2
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number3
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number4
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number5
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number6
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number7
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number8
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], //tel_number9
];

const titles = [
    document.querySelector(".title1"),
    document.querySelector(".title2"),
    document.querySelector(".title3"),
    document.querySelector(".title4"),
    document.querySelector(".title5"),
    document.querySelector(".title6"),
    document.querySelector(".title7"),
    document.querySelector(".title8"),
    document.querySelector(".title9")
];

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    btn.setAttribute("disabled" , true)
    for (let i = 0; i < titles.length; i++) {
        let interval = setInterval(() => {
            let index = Math.floor(Math.random() * tel_numbers[i].length);
            titles[i].textContent = tel_numbers[i][index];    
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            btn.removeAttribute("disabled")
        }, 3000); 
    }
});
