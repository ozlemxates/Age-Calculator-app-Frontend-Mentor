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
}