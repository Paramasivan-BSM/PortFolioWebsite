import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import JSC from "../assets/CertificateImages/GuviCertification -JS.png";
import MetaFroentend from "../assets/CertificateImages/MetaFroentend.png";
import CSS from "../assets/CertificateImages/CSS.png";
import PromptEngineering from "../assets/CertificateImages/GuviCertificationChatGpt.png";
import SQL from "../assets/CertificateImages/SQL.png";
import JAVA from "../assets/CertificateImages/JAVA.png";
import Python from "../assets/CertificateImages/Python.png";
import Html from "../assets/CertificateImages/Html.png";
import JSSL from "../assets/CertificateImages/JSSL.png";
import SDT from "../assets/CertificateImages/SDT.jpg";
import AI from "../assets/CertificateImages/AiForIndia.jpg";
import AINSDC from "../assets/CertificateImages/AINSDC.jpg";

const steps = [
  {
    image: MetaFroentend,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4",
  },
  {
    image: JSC,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://example.com",
  },

  {
    image: CSS,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://api2.sololearn.com/v2/certificates/CT-J7AUDB1B/image/png",
  },
  {
    image: PromptEngineering,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://www.guvi.in/share-certificate/O427ClU8Fp76q18109",
  },
  {
    image: SQL,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://api2.sololearn.com/v2/certificates/CT-RTGPXDJH/image/png",
  },
  {
    image: JAVA,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://api2.sololearn.com/v2/certificates/CT-TPKW1SIJ/image/png",
  },
  {
    image: Python,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://www.guvi.in/share-certificate/07b172863g992inFY6",
  },
  {
    image: Html,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://api2.sololearn.com/v2/certificates/CT-QBHYLVGH/image/png",
  },
  {
    image: JSSL,
    label: "E-certificates",
    description: "Click here for more details",
    link: "https://api2.sololearn.com/v2/certificates/CT-OU63JEAX/image/png",
  },
  {
    image: SDT,
    label: "E-certificates",
    description: "Click here for more details",
    link: "#",
  },
  {
    image: AI,
    label: "E-certificates",
    description: "Click here for more details",
    link: "www.guvi.in/verify-certificate?id=H632kO11077749Y6Qo",
  },
  {
    image: AINSDC,
    label: "E-certificates",
    description: "Click here for more details",
    link: "www.guvi.in/verify-certificate?id=H632kO11077749Y6Qo",
  },
];

export default function ImageMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/* Render the label for the active step */}
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 2,
        }}
      >
        {/* Render the image for the active step */}
        <img
          src={steps[activeStep].image}
          alt={`E-certificates`}
          style={{ maxWidth: "50%", maxHeight: "100%", objectFit: "contain" }}
        />
        {/* Render the description as a button/link */}
        <Button
          className="mt-2"
          variant="outlined"
          href={steps[activeStep].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {steps[activeStep].description}
        </Button>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
