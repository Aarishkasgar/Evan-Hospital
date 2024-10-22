// import React from "react";

// const DoctorsCard = (props) => {
//   return (
//     <>
//       <div className="Doctor-Card">
//         <div className="DC-top">
//           <img src={props.img} />
//         </div>
//         <div className="DC-bottom">
//           <h2>{props.name}</h2>
//           <p>{props.destination}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorsCard;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../components/Doctors.css";

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
          <Typography gutterBottom variant="h4" component="div">
            {props.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            {props.destination}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
