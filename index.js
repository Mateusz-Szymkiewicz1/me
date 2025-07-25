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
        document.querySelector("#nav_kontakt a").innerHTML = '<i class="fa fa-envelope"></i>';
        document.querySelector("#nav_portfolio a").innerHTML = '<i class="fa fa-briefcase"></i>';
        document.querySelector("#nav_umiej a").innerHTML = '<i class="fa fa-book"></i>';
        document.querySelector("#nav_dosw a").innerHTML = '<i class="fa fa-clipboard"></i>';
        document.querySelector("#nav_omnie a").innerHTML = '<i class="fa fa-user-tie"></i>';
    } else {
        document.querySelector("#nav_kontakt a").innerHTML = 'Kontakt';
        document.querySelector("#nav_portfolio a").innerHTML = 'Portfolio';
        document.querySelector("#nav_umiej a").innerHTML = 'Umiejętności';
        document.querySelector("#nav_dosw a").innerHTML = 'Doświadczenie';
        document.querySelector("#nav_omnie a").innerHTML = 'O mnie';
    }
}
var x = window.matchMedia("(max-width: 590px)");
responsivity(x);
x.addListener(responsivity);
window.work_descriptions = [
    {
        company: "Karol Walasek Informatyka",
        job: "Praktyki Zawodowe",
        desc: "Nauka oraz szkolenie z technologii HTML, CSS, JS, Vue.js, Nuxt.js, SASS",
        time: "03-04 2023"
    },
    {
        company: "Sopchy",
        job: "Praktyki Zawodowe",
        desc: "Tworzenie i projektowanie aplikacji internetowych w HTML, CSS, JS oraz Wordpress dla kientów. Przygotowywanie grafik do wykorzystania na stronach.",
        time: "10-11 2023"
    },
    {
        company: "Technik Programista",
        job: "Egzamin zawodowy",
        desc: "Uzyskany tytuł technika programisty.",
        time: "2025"
    },
]
document.querySelectorAll(".status span").forEach(span => {
    span.addEventListener("click", function (e) {
        if(document.querySelector(".window_job")){
            document.querySelector(".window_job").remove();
        }
        const job_obj = window.work_descriptions[span.dataset.number];
        const div = document.createElement("div");
        div.className = "window window_job";
        div.innerHTML = `<div class="title-bar">
                <div class="title-bar-text"><i class="fa fa-user-tie">&nbsp;&nbsp;</i>job.txt</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                </div>
            </div>
            <div class="window-body">
                <h4>${job_obj.company}</h4>
                <h5>${job_obj.job}</h5>
                <h6>${job_obj.time}</h6>
                <p>${job_obj.desc}</p>
            </div>`;
        div.style.cssText = `width: 380px;position: fixed;top: ${window.innerHeight/2}px;left: ${window.innerWidth/2}px;margin-top: -140px;margin-left: -190px;`;
        document.body.appendChild(div);
        document.querySelector(".window_job button").addEventListener("click",function(){
            document.querySelector(".window_job").remove();
        })
      let x = 0;
      let y = 0;
      const mouseDownHandler = function (e) {
          x = e.clientX;
          y = e.clientY;
          document.addEventListener('mousemove', mouseMoveHandler);
          document.addEventListener('mouseup', mouseUpHandler);
      };
      const mouseMoveHandler = function (e) {
          const dx = e.clientX - x;
          const dy = e.clientY - y;
          div.style.top = `${parseInt(div.style.top.slice(0, -2)) + dy}px`;
          div.style.left = `${parseInt(div.style.left.slice(0, -2)) + dx}px`;
          x = e.clientX;
          y = e.clientY;
      };
      const mouseUpHandler = function () {
          document.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mouseup', mouseUpHandler);
      };
      div.addEventListener('mousedown', mouseDownHandler);
    })
})
function hide_preloader(){
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".main_window").style.display = "block";
        document.querySelector(".kitty").style.display = "block";  
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
                let komunikat;
                if(message == "OK"){
                    komunikat = "Pomyślnie wysłano!";
                    document.querySelector(".status_label").style.color = "#2ecc71";
                }else{
                    komunikat = "Wystąpił Błąd";
                    document.querySelector(".status_label").style.color = "#e74c3c";
                }
                document.querySelector("#h3_kontakt").scrollIntoView();
                document.querySelector(".status_label").innerText = " - "+komunikat;
                document.querySelector("input").value = ""
                document.querySelector("textarea").value = ""
            }
          );
    }else{
       document.querySelector("textarea").value = "";
       document.querySelector("textarea").setAttribute("placeholder","Napisz chociaż 10 znaków!  Wierzę w Ciebie!");
    }
})
document.querySelector(".scroll_to_top").addEventListener("click", function(){
    window.scrollTo(0,0);
    document.querySelector(".main_window").scrollTo(0,0);
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
let rok = new Date().getFullYear();
document.querySelector('.copyright').innerHTML = `Mateusz Szymkiewicz ${rok} &#169;`;