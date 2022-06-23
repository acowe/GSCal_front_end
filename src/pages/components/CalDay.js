import {Col, Row} from "react-bootstrap";
import {initializeApp} from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore";
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

function num_to_month(n){
    switch (n) {
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
        default:
            return "month";
    }
}

function CalDay(props){
    async function getAssignments(){
        const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks");
        const q = query(colRef, where("DMY","==", props.startArr));
        const querySnap = await getDocs(q);
        const isEmptyQ = querySnap.empty;
        if (!isEmptyQ){
            let week =  querySnap.docs.map(doc => doc.id)[0].toString();
            await getAssignmentsForDay(week);
        }
        else{
            await getAssignmentsForDay("week_2","");
        }
    }
    async function getAssignmentsForDay(week){
        const assignRef =
            collection(db, "GSCalTestCol", "testCalData", "testWeeks",week,"days",props.day_of_week,"assignments");
        const assignQuery = query(assignRef, orderBy("due"));
        const querySnap = await getDocs(assignQuery);
        let assignArr = querySnap.docs.map(doc => doc.data().name);
        let courseArr =  querySnap.docs.map(doc => doc.data().course);
        let dueArr = querySnap.docs.map(doc => doc.data().due);
        setAssignments(assignArr);
        setCourses(courseArr);
        setDues(dueArr);
    }

    function filterCount(courseName){
        if (courseName != ""){
            let filteredCourses = courses.filter(c => (c == courseName));
            return filteredCourses.length;
        }
        else{
            return assignments.length;
        }
    }

    function eventOn(id, dayNum){;
        if (!props.eventOn){
            const element2 = document.getElementById("d"+id);
            element2.classList.remove("event_card_false");
            element2.classList.add("event_card_true");
            props.enableEventOn(id);
        }
    }

    function displayEC(){
       const element = document.getElementById()
    }


    const dayNum = props.dayNum;
    const courseFilter = props.filter;
    const [assignments, setAssignments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [dues, setDues] = useState([]);
    const displayAssignments = assignments.map((a,i) =>
    {
        let course = courses[i];
        let due = dues[i];
        let time = new Date(due.seconds*1000);
        let month = num_to_month(time.getMonth()+1);
        console.log(month);
        let isAm = (time.getHours() < 12)
        let hour = (isAm ? time.getHours() : time.getHours() - 12);
        let min = (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes());
        let ampm = (isAm ? "AM": "PM");
        let select = props.selected,
            selDay = (select.length == 0 ? -1 : Number(select.split("a")[0])),
            selAssign = (select.length == 0 ? -1 : Number(select.split("a")[1]));

        if (courseFilter == ""){
            if(dayNum == selDay && i == selAssign){
                return (<li id={dayNum.toString()+"a"+i} key={i} className={course + " eventOn_false"}
                            onClick={(e)=> eventOn(e.target.id,dayNum)} >
                    <div id={"d"+dayNum+"a"+i} className={"py-2 px-3 " + props.day_of_week + " event_card_false text-wrap"}>
                        <h5>{a}</h5>
                        <p className={"my-0 text-start fs-6"}>Course: {course}</p>
                        <p className={"text-start fs-6"}>Due: {month + " " + props.day_of_month + ", " + hour +  ":" + min + " " + ampm}</p>
                    </div>
                    <div className={"to_do_text"}>{a}</div>
                </li>);
            }
            else{
                return (<li id={dayNum.toString()+"a"+i} key={i} className={course + " eventOn_"+props.eventOn.toString()}
                            onClick={(e)=> eventOn(e.target.id,dayNum)} >
                    <div id={"d"+dayNum+"a"+i} className={"py-2 px-3 " + props.day_of_week + " event_card_false text-wrap"}>
                        <h5>{a}</h5>
                        <p className={"my-0 text-start fs-6"}>Course: {course}</p>
                        <p className={"text-start fs-6"}>Due: {month + " " + props.day_of_month + ", " + hour +  ":" + min + " " + ampm}</p>
                    </div>
                    <div className={"to_do_text"}>{a}</div>
                </li>);
            }
        }
        else{
            if (course == courseFilter){
                if(dayNum == selDay && i == selAssign){
                    return (<li id={dayNum.toString()+"a"+i} key={i} className={course + " eventOn_false"}
                                onClick={(e)=> eventOn(e.target.id,dayNum)} >
                        <div id={"d"+dayNum+"a"+i} className={"py-2 px-3 " + props.day_of_week + " event_card_false text-wrap"}>
                            <h5 >{a}</h5>
                            <p className={"my-0 text-start fs-6"}>Course: {course}</p>
                            <p className={"text-start fs-6"}>Due: {month + " " + props.day_of_month + ", " + hour +  ":" + min + " " + ampm}</p>
                        </div>
                        <div className={"to_do_text"}>{a}</div>
                    </li>);
                }
                else{
                    return (<li id={dayNum.toString()+"a"+i} key={i} className={course + " eventOn_" + props.eventOn.toString()}
                                onClick={(e)=> eventOn(e.target.id,dayNum)} >
                        <div id={"d"+dayNum+"a"+i} className={"py-2 px-3 " + props.day_of_week + " event_card_false text-wrap"}>
                            <h5 >{a}</h5>
                            <p className={"my-0 text-start fs-6"}>Course: {course}</p>
                            <p className={"text-start fs-6"}>Due: {month + " " + props.day_of_month + ", " + hour +  ":" + min + " " + ampm}</p>
                        </div>
                        <div className={"to_do_text"}>{a}</div>
                    </li>);
                }
            }
        }
    });

    useEffect(() =>
        {
            getAssignments();

        }, []
    );

    return(
        <Col style={{width:"14.28%"}} className={"px-0 " + props.day_type}>
            <p className={"mb-0 pe-1 text-end cal_date"}>{props.day_of_month}</p>
            <div className={"cal_content "+ ((filterCount(courseFilter) > 3) && "many")}>
                <ul>
                    {displayAssignments}
                </ul>
            </div>
        </Col>
    );
}

export default CalDay;