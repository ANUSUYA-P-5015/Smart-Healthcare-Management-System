import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="auth">
      <div className="auth__card">
        <h1>Page not found</h1>
        <p className="muted">The page you opened doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn--primary">Go to home</Link>
      </div>
    </div>
  );
}
