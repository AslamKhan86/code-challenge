import { RouteComponentProps } from "@reach/router";
import React from "react";
import Button from "./Button";
import PageLayout from "./layout/PageLayout";

const Home: React.FC<RouteComponentProps> = () => (
  <PageLayout>
    <header />
    <main><Button primary to="/page1">New Request</Button></main>
    <footer />
  </PageLayout>
);

export default Home;
