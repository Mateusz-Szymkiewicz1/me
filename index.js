document.querySelector("#btn_min").addEventListener("click", function(){
    document.querySelector(".main_window").style.display = "none";
    document.querySelector(".min_window").style.display = "flex";
})
document.querySelector("#btn_max").addEventListener("click", function(){
    document.querySelector(".main_window").style.display = "block";
    document.querySelector(".min_window").style.display = "none";
})
function responsivity(x) {
    if (x.matches){
        document.querySelector("#nav_kontakt").innerHTML = '<i class="fa fa-envelope"></i>';
        document.querySelector("#nav_portfolio").innerHTML = '<i class="fa fa-briefcase"></i>';
        document.querySelector("#nav_umiej").innerHTML = '<i class="fa fa-book"></i>';
        document.querySelector("#nav_dosw").innerHTML = '<i class="fa fa-clipboard"></i>';
        document.querySelector("#nav_omnie").innerHTML = '<i class="fa fa-user-tie"></i>';
        document.querySelector("#nav_portfolio").style.paddingTop = "6px";
    } else {
        document.querySelector("#nav_kontakt").innerHTML = '<span style="text-decoration:underline;">K</span>ontakt';
        document.querySelector("#nav_portfolio").innerHTML = '<span style="text-decoration:underline;">P</span>ortfolio';
        document.querySelector("#nav_umiej").innerHTML = '<span style="text-decoration:underline;">U</span>miejętności';
        document.querySelector("#nav_dosw").innerHTML = '<span style="text-decoration:underline;">D</span>oświadczenie';
        document.querySelector("#nav_omnie").innerHTML = '<span style="text-decoration:underline;">O</span> mnie';
        document.querySelector("#nav_portfolio").style.paddingTop = "5px";
    }
}
var x = window.matchMedia("(max-width: 590px)");
responsivity(x);
x.addListener(responsivity);