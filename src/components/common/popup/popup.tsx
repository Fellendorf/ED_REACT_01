import { Modal, Button } from "react-bootstrap";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  show: boolean;
  title?: string;
  showHideHandler: () => void;
  confirmButton?: {
    title: string;
    onClick: () => void;
  };
};

export const Popup = ({
  children,
  show,
  title,
  showHideHandler,
  confirmButton,
}: Props) => {
  return (
    <Modal show={show} onHide={showHideHandler}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {confirmButton ? (
        <Modal.Footer>
          <Button variant="success" onClick={confirmButton.onClick}>
            {confirmButton.title}
          </Button>
        </Modal.Footer>
      ) : (
        ""
      )}
    </Modal>
  );
};

