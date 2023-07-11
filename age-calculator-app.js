const birthDay = parseInt(document.getElementById('day').value);
const birthMonth = parseInt(document.getElementById('month').value);
const birthYear = parseInt(document.getElementById('year').value);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();


function calculateYear() {
  let years = currentYear - birthYear;
  if (currentYear < birthYear || birthYear < 1 ) {
    document.getElementById('errorYear').innerHTML = 'Must be a valid year';
    document.getElementById('year').classList.add('error-outline');
    document.getElementById('h5-year').classList.add('error-color');
    } else {
    document.getElementById('errorYear').innerHTML = '';
    document.getElementById('year').classList.remove('error-outline');
    document.getElementById('h5-year').classList.remove('error-color');
    calculateYear()
  }
}

function calculateMonth() {

//   function getDaysInMonth(year, month) {
//   if (month === 1) {
//     if ((year % 4 === 0 || year % 100 !== 0) || year % 400 === 0) {
//       return 29;
//     } else {
//       return 28;
//     }
//   } else if (month === 7) {
//   return 31;
//   } else if (month % 2 === 0) {
//     return 30;
//   } else {
//     return 31;
//   }
// }
  let months = currentMonth - birthMonth;
  if (birthMonth < 0 || birthMonth > 12){
    document.getElementById('errorMonth').innerHTML = 'Must be a valid month';
    document.getElementById('month').classList.add('error-outline');
    document.getElementById('h5-month').classList.add('error-color');
    } else {
    document.getElementById('errorMonth').innerHTML = '';
    document.getElementById('month').classList.remove('error-outline');
    document.getElementById('h5-month').classList.remove('error-color');
    calculateMonth()
    }
  }
  if (currentMonth === birthMonth && currentDay > birthDay) {
    years --;
    months = 12 - birthMonth + currentMonth - 1;
    calculateMonth()
  
}

function calculateDay() {
  let days = currentDay - birthDay;
  if (birthMonth === 1) {
    if ((year % 4 === 0 || year % 100 !== 0) || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  } 
  else if (month === 7) {
    return 31;
    } else if (month % 2 === 0) {
      return 30;
    } else {
      return 31;
  }
  
}

// function calculateAge() {
//   if () {

//   }

// }

// const imgElement = document.getElementById('img-icon');

// imgElement.addEventListener('click', calculateAge);

// function calculateAge() {
//   const birthDay = parseInt(document.getElementById('day').value);
//   const birthMonth = parseInt(document.getElementById('month').value);
//   const birthYear = parseInt(document.getElementById('year').value);

//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = currentDate.getMonth() + 1;
//   const currentDay = currentDate.getDate();

//   let years = currentYear - birthYear;
//   let months = currentMonth - birthMonth;
//   let days = currentDay - birthDay;

//   if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
//     years--;
//     months = 12 - birthMonth + currentMonth - 1;
//     if (currentDay < birthDay) {
//       months++;
//     }
//   }

//   if (currentDay < birthDay) {
//     let monthDays = getDaysInMonth(currentYear, currentMonth - 1);
//     days = monthDays - (birthDay - currentDay);
//     months--;

//     if (months < 0) {
//       years--;
//       months += 12;
//     }
//   }

// if (
//     birthDay >= 1 &&
//     birthDay <= getDaysInMonth(currentYear, birthMonth - 1) &&
//     birthMonth >= 1 &&
//     birthMonth <= 12 &&
//     birthYear >= 1 &&
//     birthYear <= currentYear
//   ) {
//     document.getElementById('resultYear').innerHTML = years || '--';
//     document.getElementById('resultMonth').innerHTML = months || '--';
//     document.getElementById('resultDay').innerHTML = days || '--';
  
//     document.getElementById('errorDay').innerHTML = '';
//     document.getElementById('day').classList.remove('error-outline');
//     document.getElementById('h5-day').classList.remove('error-color');
//     document.getElementById('errorMonth').innerHTML = '';
//     document.getElementById('month').classList.remove('error-outline');
//     document.getElementById('h5-month').classList.remove('error-color');
//     document.getElementById('errorYear').innerHTML = '';
//     document.getElementById('year').classList.remove('error-outline');
//     document.getElementById('h5-year').classList.remove('error-color');
//     } else {
//         if (birthDay < 1 || birthDay > getDaysInMonth(currentYear, birthMonth - 1)) {
//         document.getElementById('errorDay').innerHTML = 'Must be a valid day';
//         document.getElementById('day').classList.add('error-outline');
//         document.getElementById('h5-day').classList.add('error-color');
//         } else {
//         document.getElementById('errorDay').innerHTML = '';
//         document.getElementById('day').classList.remove('error-outline');
//         document.getElementById('h5-day').classList.remove('error-color');
//         }
//         if (birthMonth < 1 || birthMonth > 12) {
//         document.getElementById('errorMonth').innerHTML = 'Must be a valid month';
//         document.getElementById('month').classList.add('error-outline');
//         document.getElementById('h5-month').classList.add('error-color');
//         } else {
//         document.getElementById('errorMonth').innerHTML = '';
//         document.getElementById('month').classList.remove('error-outline');
//         document.getElementById('h5-month').classList.remove('error-color');
//         }
//         if (birthYear < 1 || birthYear > currentYear) {
//         document.getElementById('errorYear').innerHTML = 'Must be a valid year';
//         document.getElementById('year').classList.add('error-outline');
//         document.getElementById('h5-year').classList.add('error-color');
//         } else {
//         document.getElementById('errorYear').innerHTML = '';
//         document.getElementById('year').classList.remove('error-outline');
//         document.getElementById('h5-year').classList.remove('error-color');
//     }
//   }
// }

// function getDaysInMonth(year, month) {
//   if (month === 1) {
//     if ((year % 4 === 0 || year % 100 !== 0) || year % 400 === 0) {
//       return 29;
//     } else {
//       return 28;
//     }
//   } else if (month === 7) {
//   return 31;
//   } else if (month % 2 === 0 && month !== 8) {
//     return 30;
//   } else {
//     return 31;
//   }
// }

// document.addEventListener('keyup', function (event) {
//   if (event.key === 'Enter') {
//     const currentElement = event.target;
//     if (currentElement.id === 'year') {
//       handleInput('day', 'month');
//     } else if (currentElement.id === 'month') {
//       handleInput('year', 'day');
//     } else if (currentElement.id === 'day') {
//       handleInput('month');
//     }
//   }
// });

// function handleInput(firstInputId, secondInputId) {
//   const firstInput = document.getElementById(firstInputId);
//   if (firstInput.value === '') {
//     firstInput.focus();
//   } else {
//     const secondInput = document.getElementById(secondInputId);
//     if (secondInput && secondInput.value === '') {
//       secondInput.focus();
//     } else {
//       calculateAge();
//     }
//   }
// }

calculateAge();