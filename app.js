let password = document.getElementById('password');
let passwordstatus = document.querySelector('.password-satus');

let minlenght = document.querySelector('.min-lenght');
let connumber = document.querySelector('.con-number');
let conspecial = document.querySelector('.con-special');
let nospace = document.querySelector('.no-space');
let conlower = document.querySelector('.con-lower');
let conupper = document.querySelector('.con-upper');


//AFFICHER ET MASQUER LE MOT DE PASSE
passwordstatus.onclick = function(){
    if(password.type == 'password'){
        password.setAttribute('type','text');
        passwordstatus.classList.add('hide');
    }else{
        password.setAttribute('type','password');
        passwordstatus.classList.remove('hide');
    }
}

//REGULAR EXPRESSION
const lenght = new RegExp('(?=.{8,})');
const number = new RegExp('(?=.*[0-9])');
const special = new RegExp('(?=.*[!@#\$%\^&\*])');
const space = new RegExp('^\\S*$');
const lower = new RegExp('(?=.*[a-z])');
const upper = new RegExp('(?=.*[A-Z])');

function check(data){
    if(lenght.test(data)){
        minlenght.classList.add('correct');
    }else{
        minlenght.classList.remove('correct');
    }

    if(number.test(data)){
        connumber.classList.add('correct');
    }else{
        connumber.classList.remove('correct');
    }

    if(special.test(data)){
        conspecial.classList.add('correct');
    }else{
        conspecial.classList.remove('correct');
    }

    if(space.test(data)){
        nospace.classList.add('correct');
    }else{
        nospace.classList.remove('correct');
    }

    if(lower.test(data)){
        conlower.classList.add('correct');
    }else{
        conlower.classList.remove('correct');
    }

    if(upper.test(data)){
        conupper.classList.add('correct');
    }else{
        conupper.classList.remove('correct');
    }
}