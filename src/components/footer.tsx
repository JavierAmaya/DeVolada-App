import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Footer:React.FC = () => (
    <footer id="footer">
      <Container>
        <Row>
          <div className="col-md-12">
            <div className="copyright">
              &copy; Copyright <strong>ProOnliPc Theme</strong>. All Rights Reserved
            </div>
            <div className="credits">
          
              Templates by <a href="https://www.youtube.com/channel/UCDH0DJaVLkCDtl_YN9hhByw?view_as=subscriber">ProOnliPc</a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
)
  
export default Footer;