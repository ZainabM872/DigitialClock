document.addEventListener("DOMContentLoaded", function(){ //runs if the dom has loaded
    
    let date = new Date();

    function currentTime() {
        date = new Date(); //declare inside the function so the object updates
        const hour = document.getElementById("hour").innerHTML = date.getHours();
        const minutes = document.getElementById("minutes").innerHTML = date.getMinutes();
        //check if its am or pm
        const amOrPm = (hour >= 12) ? "PM" : "AM"
        document.getElementById("AmOrPm").innerHTML = amOrPm

        const sec = document.getElementById("seconds").innerHTML = date.getSeconds();

        if (hour <= 9){
            document.getElementById("hour").innerHTML = "0"+date.getHours();
        }
        if (minutes <= 9){
            document.getElementById("minutes").innerHTML = "0"+date.getMinutes();
        }
        if(sec <=9){
            document.getElementById("seconds").innerHTML = "0"+date.getSeconds();
        }
    }

    currentTime();
    setInterval(currentTime, 1000);

    let dayOfWeek = date.getDay(); //days r from 0-6
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("week").innerHTML = daysOfWeek[dayOfWeek] + ",";

    let month = date.getMonth(); //returns numbers from 0-11
    const monthsOfYear = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("month").innerHTML = monthsOfYear[month];

    const day = date.getDate()
    console.log("day",day)
    //document.getElementById("day");
    if (day == 1 || day == 21 || day == 31){
        document.getElementById("day").innerHTML = day + 'st';
    }
    else if (day > 1 && day < 20 || day >23 && day <= 30){
        document.getElementById("day").innerHTML = day + 'th';
    }
    else if (day == 22){
        document.getElementById("day").innerHTML = day + 'nd';
    }
    else if (day == 23){
        document.getElementById("day").innerHTML = day + 'rd';
    }

    const year = document.getElementById("year").innerHTML = date.getFullYear();





})

