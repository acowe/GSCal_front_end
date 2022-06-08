import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";
import './Home.css'

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

    const current = new Date();
    const date = current.getDate();
    const day = current.getDay();
    const current_wk_start = date - day + 1;
    const current_wk_end = current_wk_start + 6;
    const month_num = current.getMonth()+1;
    const month = num_to_month(month_num);
    const year = current.getFullYear();

    return (
        <div className={"gsc_div"}>
            <Container fluid className={"gscal"}>
                <Row className={"py-3 header"}>
                    <Col xs={2} sm={2} md={3} lg={2}>
                        <h5 className={"my-0 px-2 h_other_text"}>Hello Student!</h5>
                    </Col>
                    <Col xs={8} sm={8} md={6} lg={8} className={"d-flex justify-content-center align-middle"}>
                        <h5 className={"my-0 fw-bold text-light h_title"}>gradescope calendar</h5>
                    </Col>
                    <Col xs={2} sm={2} md={3} lg={2}>
                        <button className={"w-75 py-0 btn btn-light btn-block shadow-none border-0 rounded-pill h_other_text"}>
                            sign out
                        </button>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" className={"shadow-none h_dropdown"}>
                                <i className="fa-solid fa-bars"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/user">Hello student!</Dropdown.Item>
                                <Dropdown.Item className={"text-danger"}>Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                    </Col>
                </Row>

                <Row className={"contents"}>
                    <Col lg={8} className={"px-0 cal_col"}>
                        <div className={"mx-md-5 mx-3 my-3 my-md-4 my-lg-5 pb-2 cal_card"}>
                            <h1 className={"cal_head"}>{month + " " + year}</h1>
                            <Container className={"mx-sm-0 mt-2 mt-sm-3 mt-md-4 px-0 cal"}>
                                <Row className={"mx-0 cal_wk"}>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sun"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}>
                                            <ul>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>Guided Reading #2</div>
                                                </li>
                                                <li className={"course_2"}>
                                                    <div className={"to_do_text"}>HW #1</div>
                                                </li>
                                                <li className={"course_3"}>
                                                    <div className={"to_do_text"}>Recitation #2.1</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}>
                                            <ul>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>Homework #2</div>
                                                </li>
                                                <li className={"course_3"}>
                                                    <div className={"to_do_text"}>Recitation #2.2</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"} ></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"} >
                                            <ul>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>Guided reading #3</div>
                                                </li>
                                                <li className={"course_3"}>
                                                    <div className={"to_do_text"}>Recitation #2.2</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}>
                                            <ul>
                                                <li className={"course_2"}>
                                                    <div className={"to_do_text"}>HW #2</div>
                                                </li>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>Homework #3</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sat"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                </Row>
                                <Row className={"mx-0 cal_wk"}>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sun"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sat"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                </Row>

                                <Row className={"mx-0 cal_wk"}>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sun"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sat"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                </Row>

                                <Row className={"mx-0 cal_wk"}>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sun"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sat"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                </Row>

                                <Row className={"mx-0 cal_wk_last"}>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sun"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sat"}>
                                        <div className={"cal_content"}></div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className={"my-3 ps-0 cal_key"}>
                                <div className={"text-start mb-0 pe-0 key"}>
                                    <h4 className={"mb-0 key_text"}>View by class:</h4></div>
                                <div className={"courses"}>
                                    <ul className={"ps-0"}>
                                        <li className={"ms-0 px-4 py-2 course_1"}>
                                            Chem
                                        </li>
                                        <li className={"px-4 py-2 course_2"}>
                                            Math
                                        </li>
                                        <li className={"px-4 py-2 course_3"}>
                                            Phys
                                        </li>
                                        <li className={"px-4 py-2 course_1"}>
                                            CSCI
                                        </li>
                                        <li className={"px-4 py-2 course_2"}>
                                            Engr
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} className={"px-0 pt-lg-5 pt-md-0 list_col"}>
                        <div className={"ms-lg-0 me-lg-5 mx-md-5 mx-3 pb-2 task_card"}>
                            <div className={"task_card_contents"}>
                                <div className={"mx-4 mt-3 mb-2 task_day_entry"}>
                                    <h2>monday, {month_num+"/"+current_wk_start}</h2>
                                    <ul className={"task_day_list"}>
                                        <li>
                                            chemistry: 11:00am
                                        </li>
                                        <li>
                                            math: 10:00pm
                                        </li>
                                        <li>
                                            physics: 8:00am
                                        </li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mb-2 task_day_entry"}>
                                    <h2>tuesday, {month_num+"/"+(current_wk_start+1)}</h2>
                                    <ul className={"task_day_list"}>
                                        <li>
                                            chemistry: 5:00pm
                                        </li>
                                        <li>
                                            physics: 11:59pm
                                        </li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mb-2 task_day_entry"}>
                                    <h2>wednesday, {month_num+"/"+(current_wk_start+2)}</h2>
                                    <ul className={"none_type"}>
                                        <li>none!</li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mb-2 task_day_entry"}>
                                    <h2>thursday, {month_num+"/"+(current_wk_start+3)}</h2>
                                    <ul className={"task_day_list"}>
                                        <li>
                                            chemistry: 5:00pm
                                        </li>
                                        <li>
                                            physics: 11:59pm
                                        </li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mb-2 task_day_entry"}>
                                    <h2>friday, {month_num+"/"+(current_wk_start+4)}</h2>
                                    <ul className={"task_day_list"}>
                                        <li>
                                            chemistry: 5:00pm
                                        </li>
                                        <li>
                                            physics: 11:59pm
                                        </li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mb-2 task_day_entry"}>
                                    <h2>saturday, {month_num+"/"+(current_wk_start+5)}</h2>
                                    <ul className={"none_type"}>
                                        <li>none!</li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mt-3 mb-2 task_day_entry"}>
                                    <h2>sunday, {month_num+"/"+(current_wk_start+6)}</h2>
                                    <ul className={"none_type"}>
                                        <li>none!</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className={"mt-3 dl_button_group"}>
                            <button className={"mb-3 shadow-none btn btn-primary"}>download to Google Calendar</button>
                            <button className={"shadow-none btn btn-primary"}>download to Apple Calendar</button>
                        </div>

                    </Col>
                </Row>


            </Container>


        </div>
    );
};

export default Home;