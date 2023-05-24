function calculateAge() {
  let birthDay = parseInt(document.getElementById('day').value);
  let birthMonth = parseInt(document.getElementById('month').value);
  let birthYear = parseInt(document.getElementById('year').value);

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() +1;
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
    document.getElementById('day').classList.add('error-outline');
    document.getElementById('h5-day').classList.add('error-color');
    return;
  } else {
      document.getElementById('errorDay').innerHTML = "";
      document.getElementById('day').classList.remove('error-outline');
      document.getElementById('h5-day').classList.remove('error-color');
  }
  
  if (birthMonth < 1 || birthMonth > 12) {
      document.getElementById('errorMonth').innerHTML = "Must be a valid month";
      document.getElementById('month').classList.add('error-outline');
      document.getElementById('h5-month').classList.add('error-color');
      return;
  } else {
      document.getElementById('errorMonth').innerHTML = "";
      document.getElementById('month').classList.remove('error-outline');
      document.getElementById('h5-month').classList.add('error-color');
  }
  
  if (birthYear < 1 || birthYear > currentYear) {
      document.getElementById('errorYear').innerHTML = "Must be a valid year";
      document.getElementById('year').classList.add('error-outline');
      document.getElementById('h5-year').classList.add('error-color');
      return;
  } else {
      document.getElementById('errorYear').innerHTML = "";
      document.getElementById('year').classList.remove('error-outline');
      document.getElementById('h5-year').classList.add('error-color');
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
        event.preventDefault(); 
        const currentElement = event.target;
        if (currentElement.id === 'day') {
            const monthInput = document.getElementById('month');
            monthInput.focus(); 
        } else if (currentElement.id === 'month') {
            const yearInput = document.getElementById('year');
            yearInput.focus(); 
        } else if (currentElement.id === 'year') {
            calculateAge(); 
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});

calculateAge();
getDaysInMonth();
