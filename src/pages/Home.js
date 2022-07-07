import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";
import {useState} from "react";
import '../style/Home.css'
import NavHead from "./components/NavHead";
import Calendar from "./components/Calendar";
import TaskList from "./components/TaskList";
import SideBar from "./components/SideBar";

// Variables to store information about the current day, week, month, and year
// Note: To manually change the current day for testing or debugging, you can enter your own year, numerical month, and day as
// new Date( year_num, month_num-1, date)

const current = new Date(),
      date = current.getDate(), day = current.getDay(),
      month_num = current.getMonth()+1, month = num_to_month(month_num),
      year = current.getFullYear(), current_wk_start = date - day;

//__________________________________General Use Functions______________________________________//

// Converts month number to month name
function num_to_month(n){
    switch (n) {
        case 1:
            return "january";
            break;
        case 2:
            return "february";
            break;
        case 3:
            return "march";
            break;
        case 4:
            return "april";
            break;
        case 5:
            return "may";
            break;
        case 6:
            return "june";
            break;
        case 7:
            return "july";
            break;
        case 8:
            return "august";
            break;
        case 9:
            return "september";
            break;
        case 10:
            return "october";
            break;
        case 11:
            return "november";
            break;
        case 12:
            return "december";
            break;
        default:
            return "month";
    }
}

// Given a timestamp object (w/ seconds), returns array with corresponding month, hour, minutes, and meridiem (AM,PM)
function generateTimeInfo(tStamp){
    const time = new Date(tStamp.seconds*1000);
    return [ num_to_month(time.getMonth()+1),
        (time.getHours() <= 12? time.getHours() : time.getHours() - 12),
        (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()),
        (time.getHours() < 12 ? "AM": "PM")]
}


// Generates calendar page display
function Home(){

//__________________________________Instance Variables______________________________________//

    // State variables to control display of elements on calendar
    const [sidebarOn, setSidebarOn] = useState(false);
    const [eventOn, setEventOn] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [eventOnFor, setEventOnFor] = useState(-1);
    const [dark, setDark] = useState(false);

//__________________________________Display-related Functions_________________________________//

    // Enable sidebar display
    function enableSidebar(){
        disableEventOn();
        setSidebarOn(true);
    }

    // Disables sidebar display
    function disableSidebar(){
        setSidebarOn(false);
    }

    // Toggles between light and dark mode displays (for larger display windows)
    function changeVisualMode(checked){
        if (checked){
            setDark(dark => true);
        }
        else{
            setDark(dark => false);
        }
    }

    // Toggles between light and dark mode displays (for smaller/mobile display windows)
    function changeVisualModeSmall(isDark){
        setDark(!isDark);
    }

    // Enables event card view mode (ie it makes the event card of a selected event visible)
    function enableEventOn(id){
        setSelectedEvent(id);
        setEventOn(true);

    }

    // Disables event card view mode (ie it makes the event card of a selected event invisible)
    function disableEventOn(){
        if(eventOn){
            let element2 = document.getElementById("d"+selectedEvent);
            const title_elem = document.getElementById("aec_title_default"),
                course_elem = document.getElementById("aec_course"),
                due_elem = document.getElementById("aec_due");
            element2.classList.remove("event_card_true");
            element2.classList.add("event_card_false");
            title_elem.innerText="Select an event to view its details";
            course_elem.innerText = "";
            due_elem.innerText = "";
            setEventOn(false);
        }
    }

    return (
        <div className={"gsc_div"}>
            <Container fluid className={"gscal sidebar_" + sidebarOn.toString() +" darkMode_" + dark.toString()}>
                <NavHead enableSidebar={enableSidebar} dark={dark} isDark={changeVisualModeSmall}/>
                <Row id={"eventOn_" + eventOn.toString()} className={"contents"} onClick={(e)=>disableEventOn()}>
                    <SideBar dark={dark} sidebarOn={sidebarOn} changeVisualMode={changeVisualMode}/>
                    <div className={"sidebar_" +  sidebarOn.toString() + " sidebar_other"} onClick={(e)=>disableSidebar()}>
                    </div>
                    <Col lg={8} className={"px-0 cal_col"}>
                        <Calendar month_num={month_num} year={year} current_wk_start={current_wk_start} num_to_month={num_to_month}
                                  eventOn={eventOn} enableEventOn={enableEventOn} eventOnFor={eventOnFor} selected={selectedEvent}
                                  generateTimeInfo={generateTimeInfo}/>
                        <div id={"alt_event_card"} className={"pt-3 pb-2 ps-3 pe-1 event_card_alt_true"}>
                            <h3 id={"aec_title_default"} className={"text-start"}>Select an event to view its details</h3>
                            <p id={"aec_course"} className={"text-start fs-5 mb-0"}></p>
                            <p id={"aec_due"} className={"text-start fs-5"}></p>
                        </div>
                        <a id="cal_dnload" href="test_cal.ics" download="test_calendar">
                            <button style={{width:"40%"}} className={"shadow-none btn btn-primary"}>
                                download calendar
                            </button>
                        </a>
                    </Col>

                    <Col lg={4} className={"px-0 pt-lg-4 pt-md-0 list_col"}>
                        <TaskList month_num={month_num} year={year} current_wk_start={current_wk_start} generateTimeInfo={generateTimeInfo}/>
                        <div className={"mt-lg-4 dl_button_group"}>
                            <a href={"/gscal_front_end/#/wk_overview"} className={"mb-3 shadow-none btn btn-primary"}>
                                view weekly overview</a>
                        </div>
                    </Col>
                </Row>
                <Row className={"cover_up"}>
                </Row>
            </Container>


        </div>
    );
};

export default Home;