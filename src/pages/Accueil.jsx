import { Container, Row, Col, Card } from "react-bootstrap";

export default function Accueil() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h1>Bienvenue sur BLOG-MISTRAL</h1>
          <p className="lead">
            Découvrez mes passions : l'aquarelle, la pétanque, et l'Auvergne.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        {/* Carte pour Aquarelle */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="/src/assets/aquarelle/DIVERS/MINIATURES/example.jpg"
              alt="Exemple d'aquarelle"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Aquarelle</Card.Title>
              <Card.Text>
                Explorez mes œuvres d'aquarelle, classées par thèmes : paysages,
                marines, et plus encore.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Carte pour Pétanque */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="/src/assets/petanque/CLUBS/MINIATURES/example.jpg"
              alt="Exemple de pétanque"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Pétanque</Card.Title>
              <Card.Text>
                Découvrez les clubs, les règles, et les résultats des
                compétitions de pétanque.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Carte pour Auvergne */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="/src/assets/auvergne/example.jpg"
              alt="Exemple de l'Auvergne"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Auvergne</Card.Title>
              <Card.Text>
                Plongez dans les paysages et les traditions de l'Auvergne.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
