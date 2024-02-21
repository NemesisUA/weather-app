import TripForm from '../newTripForm/TripForm';
import './Modal.css';

function Modal({ setModal }) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-heading">
          <h2>Create trip</h2>
          <i onClick={() => setModal(false)}
            className="fa-solid fa-xmark"></i>
        </div>

        <TripForm setModal={setModal} />

      </div>
    </div>
  )
}

export default Modal