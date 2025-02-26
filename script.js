document.addEventListener("DOMContentLoaded", () => {
    function formatNumber(num) {
        return num < 10 ? "0" + num : num;
    }

    function getDiff(){
        let currentDate = new Date();
        let dDay = new Date("January 1, 2026");
        console.log(currentDate);
        console.log(dDay);
    
        let resultant = dDay.getTime() - currentDate.getTime();
        let days = Math.floor(resultant / (1000 * 60 * 60 * 24));
        resultant %= (1000 * 60 * 60 * 24);  
        
        let hours = Math.floor(resultant / (1000 * 60 * 60));
        resultant %= (1000 * 60 * 60);
        
        let minutes = Math.floor(resultant / (1000 * 60));
        resultant %= (1000 * 60);
        
        let seconds = Math.floor(resultant / 1000);

        document.getElementById("days").innerHTML = formatNumber(days);
        document.getElementById("hours").innerHTML = formatNumber(hours);
        document.getElementById("minutes").innerHTML = formatNumber(minutes);
        document.getElementById("seconds").innerHTML = formatNumber(seconds);
    }

    getDiff();
    setInterval(getDiff, 1000);

})