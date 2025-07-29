var time;
var datetime;
var hour;
var day;
document.body.style.fontSize = `100px`;
document.body.style.textAlign = `center`;
document.body.innerText = `Loading...`;
document.title = `Clock`;
function mainloop(){
    setTimeout(() =>{
        
        time = new Date().toLocaleTimeString();
        datetime = new Date().toLocaleDateString();
        hour = new Date().getHours();
        hour > 0 && hour < 6? day = `🌑`
        : hour > 5 && hour < 12? day = `☀️`:
        hour > 11 && hour < 18? day = `🌇`
        : hour > 17? day = `🌙` : day = `?`;

        if (day === `🌙` || day === `🌑`){
            document.body.style.color = `#ffffff`;
            document.body.style.backgroundColor = `#000000`;
        } else if (day === `☀️`){
            document.body.style.color = `#00000`;
            document.body.style.backgroundColor = `#0062ff`;
        } else if (day === `🌇`){
            document.body.style.color = `#ffffff`;
            document.body.style.backgroundColor = `#a32300`;
        } else if (day === `?`){
            throw Error(`Unexpected Error`)
        }

        document.body.innerText = `${time}\n${datetime}\n${day}`;
        mainloop();
    }, 265);
}

mainloop();
