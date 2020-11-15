import { Link, LinkProps } from "@reach/router";
import React from "react";
import styled from "styled-components";

type ButtonProps = {primary?: boolean, disabled?: boolean};

const Button: React.FC<ButtonProps & LinkProps<{}>> = ({ children, primary, disabled, className, to }) => {
  if (disabled) {
    return (
      <div className={className}>
        <div className="button -disabled">{children}</div>
      </div>
    );
  }
  return (
    <Link className={className} to={to}>
      <div className="button">{children}</div>
    </Link>
  );
};

const StyledButton = styled(Button)`
  text-decoration: none;
  .button {
    text-align: center;
    color: white;
    width: 10em;
    line-height: 2;
    background: ${(props) =>
      props.primary ? props.theme.colors.primary : props.theme.colors.fg};

  }
  .-disabled {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export default StyledButton;
