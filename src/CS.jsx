import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavComp from './NavComp'

const CS = () => {
    return (
        <div>
            <NavComp />

            <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                            <Card.Title>What Is Hacking? Types of Hacking & More</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                            <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxzndT7ojysZOty4mH1dSOyy6gXhYQwOPAQ&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>What is Cybersecurity? Its uses & the growing challenges in 2023!</Card.Title>
                    </Card.Body>
                </Card></Col>
            </Row>
            </Container>
        </div>
    )
}

export default CS