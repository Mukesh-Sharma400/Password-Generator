"use client";

import styled from "styled-components";
import { Tooltip } from "@mui/material";
import { useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CustomCheckbox from "./CustomCheckbox";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function Home() {
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(10);
  const passwordRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (isChecked) => {
    console.log("Checkbox checked:", isChecked);
  };

  function generateRandomPassword(length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(value);
    setPassword(newPassword);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCopyPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      handleSnackbarOpen("Password Copied to Clipboard!");
    }
  };

  return (
    <>
      <DisplayWrapper>
        <ContentWrapper>
          <Heading>Password Generator</Heading>
          <PasswordWrapper>
            <Password
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              placeholder="PTx1f5DaFX"
            />
            <Tooltip title="Click to Copy Password" placement="top">
              <CopyButton onClick={handleCopyPassword} />
            </Tooltip>
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
              min={5}
              max={15}
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
                  <StrengthValueBox filled={true} />
                  <StrengthValueBox filled={true} />
                  <StrengthValueBox filled={false} />
                  <StrengthValueBox filled={false} />
                </StrengthValueBoxes>
              </StrengthValue>
            </StrengthWrapper>
            <GenerateButton onClick={handleGeneratePassword}>
              Generate <RightArrow fontSize="inherit" />
            </GenerateButton>
          </GeneratorWrapper>
        </ContentWrapper>
      </DisplayWrapper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} // Adjust the duration as needed
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
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

const Password = styled.input`
  font-size: 20px;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
  font-family: "JetBrains-Mono-Extra-Bold";
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
  border: 2px solid ${(props) => (props.filled ? "#f8ce65" : "#95949c")};
  background-color: ${(props) => (props.filled ? "#f8ce65" : "transparent")};
`;

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
