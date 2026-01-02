import { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ImageModal from "./ImageModal";

export default function Gallery({ category, subCategory, images }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    const imagePath = `/src/assets/${category}/${subCategory}/${image.ORIGINAL}`;
    setSelectedImage(imagePath);
    setShowModal(true);
  };

  return (
    <>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} md={4} lg={3} className="mb-4">
            <Image
              src={`/src/assets/${category}/${subCategory}/${image.MINIATURES}`}
              thumbnail
              onClick={() => handleImageClick(image)}
              style={{ cursor: "pointer" }}
            />
          </Col>
        ))}
      </Row>
      <ImageModal
        show={showModal}
        onHide={() => setShowModal(false)}
        imagePath={selectedImage}
      />
    </>
  );
}
