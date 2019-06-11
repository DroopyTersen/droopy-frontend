import React from "react";
import Layout, { BaseScreenProps } from "../components/appShell/Layout";

export default function ScreenTwo({ id = "EMPTY" }: ScreenTwoProps) {
  return (
    <Layout>
      <>
        <h1>Screen Two</h1>
        <div>ID = {id}</div>
      </>
    </Layout>
  );
}

export interface ScreenTwoProps extends BaseScreenProps {
  id?: string;
}
