function calculateAge() {
    let birthDay = parseInt(document.getElementById('day').value);
    let birthMonth = parseInt(document.getElementById('month').value);
    let birthYear = parseInt(document.getElementById('year').value);

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        years--;
        months = (12 - birthMonth) + currentMonth;
    }

    if (currentDay < birthDay) {
        let monthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
        days = monthDays + days;
        months--;
    }

    document.getElementById('resultYear').innerHTML = years;
    document.getElementById('resultMonth').innerHTML = months;
    document.getElementById('resultDay').innerHTML = days;
}


function getDaysInMonth(year, month, days) {
    if (month === 1) { 
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; 
        } else {
            return 28; 
        }
    } else if (month === 7) { 
        return 31;
    } else {
        return 30 + ((month % 7) % 2); 
    }
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});

calculateAge()
getDaysInMonth()