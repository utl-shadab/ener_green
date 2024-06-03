import React from 'react'
import { Container, Row, Col,Button } from 'reactstrap';
import Instagram1 from "../../assets/instagram1.jpeg"
import Instagram2 from "../../assets/instagram2.jpeg"
import Instagram3 from "../../assets/instagram3.jpg"
const Instagram = () => {
  return (
    <div>
      <section>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center mb-lg-5 mb-3">Follow us on Instagram</h2>
          </Col>
        </Row>
        <Row className="row-gap-4 justify-content-center">
          <Col lg={4} xs={6}>
            <a href="https://scontent.cdninstagram.com/v/t51.29350-15/436868444_464016972770125_6503441276319145900_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=-XZby5k25VMQ7kNvgG_gzZ0&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM0MjIyNjI5MzQwMjc4MDM4OA%3D%3D.2-ccb7-5&oh=00_AYCn5_ZKf2Af8Kt_g_Yiri60BQcRRf1zVSLHvOwtSVH5qQ&oe=665D4636&_nc_sid=10d13b" target="_blank">
              <img src={Instagram1} alt="" className="img-fluid w-100" />
            </a>
          </Col>
          <Col lg={4} xs={6}> 
            <a href="https://scontent.cdninstagram.com/v/t51.29350-15/418614133_284293320961233_4147619597354656212_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=kL_eQ_uw6vYQ7kNvgHf8mfq&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODYwNTUyOTgwNDczMTk4Nw%3D%3D.2-ccb7-5&oh=00_AYAmW6AN7-d2o2u79akv5HDCP8yGGmDzr1JxadrX2dC81Q&oe=665D4CDF&_nc_sid=10d13b" target="_blank">
              <img src={Instagram2} alt="" className="img-fluid w-100" />
            </a>
          </Col>
          <Col lg={4} xs={6}>
            <a href="https://scontent.cdninstagram.com/v/t51.29350-15/418347856_767334501927778_8823075290494998011_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=8Qp-KzopNjkQ7kNvgGkHXH9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgyODUzMDg4NzYzOTQ4Mw%3D%3D.2-ccb7-5&oh=00_AYAoltEW68i2R09f0_4bfNK0geSiBd4s9eS1vDsf9czDWA&oe=665D4051&_nc_sid=10d13b" target="_blank">
              <img src={Instagram3} alt="" className="img-fluid w-100" />
            </a>
          </Col>
          <Col xs={12} className="text-center">
            <Button outline color="secondary" href="https://www.instagram.com/bharat_ecofuels/" target="_blank">
              See more on Instagram
            </Button>
          </Col>
        </Row>
      </Container>
    </section> 
    </div>
  )
}

export default Instagram
