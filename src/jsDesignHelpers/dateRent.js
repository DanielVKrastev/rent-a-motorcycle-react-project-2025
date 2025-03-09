import flatpickr from "flatpickr";

export default function dateRent(startRentDate, endRentDate) {


// Заети дати от всички диапазони (примерен масив)
const bookedDates = ["2025-03-12", "2025-03-15"];

let selectedDates = [];
// Функция за обработка на всички заети дати
function getAllBookedDates() {
    let allDates = [];
    bookedDates.forEach(function(range) {
        console.log(range);
        
        let startDate = new Date(range[0]);
        let endDate = new Date(range[1]);
        let currentDate = startDate;
        while (currentDate <= endDate) {
            allDates.push(currentDate.toISOString().slice(0, 10));
            currentDate.setDate(currentDate.getDate() + 1);
        }
    });
    return allDates;
}


// Инициализация на Flatpickr за начална дата
const startDateInput =  startRentDate; //document.getElementById('start-rent-input');
const endDateInput = endRentDate; //document.getElementById('end-rent-input');

let startPicker = flatpickr(startDateInput, {
    locale: 'bg', // Използване на български език
    dateFormat: "Y-m-d", // Формат на датата
    minDate: 'today', // Минимална дата - днешна дата
    disable: getAllBookedDates(), // Забрана на заетите дати
    onChange: function(selectedDates) {
        // Премахване на маркирането
        startDateInput.classList.remove('booked-date');
        // Актуализиране на минималната дата за крайния пикер
        endPicker.set('minDate', selectedDates[0]);
        // Задаване на крайната дата на началната дата + 1 ден
        let nextDay = new Date(selectedDates[0]);
        nextDay.setDate(nextDay.getDate());
        // console.log(nextDay);
        endPicker.setDate(nextDay);
    }
});

// Инициализация на Flatpickr за крайна дата
let endPicker = flatpickr(endDateInput, {
    locale: 'bg', // Използване на български език
    dateFormat: "Y-m-d", // Формат на датата
    minDate: 'today', // Минимална дата - днешна дата
    disable: getAllBookedDates(), // Забрана на заетите дати
    onChange: function(selectedDates) {
        // Премахване на маркирането
        endDateInput.classList.remove('booked-date');
    }
});

//--------------------------------------------------------------------------------
//Функции за засичащ се диапазон от дати
/*
const ranges = [];

function saveRange() {
    ranges.length = 0;
    const startInput = document.getElementById('start-rent-input');
    const endInput = document.getElementById('end-rent-input');
    const startValue = startInput.value;
    const endValue = endInput.value;
    ranges.push(startValue, endValue);
}

function handleInputChange() {
    saveRange();

    let rangeToCheck = ranges;

    const arrayOfRanges = [];

    function doesRangeOverlapWithAny(rangeToCheck, arrayOfRanges) {

        for (let i = 0; i < arrayOfRanges.length; i++) {
            const currentRange = arrayOfRanges[i];
            const startDateToCheck = new Date(ranges[0]);
            const endDateToCheck = new Date(ranges[1]);
            const startDate = new Date(currentRange[0]);
            const endDate = new Date(currentRange[1]);

            //console.log(endDateToCheck);

            if (endDateToCheck >= startDate && startDateToCheck <= endDate) {
                return true; // Намерили сме засичащ се диапазон
            }
        }
        return false; // няма засичащ се диапазон

    }

    const overlap = doesRangeOverlapWithAny(rangeToCheck, arrayOfRanges);
    if (overlap) {
        const endInput = document.getElementById('start-rent-input').value = 'Тези дати са заети';
        const startInput = document.getElementById('end-rent-input').value = 'Тези дати са заети';
        console.log(ranges[0]);
        //alert('Някои от тези дати вече са заети. Моля изберете си други.')
    }
    console.log(overlap); // true, защото диапазонът за проверка се засича с поне един от масивите
}

handleInputChange();


document.getElementById('end-rent-input').addEventListener('input', handleInputChange);
*/
}