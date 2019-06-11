import React from "react";
import Layout, { BaseScreenProps } from "../components/appShell/Layout";

export default function ScreenOne({ location }: BaseScreenProps) {
  return (
    <Layout>
      <>
        <h1>Screen One</h1>
        <div>Welcome to Droopy Frontend!</div>
      </>
    </Layout>
  );
}
