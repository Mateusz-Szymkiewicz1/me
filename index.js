document.querySelector("#btn_min").addEventListener("click", function () {
    document.querySelector(".main_window").style.display = "none";
    document.querySelector(".min_window").style.display = "flex";
})
document.querySelector("#btn_max").addEventListener("click", function () {
    document.querySelector(".main_window").style.display = "block";
    document.querySelector(".min_window").style.display = "none";
})

function responsivity(x) {
    if (x.matches) {
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
window.work_descriptions = [
    {
        company: "Lorem Ipsum",
        job: "Senior Java Developer",
        desc: "Lorem Ipsum Dolor Sit Amet Bla Bla Bla Ipsum Lorem Amet Sit",
        time: "2021-2022"
    },
    {
        company: "Lorem Ipsum2",
        job: "Junior Java Developer",
        desc: "Lorem Ipsum Dolor Sit Amet Bla Bla Bla Ipsum Lorem Amet Sit",
        time: "2022-2023"
    },
    {
        company: "Lorem Ipsum3",
        job: "Senior PHP Developer",
        desc: "Lorem Ipsum Dolor Sit Amet Bla Bla Bla Ipsum Lorem Amet Sit",
        time: "2024-2025"
    },
    {
        company: "Lorem Ipsum4",
        job: "Developer",
        desc: "Lorem Ipsum Dolor Sit Amet Bla Bla Bla Ipsum Lorem Amet Sit",
        time: "2026-2027"
    }
]
document.querySelectorAll(".status span").forEach(span => {
    span.addEventListener("click", function (e) {
        if(document.querySelector(".window_job")){
            document.querySelector(".window_job").remove();
        }
        let job_obj = window.work_descriptions[span.dataset.number];
        let div = document.createElement("div");
        div.className = "window window_job";
        div.innerHTML = `<div class="title-bar">
                <div class="title-bar-text"><i class="fa fa-user-tie">&nbsp;&nbsp;</i>job.txt</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                </div>
            </div>
            <div class="window-body">
                <h3>${job_obj.company}</h3>
                <h5>${job_obj.job}</h5>
                <h6>${job_obj.time}</h6>
                <p>${job_obj.desc}</p>
            </div>`;
        div.style.cssText = `height: 280px;width: 380px;position: fixed;top: ${window.innerHeight/2}px;left: ${window.innerWidth/2}px;margin-top: -140px;margin-left: -190px;`;
        document.body.appendChild(div);
        $(".window_job").draggable();
        document.querySelector(".window_job button").addEventListener("click",function(){
            document.querySelector(".window_job").style.display = "none";
            document.querySelector(".window_job").remove();
            if(document.querySelector(".window_job")){
                document.querySelector(".window_job").removeAttribute("class");
            }
        })
    })
})
function hide_preloader(){
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".main_window").style.display = "block";
        document.querySelector(".kitty").style.display = "block";  
        let queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let get_status = urlParams.get("status");
        if(get_status){
            let komunikat;
            if(get_status == "OK"){
                komunikat = "Pomyślnie wysłano!";
                document.querySelector(".status_label").style.color = "#2ecc71";
            }else{
                komunikat = "Wystąpił Błąd";
                document.querySelector(".status_label").style.color = "#e74c3c";
            }
            document.querySelector("#h4_kontakt").scrollIntoView();
            document.querySelector(".status_label").innerText = " - "+komunikat;
        }
    }, 200)
}
document.querySelector("textarea").value = "";
document.querySelector("input[type=text]").value = "";
document.querySelector("input[type=submit]").addEventListener("click", function(e){
    e.preventDefault();
    let tresc = document.querySelector("textarea").value;
    let podpis = document.querySelector("input[type=text]").value || "Brak podpisu";
    if(tresc && tresc.length >= 10){
         Email.send({
            Host : "smtp.elasticemail.com",
            Username : "portfolio.bot2@gmail.com",
            Password : "FAD4AB76A6967646B1034DBA059228185FA6",
            To : 'szymkiewiczmateusz1@gmail.com',
            From : "portfolio.bot2@gmail.com",
            Subject : "Email z portfolio",
            Body : `<h2><strong>Email od : ${podpis}.</strong></h2><h4>${tresc}</h4>`
          }).then(
            message => {
                let status = "OK";
                if(message != "OK"){
                    status = "ERR";
                }
                window.location.replace(`index.html?status=${status}`);
            }
          );
    }else{
       document.querySelector("textarea").value = "";
       document.querySelector("textarea").setAttribute("placeholder","Napisz chociaż 10 znaków!  Wierzę w Ciebie!");
    }
})
document.querySelector(".scroll_to_top").addEventListener("click", function(){
    window.scrollTo(0,0);
})
document.addEventListener("scroll", function(){
    let scrollTotal = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    if ((document.documentElement.scrollTop / scrollTotal ) > 0.20 ) {
        document.querySelector(".scroll_to_top").style.display = "block";
        document.querySelector(".scroll_to_top").style.animation = "fadeIn 0.5s ease";
    } else {
        if(document.querySelector(".scroll_to_top").style.display == "block"){
            document.querySelector(".scroll_to_top").style.animation = "fadeOut 0.3s ease";
            setTimeout(function(){
              document.querySelector(".scroll_to_top").style.display = "none";  
            }, 250)
        }
    }
})