import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";
import './Home.css'
import {useState, useEffect} from "react";

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

function Home(props){

    const current = new Date();
    const date = current.getDate();
    const day = current.getDay();
    const current_wk_start = date - day + 1;
    const current_wk_end = current_wk_start + 6;
    const month_num = current.getMonth()+1;
    const month = num_to_month(month_num);
    const year = current.getFullYear();


    function display_cal_event(d_id) {
        const d_elements = document.querySelectorAll("#"+ d_id + ".cal_content ul li"),
            listLen = d_elements.length;
        if (listLen > 3) {
            document.getElementById(d_id).classList.add("many");
        }
    }

    function pdfToDownload(){
        let rand = Math.floor(Math.random() * 6),
        element = document.getElementById("cal_dnload");
        console.log(rand);
        if (rand === 5){
            element.href = "Matt.pdf";
        }
        else{
            element.href = "hi.pdf";
        }
    }

    useEffect(() =>
        {
            let i = 1;
            for(i;i<8;i++){
                let idstr = "d"+i;
                display_cal_event(idstr);
            }
            pdfToDownload();
        }
    );



    return (
        <div className={"gsc_div"}>
            <Container fluid className={"gscal"}>
                <Row className={"py-4 header"}>
                    <Col xs={2} sm={2} md={3} lg={2} className={"h_other"}>
                        <h5 className={"my-0 px-2 h_other_text"}>Hello Student!</h5>
                    </Col>
                    <Col xs={8} sm={8} md={6} lg={8} className={"d-flex justify-content-center align-middle"}>
                        <h5 className={"my-0 fs-4 fw-bold text-light h_title"}>gradescope calendar</h5>
                    </Col>
                    <Col xs={2} sm={2} md={3} lg={2} className={"h_other"}>
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
                        <div className={"mx-md-5 mx-3 my-3 my-md-4 mt-lg-4 mb-lg-3 pb-2 pb-lg-4 pb-xl-3 cal_card"}>
                            <h1 className={"cal_head"}>{month + " " + year}</h1>
                            <Row className={"mx-0 mt-2 mt-sm-3 mt-md-3 px-0 cal_days"}>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>sunday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>sun</p>
                                </Col>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>monday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>mon</p>
                                </Col>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>tuesday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>tues</p>
                                </Col>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>wednesday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>wed</p>
                                </Col>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>thursday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>thu</p>
                                </Col>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>friday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>fri</p>
                                </Col>
                                <Col style={{width:"14.28%"}} className={"px-0"}>
                                    <p className={"my-0 px-1 fs-6 dow_full"}>saturday</p>
                                    <p className={"my-0 px-1 fs-6 dow_short"}>sat</p>
                                </Col>
                            </Row>
                            <Container className={"mx-sm-0 px-0 cal"}>
                                <Row className={"mx-0 cal_wk_fst"}>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sun"}>
                                        <div id="d1" className={"cal_content"}></div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div id="d2" className={"cal_content"}>
                                            <ul>
                                                <li className={"course_3"}>
                                                    <div className={"to_do_text"}>Homework 6</div>
                                                </li>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>9.1 Preclass</div>
                                                </li>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>Quiz 3</div>
                                                </li>
                                                <li className={"course_4"}>
                                                    <div className={"to_do_text"}>Homework #3 Written: rateSeqChange.txt</div>
                                                </li>
                                                <li className={"course_4"}>
                                                    <div className={"to_do_text"}>Homework #3 Code: dist.py</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div id="d3" className={"cal_content"}>
                                            <ul>
                                                <li className={"course_2"}>
                                                    <div className={"to_do_text"}>Homework 3A</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div id="d4" className={"cal_content"} >
                                            <ul>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>9.1 Preclass</div>
                                                </li>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>HW3</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div id="d5" className={"cal_content"} >
                                            <ul>
                                                <li className={"course_3"}>
                                                    <div className={"to_do_text"}>Recitation #5</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_wkday"}>
                                        <div id={"d6"} className={"cal_content"}>
                                            <ul>
                                                <li className={"course_1"}>
                                                    <div className={"to_do_text"}>9.2 Preclass</div>
                                                </li>
                                                <li className={"course_2"}>
                                                    <div className={"to_do_text"}>Homework 3B</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col style={{width:"14.28%"}} className={"px-0 cal_sat"}>
                                        <div id={"d7"} className={"cal_content"}></div>
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
                                        <li className={"ms-3 me-3 py-2 course_1"}>
                                            chem
                                        </li>
                                        <li className={"ms-2 me-3 py-2 course_2"}>
                                            math
                                        </li>
                                        <li className={"ms-2 me-3 py-2 course_3"}>
                                            phys
                                        </li>
                                        <li className={"ms-2 me-3 py-2 course_4"}>
                                            bio
                                        </li>
                                        <li className={"ms-2 me-3 py-2 course_5"}>
                                            csci
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a id="cal_dnload" href="hi.pdf" download="hi">
                            <button style={{width:"40%"}} className={"shadow-none btn btn-primary"}>
                                download calendar
                            </button>
                        </a>
                    </Col>

                    <Col lg={4} className={"px-0 pt-lg-4 pt-md-0 list_col"}>
                        <div className={"ms-lg-0 me-lg-5 mx-md-5 mx-3 pb-2 mt-4 mt-lg-0 mb-lg-0 task_card"}>
                            <div className={"task_card_contents"}>
                                <div className={"ms-3 me-2 mt-1 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>monday</h2>
                                    <ul className={"mb-5 task_day_list"}>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Phys 24</p>
                                                <span className={"float-start"}>
                                                    Sec 1-8 SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    8:00 AM
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Chemistry</p>
                                                <span className={"float-start"}>
                                                    23B SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    10:00 AM
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Chemistry</p>
                                                <span className={"float-start"}>
                                                    23B SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    10:00 AM
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>Bio 52</p>
                                                <span className={"float-start"}>
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    11:59 PM
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>Bio 52</p>
                                                <span className={"float-start"}>

                                                </span>
                                                <span className={"float-end list_time"}>
                                                    11:59 PM
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={"tde_bottom"}> </div>
                                </div>
                                <div className={"ms-3 me-2 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>tuesday</h2>
                                    <ul className={"mb-5 task_day_list"}>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Math 73</p>
                                                <span className={"float-start"}>
                                                    SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    10:00 PM
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={"tde_bottom"}> </div>
                                </div>
                                <div className={"ms-3 me-2 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>wednesday</h2>
                                    <ul className={"mb-5 task_day_list"}>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Chemistry</p>
                                                <span className={"float-start"}>
                                                    23B SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    10:00 AM
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Chemistry</p>
                                                <span className={"float-start"}>
                                                    23B SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    5:00 PM
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={"tde_bottom"}> </div>
                                </div>
                                <div className={"ms-3 me-2 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>thursday</h2>
                                    <ul className={"mb-5 task_day_list"}>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Phys 24</p>
                                                <span className={"float-start"}>
                                                    Sec 1-8 SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    8:00 AM
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={"tde_bottom"}> </div>
                                </div>
                                <div className={"ms-3 me-2 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>friday</h2>
                                    <ul className={"mb-5 task_day_list"}>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Chemistry</p>
                                                <span className={"float-start"}>
                                                    23B SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    10:00 AM
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"list_content"}>
                                                <p className={"my-0"}>HMC Math 73</p>
                                                <span className={"float-start"}>
                                                    SP22
                                                </span>
                                                <span className={"float-end list_time"}>
                                                    10:00 PM
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={"tde_bottom"}> </div>
                                </div>
                                <div className={"ms-3 me-2 me-2 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>saturday</h2>
                                    <ul className={"mb-5 none_type"}>
                                        <li>none!</li>
                                    </ul>
                                    <div className={"tde_bottom"}> </div>
                                </div>
                                <div className={"ms-3 me-2 mt-3 mb-2 task_day_entry"}>
                                    <h2 className={"fs-3"}>sunday</h2>
                                    <ul className={"mb-5 none_type"}>
                                        <li>none!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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