import React from "react";
import styled from "styled-components";
import * as actions from "../store/actions";

type PartPercentProps = {className?: string, index: number, percent: number,setPartPercent: typeof actions.setPartPercent};

const PartPercent: React.FC<PartPercentProps> = ({ className, index, percent, setPartPercent }) => {
  const onChange = (e: React.SyntheticEvent<{value: string}>) => {
    setPartPercent(index, Number(e.currentTarget.value));
  };
  return (
    <div className={className}>
      <label>
        <span>Part {index + 1} %</span>
        <input
          data-testid="percent"
          type="number"
          value={percent}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const StyledPartPercent = styled(PartPercent)`
  label {
    display: flex;
    width: 25em;
    margin: 1em;
  }
  label > span {
    flex: 1;
  }
  label > input {
    flex: 2;
  }
`;

export default StyledPartPercent;
