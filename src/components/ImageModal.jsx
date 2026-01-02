import { Modal, Image } from "react-bootstrap";

export default function ImageModal({ show, onHide, imagePath }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body className="text-center p-0">
        <Image src={imagePath} fluid />
      </Modal.Body>
    </Modal>
  );
}
