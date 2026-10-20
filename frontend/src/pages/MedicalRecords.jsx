import { useOutletContext } from 'react-router-dom';
import ListPage from '../components/ui/ListPage.jsx';

export default function MedicalRecords() {
  const { role } = useOutletContext();
  return (
    <ListPage
      title={role === 'doctor' ? 'Patient records' : 'Medical records'}
      subtitle={role === 'doctor' ? 'Records you have written for your patients.' : 'Your diagnoses and prescriptions.'}
      columns={role === 'doctor' ? ['Patient', 'Date', 'Diagnosis', 'Prescription'] : ['Date', 'Doctor', 'Diagnosis', 'Prescription']}
      emptyText="Records will be listed here once the API is connected."
    />
  );
}
