import {Container, Row, Col, Dropdown} from "react-bootstrap";

function NavHead(){
    return(
        <Row className={"py-4 header"}>
            <Col xs={2} sm={2} md={3} lg={2} className={"h_other"}>
                <h5 className={"my-0 px-2 h_other_text"}>Hello Student!</h5>
            </Col>
            <Col xs={8} sm={8} md={6} lg={8} className={"d-flex justify-content-center align-middle"}>
                <h5 className={"my-0 fs-4 fw-bold text-light h_title"}>gradescope calendar</h5>
            </Col>
            <Col xs={2} sm={2} md={3} lg={2} className={"h_other"}>
                <a href={"/gscal_front_end/#/sign_out"} className={"w-75 py-0 btn btn-light btn-block shadow-none border-0 rounded-pill h_other_text"}>
                    sign out
                </a>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className={"shadow-none h_dropdown"}>
                        <i className="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/user">Hello student!</Dropdown.Item>
                        <Dropdown.Item className={"text-danger"} href={"/gscal_front_end/#/sign_out"}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    );
}

export default NavHead;