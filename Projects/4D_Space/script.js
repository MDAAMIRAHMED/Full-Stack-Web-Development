function DisplayTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours < 12){
        let am_pm = "am";
        let TimeString = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString() + " " + am_pm;
        document.getElementById('box2').innerHTML = TimeString;
        console.log(TimeString);
    }
}

setInterval(DisplayTime,1000);