import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useLayout from 'hooks/useLayout';
import Footer from 'layout/footer/Footer';
import Nav from 'layout/nav/Nav';
import RightButtons from 'layout/right-buttons/RightButtons';
import SidebarMenu from 'layout/nav/sidebar-menu/SidebarMenu';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  useLayout();

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
    }, [pathname]);
  const { currentLang } = useSelector((state) => state.lang);

  const { direction } = currentLang;
  return (
    <>
      <div dir={direction}>
        <Nav />
        <main>
          <Container>
            <Row className="h-100">
              <SidebarMenu />
              <Col className="h-100" id="contentArea">
                {children}
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
        {/* <RightButtons /> */}
      </div>
    </>
  );
};

export default React.memo(Layout);