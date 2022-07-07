import {Col, Row} from "react-bootstrap";
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore";
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

// Generates display for a day within the calendar
function CalDay(props){

    // Variables to hold information about the current date and month as well as the course filter
    const current = new Date(), date = current.getDate(), currentMonth = current.getMonth()+1;;
    const courseFilter = props.filter;

    // State variables to hold data from Firebase
    const [assignments, setAssignments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [dues, setDues] = useState([]);

    // Display variable to generate event elements within the calendar day
    const displayAssignments = assignments.map((a,i) =>
    {
        let course = courses[i], due = dues[i];
        let timeInfo = props.generateTimeInfo(due),
        month = timeInfo[0], hour = timeInfo[1], min = timeInfo[2], ampm = timeInfo[3];
        let select = props.selected,
            selDay = (select.length == 0 ? -1 : Number(select.split("a")[0])),
            selAssign = (select.length == 0 ? -1 : Number(select.split("a")[1]));
        let listId = props.dayNum.toString()+"a"+i.toString(), currentInd = i,
            eventOnStr = ((props.dayNum === selDay && i === selAssign)? "false" : props.eventOn.toString());

        if (courseFilter == "" || course == courseFilter) {
            return (<li id={listId} key={i} className={course + " eventOn_" + eventOnStr}
                        onClick={(e) => eventOn(e.target.id, i)}>
                <div id={"d" + listId} className={props.day_of_week + " event_card_false text-start text-wrap"}>
                    <h5>{a}</h5>
                    <p className={"my-0 text-start fs-6"}>Course: {course}</p>
                    <p className={"mb-1 text-start fs-6"}>Due: {month + " " + props.day_of_month + ", " + hour + ":" + min + " " + ampm}</p>
                </div>
                <p id={"p" + listId} className={"to_do_text"} onClick={(e) => eventOn(e.target.id, currentInd)}>{a}</p>
            </li>);
        }
    });

    // Gets assignment information for the day from Firebase
    async function getAssignments(){
        const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks");
        const q = query(colRef, where("DMY","==", props.startArr));
        const querySnap = await getDocs(q);
        if (!querySnap.empty){
            let week =  querySnap.docs.map(doc => doc.id)[0].toString();
            await getAssignmentsForDay(week);
        }
        else{
            await getAssignmentsForDay("week_3","");
        }
    }

    // A helper function which takes in a selected week, then gets the assignment information for the day based on the input week
    async function getAssignmentsForDay(week){
        const assignRef =
            collection(db, "GSCalTestCol", "testCalData", "testWeeks",week,"days",props.day_of_week,"assignments");
        const assignQuery = query(assignRef, orderBy("due"));
        const querySnap = await getDocs(assignQuery);
        const assignArr = querySnap.docs.map(doc => doc.data().name),
            courseArr =  querySnap.docs.map(doc => doc.data().course),
            dueArr = querySnap.docs.map(doc => doc.data().due);

        setAssignments(assignArr);
        setCourses(courseArr);
        setDues(dueArr);
    }

    // Given a course filter, returns the number of assignment events to be displayed
    function filterCount(courseName){
        return (courseName != "" ? courses.filter(c => (c == courseName)).length : assignments.length);
    }

    // Enables display of event card for the selected event such that the selected event displays at full opacity
    // and unselected events are displayed at reduced opacity
    function eventOn(id,ind){;
        if (!props.eventOn){
            const timeInfo = props.generateTimeInfo(dues[ind]),
                month = timeInfo[0], hour = timeInfo[1], min = timeInfo[2], ampm = timeInfo[3];
            const idStr = (id.charAt(0) == "p" ? id.substring(1) : id)
            const selected_elem = document.getElementById("d"+idStr),
                title_elem = document.getElementById("aec_title_default"),
                course_elem = document.getElementById("aec_course"),
                due_elem = document.getElementById("aec_due");

            selected_elem.classList.remove("event_card_false");
            selected_elem.classList.add("event_card_true");
            title_elem.innerHTML = assignments[ind];
            course_elem.innerHTML = "Course: " + courses[ind];
            due_elem.innerHTML = "Due: " + month + " " + props.day_of_month + ", " + hour +  ":" + min + " " + ampm;

            props.enableEventOn(idStr);

        }
    }


    useEffect(() =>
        {
            getAssignments();
        }, []
    );

    return(
        <Col style={{width:"14.28%"}} className={"px-0 " + props.day_type}>
            <div className={"px-1 isToday_" + (date == props.day_of_month && currentMonth === props.month).toString()}>
                <p className={"my-0 mx-0 text-end cal_date"}>
                    {props.day_of_month}</p>
            </div>
            <div className={"cal_content "+ ((filterCount(courseFilter) > 3) && "many")}>
                <ul className={"assign_events_list"}>
                    {displayAssignments}
                </ul>
            </div>
        </Col>
    );
}

export default CalDay;