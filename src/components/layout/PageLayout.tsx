import React from "react";
import styled from "styled-components";
import Button from "../Button";

type PageLayoutProps = {className?: string};

const Layout: React.FC<PageLayoutProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledLayout = styled(Layout)`
  display: grid;
  height: 60vh;
  padding: 2vw;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
  main.-scroll {
    justify-content: flex-start;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  footer > ${Button} {
    margin-left: 3vw;
  }
  h1.success {
    font-weight: normal;
    font-size: 4em;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default StyledLayout;
