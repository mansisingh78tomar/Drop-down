const optionmenu = document.querySelector('.menu'),
selectbtn = optionmenu.querySelector('.btn'),
textbtn = optionmenu.querySelector('.btn-text'),
options = optionmenu.querySelectorAll('.option');

selectbtn.addEventListener('click', () => optionmenu.classList.toggle('active'));

options.forEach(option =>{
    option,addEventListener("click",()=>{
        let selectOption = option.querySelector("option-text").innerText;
        textbtn.innerText = selectOption;


        optionmenu.classList.remove("active")

    })

})

