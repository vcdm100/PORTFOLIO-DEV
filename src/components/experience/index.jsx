import React from 'react';
import { Row, Col, Card } from 'react-materialize';

export default function Experience(props) {
    return (
        <Card>
            <Row>
                <Col s={2} m={2}>
                    <img src={props.avatar} className="circle responsive-img" />
                    {props.name}
                </Col>

                <Col s={10} m={10}>
                    <p>
                        <b>{props.title} em <span className="grey darken-1">{props.company}</span></b>
                    </p>

                    <br/>
                    
                    <p>
                        {props.description}
                    </p>
                </Col>
            </Row>
        </Card>
    );
}