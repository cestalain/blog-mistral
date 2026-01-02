import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import imagesData from "../data/images.json";
import "../styles/subnavbar.css";

export default function Aquarelle() {
  const { subCategory } = useParams();
  const [activeSubCategory, setActiveSubCategory] = useState(
    subCategory || "DIVERS"
  );
  const navigate = useNavigate();

  const handleSubCategoryClick = (category) => {
    setActiveSubCategory(category);
    navigate(`/aquarelle/${category}`);
  };

  return (
    <Container className="mt-4">
      <Nav variant="tabs" className="custom-subnavbar mb-3">
        {Object.keys(imagesData.aquarelle).map((category) => (
          <Nav.Item key={category}>
            <Nav.Link
              active={activeSubCategory === category}
              onClick={() => handleSubCategoryClick(category)}
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Row className="mt-4">
        <Col>
          {imagesData.aquarelle[activeSubCategory] &&
          imagesData.aquarelle[activeSubCategory].length > 0 ? (
            <Gallery
              category="aquarelle"
              subCategory={activeSubCategory}
              images={imagesData.aquarelle[activeSubCategory]}
            />
          ) : (
            <p>Aucune image disponible dans cette catégorie.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
