const genbtn = document.querySelector("#genbtn");
const geticon=document.querySelector(".fa-sync-alt")

const changecolor = () => {
    let colorarray = [];
    for (let i = 0; i < 6; i++) {
        colorarray.push(randomcolor());
    }
    updatecolor(colorarray);
};

const randomcolor = () => {
    let newcol = "#";
    let letters = "0123456789ABCDEF"; // ✅ Removed the extra '#' character
    for (let i = 0; i < 6; i++) {
        newcol += letters[Math.floor(Math.random() * 16)];
    }
    return newcol;
};

const updatecolor = (colorarray) => {
    const eachbox = document.querySelectorAll(".colbox");
    eachbox.forEach((box, idx) => {
        const colorname = colorarray[idx];
        const color = box.querySelector(".color");     // ✅ Use class selector
        const colname = box.querySelector(".colname"); // ✅ Use class selector
        if (color && colname) {
            color.style.backgroundColor = colorname;
            colname.textContent = colorname;
        }
    });
};

genbtn.addEventListener("click", changecolor); // ✅ Pass function reference
changecolor(); // ✅ Initial palette on page load
const colname1=document.querySelectorAll(".colname")
const copybtns = document.querySelectorAll(".copy-btn");
copybtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const eachnm=btn.previousElementSibling.textContent;
        const colcode = btn.previousElementSibling.textContent;
        navigator.clipboard.writeText(colcode).then(() => {
            btn.classList.remove("far", "fa-copy");

            btn.classList.add("fa", "fa-check");
            btn.previousElementSibling.textContent="copied";
            

            setTimeout(() => {
                btn.classList.remove("fa","fa-check");
                btn.classList.add("far","fa-copy");
                btn.previousElementSibling.textContent=eachnm;
                
            }, 1000)

        }



        );
    });
});

