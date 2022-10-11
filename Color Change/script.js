let colors=['yellow','blue','red','orange']
let btn=document.querySelector(".btn-el")

btn.addEventListener('click',function(){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];

})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}