import React from "react";
import styled from "styled-components";

type StepProps = {active: boolean};

const Step = styled.div<StepProps>`
  background: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 4em;
  height: 4em;
  font-size: 1em;
  color: white;

  ${(props) => props.active ? `
  &:before {
    position: absolute;
    display: block;
    content: ' ';
    width: 20em;
    right: 100%;
    height: 5px;
    background: ${props.theme.colors.primary};
    z-index: -1;
  }
  ` : null}
`;

type StepperProps = {
  className?: string,
  step: number,
  totalSteps: number,
};

const Stepper: React.FC<StepperProps> = ({ className, step, totalSteps }) => (
  <div className={className}>
    {Array(totalSteps).fill(null).map((_, i) => <Step key={i} active={step >= i + 1}>{i + 1}</Step>)}
  </div>
);

const StyledStepper = styled(Stepper)`
  width: 20em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  &:before {
    left: 0;
    position: absolute;
    display: block;
    content: ' ';
    width: 20em;
    height: 5px;
    background: ${(props) => props.theme.colors.secondary};
    z-index: -1;
  }
`;

export default StyledStepper;
