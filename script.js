if (window.location.pathname == "/Castilla.html"){
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
            if(minutes == 0 && seconds == 0)
                window.location.href="enter.html";
        }, 1000);
    }
    window.onload = function () {
        var duration = 60; // Converter para segundos
            display = document.getElementById('countdown'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer
    };
}

function login(){
    const url = window.location.pathname;
    if(url == "/index.html"){
        if(document.getElementById("enter").value == "0539")
            window.location.href="https://www.globo.com";
        else
            document.getElementById("mensagem").textContent = "Wayne não identificado!"
        
    }else if (url == "/enter.html"){
        switch(document.getElementById("enter").value){
            case "Necrose":
                window.location.href="Necrose.html";
            break;
            case "necrose":
                window.location.href="Necrose.html";
            break;
            case "Castilla":
                window.location.href="Castilla.html";
            break;
            case "castilla":
                window.location.href="Castilla.html";
            break;
        }
    }
}
