import {Container, Row, Col, Button, Card} from "react-bootstrap";
import './Home.css'

function Home(){
    return (
        <div className={"gsc_div"}>
            <Container fluid className={"gscal"}>
                <Row className={"py-3 header"}>
                    <Col className={"col-2 text-left"}>
                        <h5 className={"my-0 px-0 h_other_text"}>Hello Student!</h5>
                    </Col>
                    <Col className={"col-8"}>
                        <h5 className={"my-0 fw-bold text-light"}>gradescope calendar</h5>
                    </Col>
                    <Col  className={"col-2"}>
                        <Button className={"w-75 py-0 bg-white btn-block border-0 rounded-pill h_other_text"}>sign out</Button>
                    </Col>
                </Row>

                <Row className={"contents"}>
                    <Col className={"col-8 px-0 cal_col"}>
                        <div className={"mx-5 my-5 pb-2 cal_card"}>
                            <h1 className={"fs-1 cal_head"}>month 20xx</h1>
                            <Container className={"mt-4 px-0 cal"}>
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
                                <div className={"text-start fs-4 mb-0 pe-0 key"}>
                                    View by class:</div>
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

                    <Col className={"px-0 pt-5 list_col"}>
                        <div className={"me-5 pb-2 task_card"}>
                            <div className={"task_card_contents"}>
                                <div className={"mx-4 mt-3 mb-2 task_day_entry"}>
                                    <h2>monday</h2>
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
                                    <h2>tuesday</h2>
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
                                    <h2>wednesday</h2>
                                    <ul className={"none_type"}>
                                        <li>none!</li>
                                    </ul>
                                </div>
                                <div className={"mx-4 mb-2 task_day_entry"}>
                                    <h2>thursday</h2>
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
                                    <h2>friday</h2>
                                    <ul className={"task_day_list"}>
                                        <li>
                                            chemistry: 5:00pm
                                        </li>
                                        <li>
                                            physics: 11:59pm
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className={"dl_button_group"}>
                            <Button className={"mb-3 dl_button"}>download to Google Calendar</Button>
                            <Button className={"dl_button"}>download to Apple Calendar</Button>
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