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
            Get expert advice on your treatment or diagnosis from our
            experienced medical professionals. At Evan Hospital, we are
            committed to providing top-quality healthcare consultation at
            affordable rates—ensuring the highest standards of care and
            personalized attention.
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
            Our state-of-the-art diagnostic center offers a wide range of
            accurate and reliable testing services to assist in early detection
            and effective treatment planning.
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
            Immediate medical attention for non-life-threatening emergencies.
            Our Urgent Care team ensures timely and effective treatment when you
            need it most.
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
            Your first point of contact for general health concerns. Our
            compassionate primary care providers focus on preventive care,
            chronic disease management, and overall wellness.
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
            Stay on top of your health with our comprehensive annual wellness
            exams, designed to detect early signs of health issues and promote
            long-term well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
