function updateDateTime() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('datetime').textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();