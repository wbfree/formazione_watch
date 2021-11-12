import React from "react";
import Accordion from 'react-bootstrap/Accordion'

function Service(props) {

return (
    <Accordion defaultActiveKey="1">
    <Accordion.Item eventKey="0">
        <Accordion.Header>{props.desc}</Accordion.Header>
        <Accordion.Body>{props.stato}
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
)

}

export default Service;