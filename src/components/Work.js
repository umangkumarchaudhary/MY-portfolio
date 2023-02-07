import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";

function Work() {
  const education = [
    {
      title: "Btech(cse) from Lovely professional University",
      date: "2020-2024",
      description:
        "I am pursuing btech in cse from lpu ",
    },
    {
      title: "10th +2 from Paramount Academy",
      date: "2017-2020",
      
    },
    {
      title: "10th",
      date: "2017",
      },
  ];
  
  
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Education
              </Typography>
              {education.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Work;
