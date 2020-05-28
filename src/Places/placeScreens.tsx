import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";

export function PlacesLayout() {
  return (
    <div className="content">
      <h5>Places</h5>
      {/* The outlet component is what tells the router where to render the child route match */}
      <Outlet />
    </div>
  );
}
export function PlacesList() {
  return (
    <div>
      <h1>Places Lists</h1>
      <ul>
        <li>
          <Link to="grand-tetons">Grand Tetons, Wyoming</Link>
        </li>
        <li>
          <Link to="zion-np">Zion NP, Utah</Link>
        </li>
        <li>
          <Link to="boise-fry-company">Boise Fry Company, Idaho</Link>
        </li>
      </ul>
      <Link className="paper-btn btn-secondary" to="new">
        Add New Place
      </Link>
    </div>
  );
}
export function NewPlace() {
  return <h2>New Place Form</h2>;
}
export function EditPlace() {
  let { id } = useParams();
  return <h2>Edit Place: {id}</h2>;
}
export function PlaceDetails() {
  let { id } = useParams();
  return <h2>Place Details: {id}</h2>;
}
