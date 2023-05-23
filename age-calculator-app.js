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
        months = 12 - birthMonth + currentMonth - 1;
        if (currentDay < birthDay) {
            months++;
        }
    }

    if (currentDay < birthDay) {
        let monthDays = getDaysInMonth(currentYear, currentMonth - 1);
        days = monthDays - (birthDay - currentDay);
        months--;

        if (months < 0) {
            years--;
            months += 12;
        }
    }

    if (birthDay < 1 || birthDay > getDaysInMonth(currentYear, birthMonth - 1)) {
        document.getElementById('errorDay').innerHTML = "Must be a valid day";
        document.getElementById('day').style.borderColor = "red";
        return;
    } else {
        document.getElementById('errorDay').innerHTML = "";
        document.getElementById('day').style.borderColor = "";
    }

    if (birthMonth < 1 || birthMonth > 12) {
        document.getElementById('errorMonth').innerHTML = "Must be a valid month";
        return;
    } else {
        document.getElementById('errorMonth').innerHTML = "";
    }

    if (birthYear < 1 || birthYear > currentYear) {
        document.getElementById('errorYear').innerHTML = "Must be a valid year";
        return;
    } else {
        document.getElementById('errorYear').innerHTML = "";
    }

    document.getElementById('resultYear').innerHTML = years;
    document.getElementById('resultMonth').innerHTML = months;
    document.getElementById('resultDay').innerHTML = days;
}

function getDaysInMonth(year, month) {
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

calculateAge();
getDaysInMonth();
