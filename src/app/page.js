"use client";

import { useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CustomCheckbox from "./CustomCheckbox";

export default function Home() {
  const [value, setValue] = useState(7);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (isChecked) => {
    console.log("Checkbox checked:", isChecked);
  };

  return (
    <DisplayWrapper>
      <ContentWrapper>
        <Heading>Password Generator</Heading>
        <PasswordWrapper>
          <Password>PTx1f5DaFX</Password>
          <CopyButton />
        </PasswordWrapper>
        <GeneratorWrapper>
          <CharLengthWrapper>
            <CharLengthText>Character Length</CharLengthText>
            <CharLengthNum>{value}</CharLengthNum>
          </CharLengthWrapper>
          <StyledSlider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            step={1}
            min={0}
            max={10}
          />
          <CheckboxWrapper>
            <CustomCheckbox
              label="Include Uppercase Letters"
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              label="Include Lowercase Letters"
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              label="Include Numbers"
              onChange={handleCheckboxChange}
            />
            <CustomCheckbox
              label="Include Symbols"
              onChange={handleCheckboxChange}
            />
          </CheckboxWrapper>
          <StrengthWrapper>
            <StrengthText>Strength</StrengthText>
            <StrengthValue>
              <StrengthValueText>Medium</StrengthValueText>
              <StrengthValueBoxes>
                <StrengthValueBox />
                <StrengthValueBox />
                <StrengthValueBox />
                <StrengthValueBox />
              </StrengthValueBoxes>
            </StrengthValue>
          </StrengthWrapper>
          <GenerateButton>
            Generate <RightArrow fontSize="inherit" />
          </GenerateButton>
        </GeneratorWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "JetBrains-Mono-Extra-Bold";
`;

const ContentWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Heading = styled.p`
  color: #797688;
`;

const PasswordWrapper = styled.div`
  height: 50px;

  width: 100%;
  background: #24232b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Password = styled.p`
  font-size: 20px;
`;

const CopyButton = styled(ContentCopyRoundedIcon)`
  cursor: pointer;
`;

const GeneratorWrapper = styled.div`
  height: fit-content;
  width: 100%;
  background: #24232b;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const CharLengthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CharLengthText = styled.p`
  font-size: 13px;
  color: #c8c6cf;
`;

const CharLengthNum = styled.p`
  font-size: 20px;
  color: #a0ffaa;
`;

const StyledSlider = styled(Slider)({
  color: "#a9fab3",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#a9fab3",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #c8c6cf;
`;

const IncludeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
`;

const StrengthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #18171f;
  padding: 10px 20px;
  height: 40px;
  margin: 10px 0;
`;

const StrengthText = styled.p`
  text-transform: uppercase;
  font-size: 13px;
  color: #726f7f;
`;

const StrengthValue = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StrengthValueText = styled.p`
  text-transform: uppercase;
  color: #d0cfd4;
`;

const StrengthValueBoxes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StrengthValueBox = styled.div`
  height: 20px;
  width: 8px;
  border: 2px solid #95949c;
`;

const StyledRating = styled(Rating)({
  "& .MuiRating-iconEmpty": {
    color: "#95949c",
  },
  "& .MuiRating-iconFilled": {
    color: "#f8ce65",
  },
});

const GenerateButton = styled.button`
  outline: none;
  border: 2px solid #a0ffaa;
  color: #a0ffaa;
  background: transparent;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-family: "JetBrains-Mono-Extra-Bold";
  text-transform: uppercase;
  font-size: 13px;
  &:hover {
    color: #24232b;
    background: #a0ffaa;
    transition: all 0.2s ease-in-out;
  }
`;

const RightArrow = styled(ArrowForwardRoundedIcon)``;
