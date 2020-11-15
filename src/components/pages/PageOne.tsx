import { RouteComponentProps } from "@reach/router";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { AppState } from "../../store/types";
import Button from "../Button";
import PageLayout from "../layout/PageLayout";
import Stepper from "../Stepper";

type PageOneProps = {
  parts: number[],
  stepsCompleted: number,
  setParts: typeof actions.setParts,
};

const PageOne: React.FC<PageOneProps> = ({ parts, stepsCompleted, setParts }) => {
  const setNoOfParts = (e: React.SyntheticEvent<{value: string}>) => {
    const newParts = Array(Number(e.currentTarget.value)).fill(0);
    setParts(newParts);
  };
  return (
    <PageLayout>
      <header>
        <Stepper step={1} totalSteps={3} />
      </header>
      <main>
        <label>
          Number of parts:&nbsp;&nbsp;
          <input
            data-testid="number"
            type="number"
            value={parts.length}
            onChange={setNoOfParts}
          />
        </label>
      </main>
      <footer>
        <Button to="/">Previous</Button>
        <Button to="/page2" disabled={stepsCompleted < 1} primary>Next</Button>
      </footer>
    </PageLayout>
  );
};

export default connect(
  (state: AppState, ownProps: RouteComponentProps) => ({
    parts: state.parts,
    stepsCompleted: state.stepsCompleted,
  }),
  { setParts: actions.setParts },
)(PageOne);
