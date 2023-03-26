import React from "react"
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigator from './side-navigator';

const SideNavigatorContainer = () => {
    return(
        <Container fluid={true}>
           <Row className="justify-content-md-center" style={{display: 'flex'}}>
                <Col xs={6} md={4} style={{padding: '5px'}}>
                    <Navigator/>
                </Col>
                <Col xs={12} md={8}>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}

export default SideNavigatorContainer
