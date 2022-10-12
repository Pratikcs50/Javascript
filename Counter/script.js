
let num=0;
let n=document.querySelector(".num");
let btns=document.querySelectorAll(".btn")

btns.forEach(function(btn) {
    btn.addEventListener('click',function(e){
        const styles=e.currentTarget.classList
        console.log(styles);
        if(styles.contains('Decrease')){
            num--;
        }
        if(styles.contains('Increase')){
            num++;
        }
        if(styles.contains('Reset')){
            num=0;
        }
        n.textContent=num;

    })
})
