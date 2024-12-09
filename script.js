document.addEventListener("DOMContentLoaded", () => {
    const daySelector = document.getElementById("day-selector");
    const timetable = document.getElementById("timetable");
    const rows = document.querySelectorAll("tbody tr");
    const dateInfo = document.getElementById("date-info");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const updateDateInfo = (day) => {
        const today = new Date();
        const currentDayName = days[today.getDay()];
        const dateString = `Today is ${currentDayName}, ${today.toLocaleDateString()}`;
        dateInfo.textContent = day ? `Selected Day: ${day}` : dateString;
    };

    const showTimetableForDay = (day) => {
        rows.forEach((row) => (row.style.display = "none"));

        rows.forEach((row) => {
            if (row.dataset.day === day) {
                row.style.display = "table-row";
            }
        });

        const hasRows = Array.from(rows).some((row) => row.style.display === "table-row");
        timetable.style.display = hasRows ? "table" : "none";

        updateDateInfo(day);
    };

    const showTodayTimetable = () => {
        const today = days[new Date().getDay()];
        daySelector.value = today;
        showTimetableForDay(today);
    };

    daySelector.addEventListener("change", () => {
        const selectedDay = daySelector.value;
        if (selectedDay) {
            showTimetableForDay(selectedDay);
        }
    });

    showTodayTimetable();
});
