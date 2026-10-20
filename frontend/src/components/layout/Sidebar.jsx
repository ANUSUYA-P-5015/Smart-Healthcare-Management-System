import { NavLink, Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { NAV_BY_ROLE } from '../../config/navigation.js';

export default function Sidebar({ role, open, onNavigate }) {
  const links = NAV_BY_ROLE[role] || [];

  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <Link to="/" className="brand brand--light">
        <FiHeart aria-hidden="true" /> <span>Smart Healthcare</span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} onClick={onNavigate} className="sidebar__link">
            <Icon aria-hidden="true" /> {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
