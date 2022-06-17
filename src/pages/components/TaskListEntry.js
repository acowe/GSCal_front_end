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

function TaskListEntry(props){
    const weekOfArr = [props.current_wk_start, props.month_num, props.year];


    async function getDues(){
        const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks");
        const q = query(colRef, where("DMY","==", weekOfArr));
        const querySnap = await getDocs(q).then(console.log("success")).catch(e => console.log(e));
        const isEmptyQ = querySnap.empty;
        if (!isEmptyQ){
            let week =  querySnap.docs.map(doc => doc.id)[0].toString();
            await getDuesForDay(week);
        }
        else{
            await getDuesForDay("week_2");
        }
    }

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
    const [courses, setCourses] = useState([]);
    const [dueTimes, setDueTimes] = useState([]);
    const [error, setError] = useState(false)
    const listType = (courses.length <= 0? "none_type" : "task_day_list");
    const displayDue =
        dueTimes.map((t,i) =>
        {
            let time = new Date(t.seconds*1000);
            let isAm = (time.getHours() < 12 ? true : false)
            let hour = (isAm ? time.getHours() : time.getHours() - 12);
            let min = (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes());
            let ampm = (isAm ? "AM": "PM")
            return (<li>
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
            <h2 className={"fs-3"}>{props.dayOfWeek}</h2>
            <ul className={"mb-5 " + listType}>
                {!error && displayDue}
                {(courses.length <= 0) && <li>none!</li>}
            </ul>
            <div className={"tde_bottom"}> </div>
        </div>
    );
}

export default TaskListEntry;