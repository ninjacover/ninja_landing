import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const OurVision = () => {
  return (
    <>
      <div className='span section-title'>
        <span style={{ textAlign: 'center', color: '#F0702F', backgroundColor: 'transparent' }}> How it works ?</span>
        <h2 style={{ marginTop: '10px' }}>Beyond Insurance <br />We are here for you</h2>
      </div>

      <div className='img-cont'>
        <Container>
          <Row style={{ margin: 0, padding: 0 }}>
            <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
              <img src="/images/works1.png" alt="logo" style={{ width: '100%' }} />
            </Col>
            <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
              <img src="/images/works2.png" alt="logo" style={{ width: '100%' }} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OurVision;