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
            await getAssignmentsForDay("week_2");
        }
    }
    async function getAssignmentsForDay(week){
        const assignRef =
            collection(db, "GSCalTestCol", "testCalData", "testWeeks",week,"days",props.day_of_week,"assignments");
        const assignQuery = query(assignRef, orderBy("due"));
        const querySnap = await getDocs(assignQuery);
        let assignArr = querySnap.docs.map(doc => doc.data().name);
        let courseArr =  querySnap.docs.map(doc => doc.data().course);
        setNumAssign(assignArr.length);
        setAssignments(assignArr);
        setCourses(courseArr);
    }

    const [numAssign, setNumAssign] = useState(-1);
    const [assignments, setAssignments] = useState([]);
    const [courses, setCourses] = useState([]);
    const displayAssignments = assignments.map((a,i) =>
    {
        let course = courses[i];
        return (<li key={i} className={course}><div className={"to_do_text"}>{a}</div></li>);
    });

    useEffect(() =>
        {
            getAssignments();
        }, []
    );

    return(
        <Col style={{width:"14.28%"}} className={"px-0 " + props.day_type}>
            <p className={"mb-0 pe-1 text-end cal_date"}>{props.day_of_month}</p>
            <div className={"cal_content "+ ((numAssign > 3) && "many")}>
                <ul>
                    {displayAssignments}
                </ul>
            </div>
        </Col>
    );
}

export default CalDay;