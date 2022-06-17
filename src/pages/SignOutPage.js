import {Container, Row, Col, Button, Card, Dropdown} from "react-bootstrap";

function SignOutPage(){
    return(
        <div>
            <div className={"m-5"}>
                <h1>You've been signed out!</h1>
                <p>(jk, not really. Hell, you were never signed on the first place cuz this is a fake site.
                    Hopefully, we'll have an actual login/logout page at some point tho so stay tuned!)</p>
            </div>
        </div>
    );
}

export default SignOutPage;