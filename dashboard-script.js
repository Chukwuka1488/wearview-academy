document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dateString = today.toLocaleDateString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    document.getElementById('date').textContent = dateString;

    // calendar 
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
        // Additional options and callbacks here
    });
    calendar.render();
});
