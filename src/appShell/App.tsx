import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useParams, Link } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import {
  PlacesList,
  NewPlace,
  PlaceDetails,
  EditPlace,
  PlacesLayout,
} from "../Places/placeScreens";
import { TripsList, NewTrip, TripDetails, EditTrip, TripsLayout } from "../Trips/tripScreens";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<HomeScreen />} />
        <Route path="/places" element={<PlacesLayout />}>
          <Route path="/" element={<PlacesList />} />
          <Route path="new" element={<NewPlace />} />
          <Route path=":id" element={<PlaceDetails />} />
          <Route path=":id/edit" element={<EditPlace />} />
        </Route>
        <Route path="/trips" element={<TripsLayout />}>
          <Route path="/" element={<TripsList />} />
          <Route path="new" element={<NewTrip />} />
          <Route path=":id" element={<TripDetails />} />
          <Route path=":id/edit" element={<EditTrip />} />
        </Route>
      </Routes>
    </Router>
  );
}

function HomeScreen() {
  return (
    <div className="content centered">
      <h1>Home</h1>
    </div>
  );
}
