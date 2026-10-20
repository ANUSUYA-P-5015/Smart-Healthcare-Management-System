import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Doctors from './pages/Doctors.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import Appointments from './pages/Appointments.jsx';
import MedicalRecords from './pages/MedicalRecords.jsx';
import Profile from './pages/Profile.jsx';
import ListPage from './components/ui/ListPage.jsx';
import NotFound from './pages/NotFound.jsx';

// Stage 1: routes are open so the layouts can be reviewed.
// Stage 5 wraps each role section in a ProtectedRoute that checks the JWT and role.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/patient" element={<DashboardLayout role="patient" />}>
        <Route index element={<Dashboard />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="book" element={<BookAppointment />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/doctor" element={<DashboardLayout role="doctor" />}>
        <Route index element={<Dashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/admin" element={<DashboardLayout role="admin" />}>
        <Route index element={<Dashboard />} />
        <Route
          path="patients"
          element={<ListPage title="Patients" subtitle="View and manage patient accounts."
            searchPlaceholder="Search patients by name or email"
            columns={['Name', 'Email', 'Phone', 'Status', 'Actions']}
            emptyText="Patients will be listed here once the API is connected." />}
        />
        <Route
          path="doctors"
          element={<ListPage title="Doctors" subtitle="Add, update and deactivate doctor accounts."
            searchPlaceholder="Search doctors by name or specialization"
            columns={['Name', 'Specialization', 'Email', 'Status', 'Actions']}
            emptyText="Doctors will be listed here once the API is connected." />}
        />
        <Route path="appointments" element={<Appointments />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
