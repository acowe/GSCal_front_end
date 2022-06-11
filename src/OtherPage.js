import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";
import './OtherPage.css'
import {useState, useEffect} from "react";

function OtherPage(){
    console.log("hi!");
    return(
        <div>
            <h1 className={"mt-5 mb-4"}>Heyo! This is blank page representing a new page to be integrated.</h1>
            <h3 className={"mb-4"}>(It's coming out soon, I promise!)</h3>
            <h4 className={"mb-3"}>In the meantime, try these links!</h4>
            <h5><a href={"/#/gscal_home"}>GSCal local home link (take you back to the local version of GSCal)</a></h5>
            <h5><a href={"https://acowe.github.io/gscal_front_end/"}>GSCal on gh-pages (takes you to the deployed version of GSCal)</a></h5>

        </div>
    )

}

export default OtherPage;