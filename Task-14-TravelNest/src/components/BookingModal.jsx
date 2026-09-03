import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../store/bookingsSlice";

const initialForm = {
  name: "",
  email: "",
  date: "",
  travelers: 1,
};

function reducer(state, action) {
  if (action.type === "update") return { ...state, [action.field]: action.value };
  if (action.type === "reset") return initialForm;
  return state;
}

function BookingModal({ destination, onClose }) {
  const dispatch = useDispatch();
  const [form, dispatchForm] = useReducer(reducer, initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!destination) return null;

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (!form.date) nextErrors.date = "Select a travel date.";
    if (Number(form.travelers) < 1) nextErrors.travelers = "At least one traveler is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    dispatch(addBooking({
      id: Date.now(),
      destinationId: destination.id,
      destinationName: destination.name,
      name: form.name.trim(),
      email: form.email.trim(),
      date: form.date,
      travelers: Number(form.travelers),
      status: "Confirmed",
    }));

    dispatchForm({ type: "reset" });
    onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form className="modal" onSubmit={submit}>
        <div className="modal-head">
          <div>
            <span className="eyebrow">Reserve your trip</span>
            <h2>{destination.name}</h2>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>×</button>
        </div>

        <div className="form-grid">
          <label>
            Full name
            <input value={form.name} onChange={(e) => dispatchForm({ type: "update", field: "name", value: e.target.value })} placeholder="Your name" />
            {errors.name && <small className="error">{errors.name}</small>}
          </label>

          <label>
            Email
            <input value={form.email} onChange={(e) => dispatchForm({ type: "update", field: "email", value: e.target.value })} placeholder="you@example.com" />
            {errors.email && <small className="error">{errors.email}</small>}
          </label>

          <label>
            Travel date
            <input type="date" value={form.date} min={new Date().toISOString().split("T")[0]} onChange={(e) => dispatchForm({ type: "update", field: "date", value: e.target.value })} />
            {errors.date && <small className="error">{errors.date}</small>}
          </label>

          <label>
            Travelers
            <input type="number" min="1" value={form.travelers} onChange={(e) => dispatchForm({ type: "update", field: "travelers", value: e.target.value })} />
            {errors.travelers && <small className="error">{errors.travelers}</small>}
          </label>
        </div>

        <div className="booking-summary">
          <span>Estimated package</span>
          <strong>₹{destination.price.toLocaleString("en-IN")} / person</strong>
        </div>

        <button className="btn primary full" type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingModal;
