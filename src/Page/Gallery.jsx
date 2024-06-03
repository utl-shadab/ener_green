import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import "../index.css";
import Action from '../components/Action/Action';
import axios from 'axios';

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [galleryItems, setGalleryItems] = useState([])

    // const images = [
    //     "https://bharatecofuels.com/media/media/file-data/1-800x800.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/2-800x800.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/3-800x800_CxFeNW7.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/5-800x800.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/4-800x800.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/2-800x800.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/1-800x800.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/8-800x800_dF9qQ0R.jpeg",
    //     "https://bharatecofuels.com/media/media/file-data/3-800x800_CxFeNW7.jpeg"
    // ];

    useEffect(() => {
        const fetchGalleryItems = async () => {
            const baseUrl = "http://3.111.159.31:3411/api/user"
            try {
                const response = await axios.get(`${baseUrl}/gallery/list`); // Replace with your API endpoint
                setGalleryItems(response.data.data);
                console.log(galleryItems)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGalleryItems();
    }, []);

    const toggleModal = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(!modalOpen);
    };

    return (
        <div className="our-memories-area section-padding2">
            <Container>
                <Row>
                  
                </Row>
                <Row>
                    {galleryItems.map((image, index) => (
                        <Col lg={4} md={4} key={index}>
                            <div className="memory" onClick={() => toggleModal(index)}>
                                <div className="memories-img">
                                    <img src={image?.galleryImg} alt={image?.title} />
                                    <div className="menorie-icon" href={image}>
                                        <i className="ti-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Action/>
            <div className="memories-shape d-none d-xl-block">
                <img src="assets/img/memories/left-img.png" className="memories-shape1" alt="" />
                <img src="assets/img/memories/right-img.png" className="memories-shape2" alt="" />
            </div>

            {/* Image Modal */}
            <Modal isOpen={modalOpen} toggle={() => toggleModal(selectedImageIndex)}>
                <ModalBody>
                    <img src={galleryItems[selectedImageIndex]} alt="" className="img-fluid" />
                </ModalBody>
            </Modal>
          
        </div>
    );
}

export default Gallery;
