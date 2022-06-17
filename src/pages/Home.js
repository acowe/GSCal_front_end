import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";
import '../style/Home.css'
import NavHead from "./components/NavHead";
import Calendar from "./components/Calendar";
import TaskList from "./components/TaskList";

const current = new Date();
const date = current.getDate();
const day = current.getDay();
const current_wk_start = date - day;
const month_num = current.getMonth()+1;
const month = num_to_month(month_num);
const year = current.getFullYear();

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

function Home(){
    return (
        <div className={"gsc_div"}>
            <Container fluid className={"gscal"}>
                <NavHead/>
                <Row className={"contents"}>
                    <Col lg={8} className={"px-0 cal_col"}>
                        <Calendar month_num={month_num} year={year} current_wk_start={current_wk_start} num_to_month={num_to_month}/>
                        <a id="cal_dnload" href="test_cal.ics" download="test_calendar">
                            <button style={{width:"40%"}} className={"shadow-none btn btn-primary"}>
                                download calendar
                            </button>
                        </a>
                    </Col>
                    <Col lg={4} className={"px-0 pt-lg-4 pt-md-0 list_col"}>
                        <TaskList month_num={month_num} year={year} current_wk_start={current_wk_start}/>
                        <div className={"mt-lg-4 dl_button_group"}>
                            <a href={"/gscal_front_end/#/wk_overview"} className={"mb-3 shadow-none btn btn-primary"}>view weekly overview</a>
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