import React from 'react';
import { Modal } from 'reactstrap';

const Popup = props => {
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      className="popup img-fluid"
      centered="true"
    >
      <a href={props.href}>x</a>
      <img src={props.image} alt="popup" />
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </Modal>
  );
};

export default Popup;
