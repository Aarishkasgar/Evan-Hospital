import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../components/DoctorsCard.css";

export default function DoctorsCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }} className="DrCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            className="drname-title"
          >
            {props.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#f9a61a" }}>
            {props.destination}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
