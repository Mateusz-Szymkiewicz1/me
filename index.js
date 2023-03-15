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
        div.querySelector("button").addEventListener("click",function(){
            document.querySelector(".window_job").remove();
            if(document.querySelector(".window_job")){
                document.querySelector(".window_job").style.opacity = "0";
                document.querySelector(".window_job").style.pointerEvents = "none";
                document.querySelector(".window_job").removeAttribute("class");
            }
        })
    })
})
