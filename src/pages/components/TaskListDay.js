import {initializeApp} from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore";
import {useEffect, useState} from "react";

// Firebase initialization
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

// Given a day of the week, returns a corresponding number
function day_to_num(d){
    switch (d) {
        case "sunday":
            return 7;
            break;
        case "monday":
            return 1;
            break;
        case "tuesday":
            return 2;
            break;
        case "wednesday":
            return 3;
            break;
        case "thursday":
            return 4;
            break;
        case "friday":
            return 5;
            break;
        case "saturday":
            return 6;
            break;
        default:
            return 0;
    }
}

// Given a date number representing the start of the current week, month, and year
// returns an array with the appropriate start date as well as the corresponding month and year for the start date
function generateWeekOfArr(currentWk, month, year,){
    let week = currentWk, mo = month, yr = year;
    if(currentWk <= 0){
        if(month == 1){
            mo = 12;
            yr = year - 1;
        }
        else {
            mo = month - 1;
        }
        week = currentWk + new Date(yr, mo, 0).getDate();
    }
    return [week, mo, yr];
}

// Generates display for a list-day in the list
function TaskListDay(props){

    // Variables to hold information about the current day
    const current = new Date(), today = (current.getDay() == 0? 7: current.getDay());
    const weekOfArr = generateWeekOfArr(props.current_wk_start, props.month_num, props.year);
    const entryDayNum = day_to_num(props.dayOfWeek);
    const dayPassed = (entryDayNum < today? true: false);
    const isToday = (entryDayNum == today? true : false);

    // State variables to hold assignment information from Firebase and control the display of entries in the day list
    const [courses, setCourses] = useState([]);
    const [dueTimes, setDueTimes] = useState([]);
    const [error, setError] = useState(false)
    const listType = (courses.length <= 0? "none_type" : "task_day_list");

    // Gets assignment information for the current week from Firebase
    async function getDues(){
        const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks");
        const q = query(colRef, where("DMY","==", weekOfArr));
        const querySnap = await getDocs(q);
        const isEmptyQ = querySnap.empty;
        if (!isEmptyQ){
            let week =  querySnap.docs.map(doc => doc.id)[0].toString();
            await getDuesForDay(week);
        }
        else{
            await getDuesForDay("week_2");
        }
    }

    // A helper function which takes in a selected week, then gets the assignment information for the day based on the input week
    async function getDuesForDay(week){
        const assignRef =
            collection(db, "GSCalTestCol", "testCalData", "testWeeks",week,"days",props.dayOfWeek,"assignments");
        const assignQuery = query(assignRef, orderBy("due"));
        const querySnap = await getDocs(assignQuery);
        let courseArr =  querySnap.docs.map(doc => doc.data().course);
        let dueArr = querySnap.docs.map(doc => doc.data().due);
        setCourses(courseArr);
        setDueTimes(dueArr);
    }

    // Given a timestamp object (w/ seconds), determines if the timestamp has already passed
    function isPast(tStamp){
        const time = new Date(tStamp.seconds*1000)
        if (isToday){
            if (time.getHours() < current.getHours()){
                if (time.getMinutes() < current.getMinutes()){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        return dayPassed;
    };

    // Display variable to generate the lists for each day within the greater list
    const displayDue =
        dueTimes.map((t,i) =>
        {
            let timeInfo = props.generateTimeInfo(t),
                hour = timeInfo[1], min = timeInfo[2], ampm = timeInfo[3];
            let passed = isPast(t);
            return (<li className={"passed_" + passed.toString()}>
                <div className={"list_content"}>
                    <div className={"course_text"}>{courses[i]}</div>
                    <div className={"list_time"}>
                        <p className={"mb-0 list_time_text"}>{hour +  ":" + min + " " + ampm}</p>
                    </div>
                </div>
            </li>);
        }
    );

    useEffect(() =>
        {
            getDues().catch(e => console.log(e));
        }, []
    );

    return(
        <div className={"mx-2 mx-sm-3 mt-1 mb-2 task_day_entry"}>
            <h2 className={"fs-3 td_day"}>{props.dayOfWeek}</h2>
            <ul className={"mb-5 " + listType}>
                {!error && displayDue}
                {(courses.length <= 0) && <li>none!</li>}
            </ul>
            <div className={"tde_bottom"}></div>
        </div>
    );
}

export default TaskListDay;