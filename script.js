let string = "";
// let X = document.getElementById('delete-string');
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '√') {
            string = Math.sqrt(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'X') {
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})