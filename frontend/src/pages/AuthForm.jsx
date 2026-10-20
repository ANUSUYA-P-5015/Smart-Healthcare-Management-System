import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

// Shared card for Login and Register. Validation runs in the browser now;
// the API call is added in Stage 5, and the server re-validates everything.
export default function AuthForm({ title, subtitle, fields, submitLabel, footer, validate }) {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, ''])));
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setNotice(Object.keys(found).length ? '' : 'Form is valid. Server sign-in is connected in Stage 5.');
  };

  return (
    <div className="auth">
      <form className="auth__card" onSubmit={onSubmit} noValidate>
        <Link to="/" className="brand"><FiHeart aria-hidden="true" /> <span>Smart Healthcare</span></Link>
        <h1>{title}</h1>
        <p className="muted">{subtitle}</p>

        {fields.map((f) => (
          <div className="field" key={f.name}>
            <label htmlFor={f.name}>{f.label}</label>
            <input
              id={f.name} name={f.name} type={f.type || 'text'} value={values[f.name]}
              onChange={onChange} autoComplete={f.autoComplete}
              aria-invalid={Boolean(errors[f.name])}
            />
            {errors[f.name] && <span className="field__error" role="alert">{errors[f.name]}</span>}
          </div>
        ))}

        {notice && <div className="alert alert--info" role="status">{notice}</div>}
        <button className="btn btn--primary btn--block" type="submit">{submitLabel}</button>
        <p className="auth__foot muted">{footer}</p>
      </form>
    </div>
  );
}
