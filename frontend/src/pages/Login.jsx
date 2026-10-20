import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  return (
    <AuthForm
      title="Welcome back"
      subtitle="Log in as a patient, doctor or administrator."
      submitLabel="Log in"
      fields={[
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
        { name: 'password', label: 'Password', type: 'password', autoComplete: 'current-password' },
      ]}
      validate={(v) => {
        const e = {};
        if (!EMAIL.test(v.email)) e.email = 'Enter a valid email address.';
        if (!v.password) e.password = 'Enter your password.';
        return e;
      }}
      footer={<>New patient? <Link to="/register">Create an account</Link></>}
    />
  );
}
