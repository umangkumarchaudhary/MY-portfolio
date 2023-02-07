import React from "react";
import { Grid, Box, Container,  Typography } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
function MySkills() {
  return (
    <>
      <Box sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
            What I do
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "97%",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <CrisisAlertIcon
                  sx={{ fill: "#8A6AE3", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  competitve programming
                </Typography>
                <Typography variant="subtitle2">
                I have participated in online coding competitions and have honed my problem-solving , 
                allowing me to tackle challenging coding problems.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "350px",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <CodeIcon
                  sx={{ fill: "#CA624D", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  Web Development
                </Typography>
                <Typography variant="subtitle2">
                I have hands-on experience in web development, having worked on various projects using HTML, CSS,
                 JavaScript, React JS, and basic knowledge of Node JS. 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "350px",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <LaptopMacIcon
                  sx={{ fill: "#2588CE", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  App Development
                </Typography>
                <Typography variant="subtitle2">
                I am proficient in Android development and have a strong
                 foundation in Java, which is the primary programming language used for Android development.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MySkills;
