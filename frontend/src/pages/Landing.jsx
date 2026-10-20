import { Link } from 'react-router-dom';
import { FiHeart, FiCalendar, FiFileText, FiShield } from 'react-icons/fi';

const FEATURES = [
  { icon: FiCalendar, title: 'Book in minutes', text: 'Pick a doctor, a date and a time. Conflicting slots are blocked automatically.' },
  { icon: FiFileText, title: 'Records in one place', text: 'Diagnoses and prescriptions are saved to the patient’s own record.' },
  { icon: FiShield, title: 'Access by role', text: 'Patients, doctors and administrators each see only what they need.' },
];

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing__nav">
        <Link to="/" className="brand"><FiHeart aria-hidden="true" /> <span>Smart Healthcare</span></Link>
        <div className="landing__actions">
          <Link to="/login" className="btn btn--ghost">Log in</Link>
          <Link to="/register" className="btn btn--primary">Create account</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero__text">
          <h1>One place for appointments, doctors and medical records.</h1>
          <p>
            Smart Healthcare helps a hospital keep patient information, doctor schedules and
            visit history organised, so patients wait less and staff search less.
          </p>
          <div className="hero__cta">
            <Link to="/register" className="btn btn--primary btn--lg">Register as a patient</Link>
            <Link to="/login" className="btn btn--outline btn--lg">Log in</Link>
          </div>
        </div>
        <div className="hero__card" aria-hidden="true">
          <div className="hero__row"><span>Appointment request</span><b>Pending</b></div>
          <div className="hero__row"><span>Confirmed by doctor</span><b>Confirmed</b></div>
          <div className="hero__row"><span>Visit notes and prescription</span><b>Completed</b></div>
        </div>
      </section>

      <section className="features">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <article key={title} className="feature">
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p className="muted">{text}</p>
          </article>
        ))}
      </section>

      <footer className="landing__foot muted">Demo project. All sample data is synthetic.</footer>
    </div>
  );
}
