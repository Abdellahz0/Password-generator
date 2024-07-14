const passwordBox=document.getElementById("password");
const btn=document.querySelector(".generatebtn");
const image=document.getElementById("copy");

const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase="abcdefghijklmnopqrstuvwxyz";

const numbers="0123456789";

const symbols="@#$%^&*()_+]~=-{}|></[";



function getCharacter(){
    let character;
    const U=uppercase[Math.floor(Math.random()*uppercase.length)];
    const L=lowercase[Math.floor(Math.random()*lowercase.length)];
    const Num=numbers[Math.floor(Math.random()*numbers.length)];
    const sym=symbols[Math.floor(Math.random()*(symbols.length))];

    const choice =Math.floor(Math.random()*4);

    switch(choice){
        case 0:
            character=U;
            break;
        case 1:
            character=L;
            break;
        case 2:
            character=Num;
            break;
        case 3:
            character=sym;
            break;
        default:
            break;
    }

    return character;
}


function getpassword(){
    let password="";
    let i=0;
    while(i<length){
        password+=getCharacter();
        i++;
    }
    return password;
}

document.addEventListener("DOMContentLoaded",()=>{
    btn.addEventListener("click",()=>{
        passwordBox.value= getpassword();;
        console.log("clicked");
    });
    image.addEventListener("click",()=>{
        passwordBox.select();
        document.execCommand("copy");
    });
});