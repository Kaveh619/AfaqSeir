import React, { useEffect } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const Footer = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-footer', 'true');
    return () => {
      document.documentElement.removeAttribute('data-footer');
    };
  }, []);

  return (
    <footer>
      <div className="footer-content border-top pt-4">
        <Container>
          <Row>
            <Col>
              <p className="mb-0 text-muted text-center text-medium">Designed By Kaveh Chardin</p>
            </Col>
            {/* <Breadcrumb className="pt-0 pe-0 mb-0 float-end">
                <Breadcrumb.Item className="mb-0 text-medium" href="#/" linkProps={{ className: 'btn-link' }}>
                  Review
                </Breadcrumb.Item>
                <Breadcrumb.Item className="mb-0 text-medium" href="#/" linkProps={{ className: 'btn-link' }}>
                  Purchase
                </Breadcrumb.Item>
                <Breadcrumb.Item className="mb-0 text-medium" href="#/" linkProps={{ className: 'btn-link' }}>
                  Docs
                </Breadcrumb.Item>
              </Breadcrumb> */}
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
