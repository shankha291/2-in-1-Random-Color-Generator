const btn=document.querySelector("#btn");
const result=document.querySelector(".result");
const bodyref=document.querySelector("body");

const getdir = () => {
    let directions = [
        "to right", "to left", "to top", "to bottom",
        "to top right", "to top left", "to bottom right", "to bottom left"
    ];
    let selected = directions[Math.floor(Math.random() * directions.length)];
    return selected;
};
const rancol=()=>{
    const array=[];
    for(let i=0;i<2;i++)
        array.push(newcol())
    updatecolor(array);
    const box1=document.querySelector("#box1");
    const box2=document.querySelector("#box2");
      let color1=box1.querySelector(".hexcode").textContent;
    let color2=box2.querySelector(".hexcode").textContent;
    result.innerHTML=`background-image: linear-gradient(${getdir()},${color1},${color2}) 
    `
    ;
    bodyref.style.backgroundImage=`linear-gradient(${getdir()},${color1},${color2})`;
    
    
    
   
}

const newcol=()=>{
    let generatedColor="#";
    const letters="0123456789ABCDEF";
    for(let i=0;i<6;i++)
        generatedColor+=letters[Math.floor(Math.random()*16)];
    return generatedColor;

};

const updatecolor=(array)=>{
    const eachbox=document.querySelectorAll(".box");
    eachbox.forEach((temp,idx)=>{
        const colnew=array[idx];
        const ncolor=temp.querySelector(".color");
        const hex=temp.querySelector(".hexcode");
        ncolor.style.backgroundColor=colnew;
        hex.textContent=colnew;
        })
}

btn.addEventListener("click",rancol);
rancol();

const copybtn=document.querySelectorAll(".copy-btn");
copybtn.forEach((eachcopy,idx)=>{
    eachcopy.addEventListener("click",()=>{
         const eachnm=eachcopy.previousElementSibling.textContent;
        const colcode = eachcopy.previousElementSibling.textContent;
        const copiedelement=eachcopy.previousElementSibling.textContent;
        navigator.clipboard.writeText(copiedelement).then(() => {
            eachcopy.classList.remove("far", "fa-copy");

            eachcopy.classList.add("fa", "fa-check");
            eachcopy.previousElementSibling.textContent="copied";
            

            setTimeout(() => {
                eachcopy.classList.remove("fa","fa-check");
                eachcopy.classList.add("far","fa-copy");
                eachcopy.previousElementSibling.textContent=eachnm;
                
            }, 1000)

        })
    });
});

    