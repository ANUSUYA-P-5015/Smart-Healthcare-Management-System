import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Public registration creates patients only. Doctors are added by an admin and
// the first admin comes from the seed script.
export default function Register() {
  return (
    <AuthForm
      title="Create your patient account"
      subtitle="You can book appointments and view your records after signing up."
      submitLabel="Create account"
      fields={[
        { name: 'fullName', label: 'Full name', autoComplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
        { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
        { name: 'password', label: 'Password (at least 8 characters)', type: 'password', autoComplete: 'new-password' },
      ]}
      validate={(v) => {
        const e = {};
        if (v.fullName.trim().length < 2) e.fullName = 'Enter your full name.';
        if (!EMAIL.test(v.email)) e.email = 'Enter a valid email address.';
        if (!/^[0-9+\-\s]{7,15}$/.test(v.phone)) e.phone = 'Enter a phone number with 7 to 15 digits.';
        if (v.password.length < 8) e.password = 'Use at least 8 characters.';
        return e;
      }}
      footer={<>Already registered? <Link to="/login">Log in</Link></>}
    />
  );
}
