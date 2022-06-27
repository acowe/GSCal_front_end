import {Col, Row} from "react-bootstrap";
import CalDay from "./CalDay";
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, query, orderBy, getDoc, where} from "firebase/firestore";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyA6Bx3J-IB1EnvqSE5Pja7r2R5ykJOjsFA",
    authDomain: "gscaltest.firebaseapp.com",
    projectId: "gscaltest",
    storageBucket: "gscaltest.appspot.com",
    messagingSenderId: "977140376530",
    appId: "1:977140376530:web:44496ec55fc6235d8f5e0b",
    measurementId: "G-5E3SBZM1QD"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function generateWkDates(startDate, maxDay){
    let wkDates = [];
    for (let i=0; i<7; i++){
        let dateEntry = startDate + i;
        if (dateEntry > maxDay){
            dateEntry = dateEntry-maxDay;
        }
        wkDates.push(dateEntry);
    }
    return wkDates;
}

function generateStart(startDate, maxDay, month, year){
    let currentDay = startDate, currentMonth = month, currentYear = year;
    if (startDate > maxDay){
        currentDay = startDate - maxDay;
        currentMonth = month + 1;
        if(currentMonth > 12){
            currentMonth = 1;
            currentYear = year + 1
        }
    }
    return [currentDay, currentMonth, currentYear];
}

function CalWeek(props){
    const thisWeekDates = generateWkDates(props.wk_of,props.dayInMonth);
    const startArr = generateStart(props.wk_of, props.dayInMonth, props.month, props.year);


    return(
        <Row className={"mx-0 " + props.wk_type}>
            <CalDay startArr={startArr} day_type={"cal_sun"} dayNum={props.wkNum} day_of_month={thisWeekDates[0]} day_of_week={"sunday1"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
            month = {startArr[1]}/>
            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+1} day_of_month={thisWeekDates[1]} day_of_week={"monday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {startArr[1]}/>
            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+2} day_of_month={thisWeekDates[2]} day_of_week={"tuesday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {startArr[1]}/>
            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+3} day_of_month={thisWeekDates[3]} day_of_week={"wednesday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {startArr[1]}/>
            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+4} day_of_month={thisWeekDates[4]} day_of_week={"thursday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {startArr[1]}/>
            <CalDay startArr={startArr} day_type={"cal_wkday"} dayNum={props.wkNum+5} day_of_month={thisWeekDates[5]} day_of_week={"friday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {startArr[1]}/>
            <CalDay startArr={startArr} day_type={"cal_sat"} dayNum={props.wkNum+6} day_of_month={thisWeekDates[6]} day_of_week={"saturday"}
                    filter={props.filter} eventOn={props.eventOn} enableEventOn={props.enableEventOn} eventOnFor={props.eventOnFor} selected={props.selected}
                    month = {startArr[1]}/>
        </Row>
    );
}

export default CalWeek;