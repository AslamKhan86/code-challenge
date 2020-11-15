import { RouteComponentProps } from "@reach/router";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { AppState } from "../../store/types";
import Button from "../Button";
import PageLayout from "../layout/PageLayout";
import PartPercent from "../PartPercent";
import Stepper from "../Stepper";

type PageTwoProps = {
  parts: number[],
  stepsCompleted: number,
  setPartPercent: typeof actions.setPartPercent,
};

const PageTwo: React.FC<PageTwoProps> = ({ parts, stepsCompleted, setPartPercent }) => {
  return (
    <PageLayout>
      <header>
        <Stepper step={2} totalSteps={3} />
      </header>
      <main className="-scroll">
        {parts.map((percent, i) => (
          <PartPercent
            key={i}
            index={i}
            percent={percent}
            setPartPercent={setPartPercent}
          />
        ))}
      </main>
      <footer>
        <Button to="/page1">Previous</Button>
        <Button to="/page3" disabled={stepsCompleted < 2} primary>Next</Button>
      </footer>
    </PageLayout>
  );
};

export default connect(
  (state: AppState, ownProps: RouteComponentProps) => ({
    parts: state.parts,
    stepsCompleted: state.stepsCompleted,
  }),
  { setPartPercent: actions.setPartPercent },
)(PageTwo);
