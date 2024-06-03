import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4">Terms & Conditions</h1>
            <p>
              Insert your terms and conditions content here. You can use paragraphs, lists, headings, or any other HTML elements to structure your content as needed.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada quam id tellus volutpat, eu fringilla justo ultrices. Integer volutpat nisi eget ipsum facilisis, vitae blandit nunc lacinia. In commodo tempor felis, sit amet vestibulum ligula eleifend sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            {/* Add more content as needed */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsConditions;
