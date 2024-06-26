const buttons=document.querySelectorAll(".buttons");
const body=document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="blue"){
            body.style.backgroundColor="rgb(59, 102, 157)";
        }
        if(e.target.id==="green"){
            body.style.backgroundColor="rgb(74, 246, 157)";
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor="rgb(225, 225, 134)";
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor="rgb(168, 125, 178)";
        }
    })
});

