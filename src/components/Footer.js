import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <footer className="mt-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            Justin Nguyen-Galante
                        </Col>
                        <Col className="p-0 d-flex justify-content-end" md={3}>
                            Portfolio V1
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer
