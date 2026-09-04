import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, updateBooking } from "../store/bookingsSlice";

function Bookings() {
  const bookings = useSelector((state) => state.bookings.items);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const editBooking = (booking) => { const nextDate = window.prompt("Enter the new travel date (YYYY-MM-DD):", booking.date); if (nextDate) dispatch(updateBooking({ ...booking, date: nextDate })); setEditingId(null); };
  return <section className="container page-section"><div className="page-header"><span className="eyebrow">YOUR TRIPS</span><h1>Bookings</h1><p>{bookings.length ? "Keep your confirmed getaways in one place. Edit or remove a plan whenever you need." : "Your confirmed trips will appear here."}</p></div>{!bookings.length ? <div className="empty-state"><span>✈</span><h2>No bookings yet</h2><p>Choose a destination and start planning your next adventure.</p></div> : <div className="booking-list">{bookings.map((booking) => <article className="booking-item" key={booking.id}><div className="booking-main"><span className="status">{booking.status}</span><h3>{booking.destinationName}</h3><p>{booking.name} · {booking.email}</p><p><strong>{booking.date}</strong> · {booking.travelers} traveler{booking.travelers !== 1 ? "s" : ""}</p></div><div className="card-actions"><button className="small-btn secondary" onClick={() => { setEditingId(booking.id); editBooking(booking); }}>{editingId === booking.id ? "Saving..." : "Edit date"}</button><button className="small-btn danger" onClick={() => dispatch(deleteBooking(booking.id))}>Delete</button></div></article>)}</div>}</section>;
}
export default Bookings;
