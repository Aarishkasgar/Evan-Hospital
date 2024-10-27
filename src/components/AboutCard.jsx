import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../components/AboutCard.css";

export default function AboutCard() {
  return (
    <Card className="AboutCard-container">
      <CardContent className="AboutCard-inner-container">
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          About Us
        </Typography>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 17 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint
          repudiandae excepturi quod voluptatibus, asperiores eius molestiae
          commodi dolores odit labore fuga ab placeat voluptates tenetur laborum
          quos error autem! Perferendis, quasi ullam architecto perspiciatis
          magnam autem, quaerat necessitatibus voluptate accusantium saepe harum
          illum maiores doloremque inventore fugit voluptates debitis neque
          fuga? Numquam cum culpa quidem laboriosam neque cupiditate quia?
          Consectetur ducimus itaque assumenda, dicta quisquam ut animi suscipit
          ipsum hic magnam adipisci sed. Nostrum non dolor debitis, repudiandae
          sequi libero a at possimus, cumque animi praesentium vel, laboriosam
          numquam. Molestiae exercitationem rem sapiente repellendus cupiditate
          modi excepturi porro. Itaque illo nostrum dolor asperiores eveniet
          velit tempora earum ipsa excepturi, obcaecati sint. Fugit expedita
          repellendus cumque placeat nam ipsam iure! Reprehenderit a, minus
          rerum odit sint accusamus ducimus culpa non harum eos dolorum tenetur
          omnis eum quia excepturi unde exercitationem! Molestiae, repudiandae
          quaerat! Eos, repellat deserunt earum nemo quaerat aliquam. Fugiat
          voluptatibus laborum impedit dolore! Quibusdam ducimus quo excepturi
          iste, dolor ab iure distinctio cumque dignissimos culpa consequatur
          amet ipsum obcaecati exercitationem! Illo ea, sint ipsum corrupti
          exercitationem officia nisi? Officia suscipit deleniti sequi unde
          nostrum libero odio architecto, laborum quam facilis nisi dolore
          doloribus repellendus, harum quasi, amet deserunt ducimus modi?
          Nesciunt dolorem nisi repudiandae modi, rerum tenetur pariatur? Rerum
          officia dolore, mollitia praesentium expedita iure minima sint numquam
          quae voluptates esse suscipit ut quidem eum natus quaerat rem eius
          reprehenderit sapiente in minus dolorum? Iste animi minus corporis.
          Sed nemo illo temporibus, eligendi ipsam repellendus provident ducimus
          eum, dolorum deleniti blanditiis ab magni dolor mollitia, quidem amet.
          Rem nesciunt eius facere minima? Ipsa incidunt ullam atque voluptatem
          neque? Quidem, ipsa numquam officiis commodi sapiente quam, aperiam
          laudantium sunt magnam praesentium saepe sit nihil repellat voluptates
        </Typography>
      </CardContent>
    </Card>
  );
}
