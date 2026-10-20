import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';

// Shared shell for every authenticated area: sidebar + top bar + page content.
export default function DashboardLayout({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shell">
      <Sidebar role={role} open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      <div className="shell__main">
        <Navbar role={role} onMenuClick={() => setMenuOpen((v) => !v)} />
        <main className="content">
          <Outlet context={{ role }} />
        </main>
      </div>
    </div>
  );
}
