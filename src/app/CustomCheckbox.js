import React, { useState } from "react";
import styled from "styled-components";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border: 2px solid ${(props) => (props.checked ? "#a9fab3" : "#a9fab3")};
  background-color: ${(props) => (props.checked ? "#a9fab3" : "transparent")};
  border-radius: 0px;
  margin-right: 10px;
  transition: all 0.2s;
  &:hover {
    border: 2px solid #a9fab3;
  }
`;

const CheckmarkIcon = styled(DoneSharpIcon)`
  display: ${(props) => (props.checked ? "block" : "none")};
  font-size: 13px;
  text-align: center;
  color: #24232b;
`;

const Label = styled.p`
  font-size: 13px;
`;

const CustomCheckbox = ({ checked, onChange, label }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={isChecked}>
        <CheckmarkIcon checked={isChecked} />
      </StyledCheckbox>
      <Label>{label}</Label>
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
