import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";
import './OtherPage.css'
import {useState, useEffect} from "react";
import './Home.css'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

async function getStuff(){
    const docRef = doc(db, "GSCalTestCol", "testCalData", "testWeeks","week_1","days","monday","assignments","a0");
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();

    if (docSnap.exists()) {
        console.log("Document data:", docData.course);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

async function getStuff2(){
    const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks","week_1","days","monday","assignments");
    const colSnap = await getDocs(colRef);

    colSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

}







function OtherPage(){

    const [courseLineUp, setCourseLineUp] = useState([]);
    const [timeArr, setTimeArr] = useState([]);

    async function getStuff3() {
        const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks","week_1","days","monday","assignments");
        const colSnap = await getDocs(colRef);
        const retArr = colSnap.docs.map(doc => doc.data().name);
    }

    async function getStuff4() {
        const colRef = collection(db, "GSCalTestCol", "testCalData", "testWeeks","week_1","days","monday","assignments");

        const q = query(colRef, orderBy("due"))
        const querySnap = await getDocs(q);
        const courseArr = querySnap.docs.map(doc => doc.data().name);
        const timeArr = querySnap.docs.map(doc => getStuff4helper(doc.data().course, doc.data().due));
        setCourseLineUp(courseArr);
        setTimeArr(timeArr);
    }

    function getStuff4helper(course, timestamp){
        console.log(course);
        console.log(timestamp);
        let time = new Date(timestamp.seconds*1000);
        console.log(time);
        return course + ", due at " + time.getHours().toString() + ":" + time.getMinutes().toString();
    }

    const displayNames = courseLineUp.map((n,index) => { return (<li key={index}>{n}</li>); });
    const displayTimes = timeArr.map((t,index) => { return (<li key={index}>{t}</li>); });

    console.log(timeArr);

    return(

        <div>
            <div className={"mb-5"}>
                <h1 className={"mt-5 mb-4"}>Heyo! This is blank page representing a new page to be integrated.</h1>
                <h3 className={"mb-4"}>(It's coming out soon, I promise!)</h3>
                <h4 className={"mb-3"}>In the meantime, try this link!</h4>
                <h5><a href={"https://acowe.github.io/gscal_front_end/#/home"}>GSCal on gh-pages (takes you to the deployed version of GSCal)</a></h5>
            </div>

           <div>
               <h3>Otherwise, we'll work with a database (Google Firebase) on this page!</h3>
               <Button className={"w-25 mb-1"} onClick={(e)=>{getStuff4()}}>Press me to see stuff!</Button>
               <h4>Courses:</h4>
               <ul>
                   {displayNames}
               </ul>
               <ul>
                   {displayTimes}
               </ul>


           </div>



        </div>
    )

}

export default OtherPage;