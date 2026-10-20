import { useNavigate } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { ROLE_LABEL } from '../../config/navigation.js';

// Stage 1: user name is a placeholder. Stage 5 reads it from AuthContext and
// logout clears the stored JWT.
export default function Navbar({ role, onMenuClick }) {
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <button className="icon-btn topbar__menu" onClick={onMenuClick} aria-label="Toggle navigation">
        <FiMenu />
      </button>
      <div className="topbar__user">
        <span className="avatar" aria-hidden="true">{ROLE_LABEL[role][0]}</span>
        <div>
          <div className="topbar__name">Signed-in user</div>
          <div className="topbar__role">{ROLE_LABEL[role]}</div>
        </div>
        <button className="btn btn--ghost" onClick={() => navigate('/login')}>
          <FiLogOut aria-hidden="true" /> Log out
        </button>
      </div>
    </header>
  );
}
