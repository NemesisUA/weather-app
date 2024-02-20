import TripForm from '../newTripForm/TripForm';
import './Modal.css';

function Modal({ setModal }) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-heading">
          <h2>Create trip</h2>
          <i onClick={() => setModal(false)}
            class="fa-solid fa-xmark"></i>
        </div>

        <TripForm />

        <div className="modal-heading">
          <div className='modal-buttons'>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal