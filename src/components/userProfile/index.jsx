import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../assets/images/avatar.jpeg';

export default function UserProfile() {
    return (
        <Card>
            <Row>
                <Col s={8} m={8} offset="s2 m2">
                    <img src={avatar} className="circle responsive-img" />
                </Col>
            </Row>
            
            <Row className="center-align">
                <h5>Victor Cláudio Deosdede Moura</h5>

                <p className="grey darken-2 white-text">
                    Engenheiro Civil | Analista de projetos | Desenvolvedor Web Front-End Júnior 
                    | HTML | CSS | JavaScript | React
                </p>                
            </Row>           
        </Card>
    );
}