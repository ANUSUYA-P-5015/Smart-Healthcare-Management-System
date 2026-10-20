// `value` stays null until the real API call resolves (wired up in Stage 5).
export default function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="stat">
      <span className="stat__icon"><Icon aria-hidden="true" /></span>
      <div>
        <div className="stat__value">{value ?? '–'}</div>
        <div className="stat__label">{label}</div>
      </div>
    </div>
  );
}
