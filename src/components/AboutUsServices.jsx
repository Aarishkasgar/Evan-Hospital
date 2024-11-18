import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../components/AboutUsServices.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AboutUsServices() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="AUS-title">Doctor's Consultation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="AUS-para">
            Need a consultation regarding your treatment or diagnosis? I’m
            always ready to provide you with professional healthcare consulting
            that is offered at an affordable price. At MedoX, you can expect
            nothing less than the ultimate level of care when it comes to
            treatments and consultations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="AUS-title">Diagnostic Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="AUS-para">
            Need a consultation regarding your treatment or diagnosis? I’m
            always ready to provide you with professional healthcare consulting
            that is offered at an affordable price. At MedoX, you can expect
            nothing less than the ultimate level of care when it comes to
            treatments and consultations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="AUS-title">Urgent Care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="AUS-para">
            Need a consultation regarding your treatment or diagnosis? I’m
            always ready to provide you with professional healthcare consulting
            that is offered at an affordable price. At MedoX, you can expect
            nothing less than the ultimate level of care when it comes to
            treatments and consultations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className="AUS-title">Primary Care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="AUS-para">
            Need a consultation regarding your treatment or diagnosis? I’m
            always ready to provide you with professional healthcare consulting
            that is offered at an affordable price. At MedoX, you can expect
            nothing less than the ultimate level of care when it comes to
            treatments and consultations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography className="AUS-title">
            Annual Wellness Physical
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="AUS-para">
            Need a consultation regarding your treatment or diagnosis? I’m
            always ready to provide you with professional healthcare consulting
            that is offered at an affordable price. At MedoX, you can expect
            nothing less than the ultimate level of care when it comes to
            treatments and consultations.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
