import { useState } from 'react';
import './datepicker.scss';
import chevronLeft from '../assets/icons/chevron-left.svg';
import chevronRight from '../assets/icons/chevron-right.svg';

function DatePicker() {
    const options = { weekday: 'long', month: 'long', day: '2-digit' };
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [daysOfMonth, setDaysOfMonth] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const handleDatePickerClick = () => {
        setShowDatePicker(!showDatePicker);
        setDaysOfMonth(getWeeksofMonth(selectedMonth, selectedYear));
    }

    const getWeeksofMonth = (month, year) => {
        const firstOfMonth = new Date(year, month, 1);
        const firstDayOfWeek = firstOfMonth.getDay();
        const weeks = [];
        
        let currentWeek = weeks;
        let currentDate = firstOfMonth;

        for (let i = 0; i < firstDayOfWeek; i++) {
            currentWeek.push(null);
        }

        while(currentDate.getMonth() === month) {
            currentWeek.push({ value: currentDate.toDateString(options), text: currentDate.getDate()});
            currentDate = new Date(year, month, currentDate.getDate() + 1);
        }

        return weeks;
    }

    const changeMonth = (direction) => {
        let month = selectedMonth;
        let year = selectedYear;

        month = direction === 'up' ? month + 1 : month - 1;

        if (month > 11) {
            year = year + 1;
            month = 0;
        }

        if (month < 0) {
            year = year - 1;
            month = 11;
        }

        setSelectedMonth(month);
        setSelectedYear(year);
        setDaysOfMonth(getWeeksofMonth(month, year));
    }

    const datePickerPopup = () => {
        return (
            <div className='datepicker-popup'>
                <div className='datepicker-header'>
                    <img src={chevronLeft} alt='' onClick={() => changeMonth('down')} />
                    { monthsOfYear[selectedMonth] } {selectedYear}
                    <img src={chevronRight} alt='' onClick={() => changeMonth('up')} />
                </div>
                <div className='datepicker-content'>
                    <div className='datepicker-days'>
                        <div className='datepicker-weekdays'>
                            { daysOfWeek.map((day, index) => {
                                return (
                                    <div className='datepicker-weekday' key={index}>
                                        { day }
                                    </div>
                                )
                            }) }
                        </div>
                        { daysOfMonth.map((value, index) => {
                            return (
                                value ? (
                                    <div
                                        className={`datepicker-day ${selectedDate === value?.value ? 'active' : ''}`}
                                        onClick={() => setSelectedDate(value.value)}
                                        key={index}
                                    >
                                        { value.text }
                                    </div>
                                ): <div key={index}></div>
                            )
                        })
                        }
                    </div>
                    <div className='datepicker-buttons'>
                        <button 
                            className='cancel-button md-button'
                            onClick={() => { setShowDatePicker(false); setSelectedDate("") }}>Cancel</button>
                        <button className='primary-button md-button' onClick={() => setShowDatePicker(false)}>Choose Date</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='datepicker-container'>
            <input className='datepicker-toggle text-input' placeholder='Select Date' value={selectedDate} onClick={() => handleDatePickerClick()} readOnly />
            { showDatePicker ?  datePickerPopup() : ''}
        </div>
    );
}

export default DatePicker;