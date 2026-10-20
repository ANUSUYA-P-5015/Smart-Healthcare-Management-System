import PageHeader from '../components/ui/PageHeader.jsx';

export default function Profile() {
  return (
    <>
      <PageHeader title="Your profile" subtitle="Keep your contact details up to date." />
      <form className="panel form-grid" onSubmit={(e) => e.preventDefault()}>
        <div className="field"><label htmlFor="fullName">Full name</label><input id="fullName" /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" disabled /></div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" type="tel" /></div>
        <div className="field field--wide">
          <button className="btn btn--primary" type="submit" disabled>Save changes</button>
        </div>
      </form>
    </>
  );
}
