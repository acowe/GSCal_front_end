import {Col, Row} from "react-bootstrap";
import CalDay from "./CalDay";

// Given the starting date of the week, the number of days in the current and previous month, and the current month,
// generates an array of arrays, with each element array containing the date and month for each of the days in the week of startDate
function generateWkDates(startDate, maxDay, prevMaxDay, currentMonth){
    let wkDates = [];
    let month = currentMonth;
    for (let i=0; i<7; i++){
        let dateEntry = startDate + i;
        if (dateEntry > maxDay){
            dateEntry = dateEntry-maxDay;
            month = currentMonth + 1;
        }
        if (dateEntry <= 0){
            dateEntry = dateEntry + prevMaxDay;
            month = currentMonth + 1;
        }
        wkDates.push([dateEntry,month]);
    }
    return wkDates;
}

// Given the starting date of the week, the number of days in the current and previous month, the current month, and the current year
// generates an array with the starting date of the week, the month of that start date, and the year
function generateStart(startDate, maxDay, prevMaxDay, month, year){
    let currentDay = startDate, currentMonth = month, currentYear = year;
    if (startDate > maxDay){
        currentDay = startDate - maxDay;
        currentMonth = month + 1;
        if(currentMonth > 12){
            currentMonth = 1;
            currentYear = year + 1
        }
    }
    if(startDate <= 0){
        currentDay = startDate + prevMaxDay;
        currentMonth = month - 1;
        if (currentMonth < 1){
            currentMonth = 12;
            currentYear = year - 1;
        }
    }
    return [currentDay, currentMonth, currentYear];
}

// Generates display for a week within the calendar
function CalWeek(props){
    // Variables to hold information about the week
    const thisWeekDates = generateWkDates(props.wk_of,props.dayInMonth, props.dayInPrevMonth,props.month);
    const startArr = generateStart(props.wk_of, props.dayInMonth, props.dayInPrevMonth, props.month, props.year);

    return(
        <Row className={"mx-0 " + props.wk_type}>

            <CalDay startArr={startArr} day_type={"cal_sun"} dayNum={props.wkNum} day_of_month={thisWeekDates[0][0]} day_of_week={"sunday1"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                    month = {thisWeekDates[0][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+1} day_of_month={thisWeekDates[1][0]} day_of_week={"monday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                    month = {thisWeekDates[1][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+2} day_of_month={thisWeekDates[2][0]} day_of_week={"tuesday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {thisWeekDates[2][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+3} day_of_month={thisWeekDates[3][0]} day_of_week={"wednesday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                    month = {thisWeekDates[3][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+4} day_of_month={thisWeekDates[4][0]} day_of_week={"thursday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                    month = {thisWeekDates[4][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+5} day_of_month={thisWeekDates[5][0]} day_of_week={"friday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                    month = {thisWeekDates[5][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

            <CalDay startArr={startArr} day_type={"cal_sat"} dayNum={props.wkNum+6} day_of_month={thisWeekDates[6][0]} day_of_week={"saturday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                    month = {thisWeekDates[6][1]} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>
        </Row>
    );
}

export default CalWeek;