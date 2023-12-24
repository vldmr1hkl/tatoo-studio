document.addEventListener("DOMContentLoaded", function() {

    const timeVisitor = document.getElementById('time-visitor');

    timeVisitor.addEventListener('mouseover', () => {
        timeVisitor.classList.remove('animation');
    });

    timeVisitor.addEventListener('mouseout', () => {
        timeVisitor.classList.add('animation');
    });

    function updateRealTime() {
        const currentDate = moment().utcOffset(-5); // Задайте потрібний UTC зміщення (New York -5)
        const formattedTime = currentDate.format("hh:mmA");
        document.getElementById('real-time').textContent = `It's ${formattedTime} in New York`;
    }
  
    updateRealTime();
    setInterval(updateRealTime, 1000);


});