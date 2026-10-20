import {
  FiGrid, FiCalendar, FiUsers, FiUser, FiFileText, FiPlusCircle, FiActivity, FiClipboard,
} from 'react-icons/fi';

// Single source of truth for role-specific sidebar links.
export const NAV_BY_ROLE = {
  patient: [
    { to: '/patient', label: 'Dashboard', icon: FiGrid, end: true },
    { to: '/patient/doctors', label: 'Find a doctor', icon: FiUsers },
    { to: '/patient/book', label: 'Book appointment', icon: FiPlusCircle },
    { to: '/patient/appointments', label: 'My appointments', icon: FiCalendar },
    { to: '/patient/records', label: 'Medical records', icon: FiFileText },
    { to: '/patient/profile', label: 'Profile', icon: FiUser },
  ],
  doctor: [
    { to: '/doctor', label: 'Dashboard', icon: FiGrid, end: true },
    { to: '/doctor/appointments', label: 'Appointments', icon: FiCalendar },
    { to: '/doctor/records', label: 'Patient records', icon: FiClipboard },
    { to: '/doctor/profile', label: 'Profile', icon: FiUser },
  ],
  admin: [
    { to: '/admin', label: 'Dashboard', icon: FiGrid, end: true },
    { to: '/admin/patients', label: 'Patients', icon: FiUsers },
    { to: '/admin/doctors', label: 'Doctors', icon: FiActivity },
    { to: '/admin/appointments', label: 'Appointments', icon: FiCalendar },
    { to: '/admin/profile', label: 'Profile', icon: FiUser },
  ],
};

export const ROLE_LABEL = { patient: 'Patient', doctor: 'Doctor', admin: 'Administrator' };
