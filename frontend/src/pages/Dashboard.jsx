import { useOutletContext } from 'react-router-dom';
import { FiCalendar, FiClock, FiCheckCircle, FiFileText, FiUsers, FiActivity } from 'react-icons/fi';
import PageHeader from '../components/ui/PageHeader.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';

// Cards are defined per role. Values stay empty until Stage 5 loads real counts.
const CARDS = {
  patient: [
    { label: 'Upcoming appointments', icon: FiCalendar },
    { label: 'Awaiting confirmation', icon: FiClock },
    { label: 'Completed visits', icon: FiCheckCircle },
    { label: 'Medical records', icon: FiFileText },
  ],
  doctor: [
    { label: 'Today’s appointments', icon: FiCalendar },
    { label: 'Pending requests', icon: FiClock },
    { label: 'Completed visits', icon: FiCheckCircle },
    { label: 'Patients seen', icon: FiUsers },
  ],
  admin: [
    { label: 'Patients', icon: FiUsers },
    { label: 'Doctors', icon: FiActivity },
    { label: 'Appointments', icon: FiCalendar },
    { label: 'Pending requests', icon: FiClock },
  ],
};

const TITLE = { patient: 'Patient dashboard', doctor: 'Doctor dashboard', admin: 'Admin dashboard' };

export default function Dashboard() {
  const { role } = useOutletContext();
  return (
    <>
      <PageHeader title={TITLE[role]} subtitle="A summary of your activity." />
      <div className="stats">
        {CARDS[role].map((c) => <StatCard key={c.label} {...c} />)}
      </div>
      <div className="panel">
        <h2>Recent appointments</h2>
        <EmptyState title="No data loaded">Live figures and appointments appear here once the API is connected.</EmptyState>
      </div>
    </>
  );
}
