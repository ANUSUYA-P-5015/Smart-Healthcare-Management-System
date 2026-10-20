import PageHeader from '../components/ui/PageHeader.jsx';

export default function BookAppointment() {
  return (
    <>
      <PageHeader title="Book an appointment" subtitle="Choose a doctor, a date and a time." />
      <form className="panel form-grid" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="doctor">Doctor</label>
          <select id="doctor" disabled><option>Doctors load from the API in Stage 5</option></select>
        </div>
        <div className="field">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" />
        </div>
        <div className="field">
          <label htmlFor="time">Time</label>
          <input id="time" type="time" step="1800" />
        </div>
        <div className="field field--wide">
          <label htmlFor="reason">Reason for visit</label>
          <textarea id="reason" rows="3" />
        </div>
        <div className="field--wide">
          <button className="btn btn--primary" type="submit" disabled>Request appointment</button>
        </div>
      </form>
    </>
  );
}
