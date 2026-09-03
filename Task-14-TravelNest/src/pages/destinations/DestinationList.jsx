import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../../components/DestinationCard";
import BookingModal from "../../components/BookingModal";
import { destinations } from "../../data/destinations";

function DestinationList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialSearch);
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [bookingDestination, setBookingDestination] = useState(null);

  const categories = ["All", ...new Set(destinations.map((item) => item.category))];

  const filtered = useMemo(() => {
    return destinations.filter((item) => {
      const matchesQuery = `${item.name} ${item.country}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const updateUrl = (nextQuery, nextCategory) => {
    const params = {};
    if (nextQuery) params.search = nextQuery;
    if (nextCategory !== "All") params.category = nextCategory;
    setSearchParams(params);
  };

  return (
    <>
      <div className="filter-bar">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); updateUrl(e.target.value, category); }}
          placeholder="Search destinations..."
          aria-label="Search destinations"
        />
        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value); updateUrl(query, e.target.value); }}
          aria-label="Filter by category"
        >
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      <p className="result-count">{filtered.length} destination{filtered.length !== 1 ? "s" : ""} found</p>

      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} onBook={setBookingDestination} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>🌍</span>
          <h2>No destinations found</h2>
          <p>Try a different city or category.</p>
        </div>
      )}

      {bookingDestination && <BookingModal destination={bookingDestination} onClose={() => setBookingDestination(null)} />}
    </>
  );
}

export default DestinationList;
