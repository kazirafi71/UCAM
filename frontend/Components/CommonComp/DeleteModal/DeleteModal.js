import React from "react";
import Modal from "react-bootstrap/Modal";
import { deleteUser_action } from "../../../redux/deleteModal/deleteModalAction";
import { useDispatch } from "react-redux";

const DeleteModal = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    if (props.title == "user") {
      dispatch(deleteUser_action(props.userId));
    }
    props.onHide();
  };
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "20px 30px" }}>
          <b>Are you sure you want to delete?</b>
          <br />
          <div className="mt-3 text-center">
            <button onClick={props.onHide} className="commonBtnTwo__style me-3">
              Close
            </button>
            <button onClick={deleteHandler} className="commonBtn__style">
              Confirm
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteModal;
