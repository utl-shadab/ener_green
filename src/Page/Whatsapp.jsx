import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Whatsapp = () => {
  useEffect(() => {
    // Function to initialize the WhatsApp widget
    const initWhatsAppWidget = () => {
      const script = document.createElement('script');
      script.src = 'https://static.getbutton.io/widget-send-button/js/init.js';
      script.async = true;
      script.onload = () => {
        WhWidgetSendButton.init({
          whatsapp: '919756188580',
          call_to_action: 'Message us',
          position: 'right', // Position of the widget
        });
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    // Initialize the widget when the component mounts
    initWhatsAppWidget();
  }, []);

  return (
    <div className="terms-conditions">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4">WhatsApp</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Whatsapp;
