import { useOutletContext } from 'react-router-dom';
import ListPage from '../components/ui/ListPage.jsx';

const COLUMNS = {
  patient: ['Doctor', 'Date', 'Time', 'Reason', 'Status', 'Actions'],
  doctor: ['Patient', 'Date', 'Time', 'Reason', 'Status', 'Actions'],
  admin: ['Patient', 'Doctor', 'Date', 'Time', 'Status', 'Actions'],
};

export default function Appointments() {
  const { role } = useOutletContext();
  return (
    <ListPage
      title={role === 'patient' ? 'My appointments' : 'Appointments'}
      subtitle="Status is one of Pending, Confirmed, Completed or Cancelled."
      searchPlaceholder="Search appointments"
      columns={COLUMNS[role]}
      emptyText="Appointments will be listed here once the API is connected."
    />
  );
}
