document.querySelectorAll("menu li").forEach(li => {
    li.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelectorAll("menu li").forEach(li2 => {
            if(li2.hasAttribute("aria-selected")){
                li2.removeAttribute("aria-selected");
            }
        })
        li.setAttribute("aria-selected", "true");
    })
})
document.querySelector("#tab_omnie").addEventListener("click", function(){
    document.querySelector(".window-body").innerHTML = "<p>O mnie</p>";
})
document.querySelector("#tab_doswiadczenie").addEventListener("click", function(){
    document.querySelector(".window-body").innerHTML = "<p>Doświadczenie</p>";
})
document.querySelector("#tab_umiejetnosci").addEventListener("click", function(){
    document.querySelector(".window-body").innerHTML = "<p>Umiejętności</p>";
})
document.querySelector("#tab_portfolio").addEventListener("click", function(){
    document.querySelector(".window-body").innerHTML = "<p>Portfolio</p>";
})
document.querySelector("#tab_kontakt").addEventListener("click", function(){
    document.querySelector(".window-body").innerHTML = "<p>Kontakt</p>";
})