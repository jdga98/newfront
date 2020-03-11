import React from "react";
import { Modal } from "semantic-ui-react";

const Modals = ({ trigger, title, content }) => {
  return (
    <Modal trigger={trigger} title={title} content={content}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
    </Modal>
  );
};

export default Modals;
