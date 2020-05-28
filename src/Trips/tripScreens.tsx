import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";

export function TripsLayout() {
  return (
    <div className="content">
      <h5>Trips</h5>
      {/* The outlet component is what tells the router where to render the child route match */}
      <Outlet />
    </div>
  );
}
export function TripsList() {
  return (
    <div>
      <h1>Places Lists</h1>
      <ul>
        <li>
          <Link to="texas-2020">Texas 2020</Link>
        </li>
        <li>
          <Link to="florida-2020">Florida 2020</Link>
        </li>
        <li>
          <Link to="portland-2019">Portland 2019</Link>
        </li>
        <li>
          <Link to="idaho-2019">Idaho 2019</Link>
        </li>
      </ul>
      <Link className="paper-btn btn-secondary" to="new">
        Add New Place
      </Link>
    </div>
  );
}
export function NewTrip() {
  return <h2>New Trip Form</h2>;
}
export function EditTrip() {
  let { id } = useParams();
  return <h2>Edit Trip: {id}</h2>;
}
export function TripDetails() {
  let { id } = useParams();
  return <h2>Trip Details: {id}</h2>;
}
