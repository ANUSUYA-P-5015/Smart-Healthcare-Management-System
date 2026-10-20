import { FiSearch } from 'react-icons/fi';
import PageHeader from './PageHeader.jsx';
import EmptyState from './EmptyState.jsx';

// Reusable table page: header, search/filter bar, table, empty state.
// Rows are passed in by the caller; Stage 5 supplies them from the API.
export default function ListPage({ title, subtitle, columns, rows = [], searchPlaceholder, action, emptyText }) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} action={action} />
      <div className="panel">
        {searchPlaceholder && (
          <div className="toolbar">
            <label className="search">
              <FiSearch aria-hidden="true" />
              <input type="search" placeholder={searchPlaceholder} aria-label={searchPlaceholder} />
            </label>
          </div>
        )}
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && <EmptyState title="Nothing to show yet">{emptyText}</EmptyState>}
      </div>
    </>
  );
}
