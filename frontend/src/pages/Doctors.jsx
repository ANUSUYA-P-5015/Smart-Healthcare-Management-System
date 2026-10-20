import ListPage from '../components/ui/ListPage.jsx';

export default function Doctors() {
  return (
    <ListPage
      title="Find a doctor"
      subtitle="Browse doctors by name or specialization."
      searchPlaceholder="Search by doctor or specialization"
      columns={['Doctor', 'Specialization', 'Experience', 'Action']}
      emptyText="Doctors will be listed here once the API is connected."
    />
  );
}
