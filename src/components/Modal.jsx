import { Modal, Image } from "react-bootstrap";

export default function ImageModal({ show, onHide, image }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Body className="text-center">
        <Image src={`/src/assets/${image}`} fluid />
      </Modal.Body>
    </Modal>
  );
}
