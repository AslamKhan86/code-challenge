import { RouteComponentProps } from "@reach/router";
import React from "react";
import Button from "../Button";
import PageLayout from "../layout/PageLayout";
import Stepper from "../Stepper";

const PageThree: React.FC<RouteComponentProps> = () => (
  <PageLayout>
    <header>
      <Stepper step={3} totalSteps={3} />
    </header>
    <main>
      <h1 className="success">Success!</h1>
      <Button to="/">Home</Button>
    </main>
    <footer />
  </PageLayout>
);

export default PageThree;
