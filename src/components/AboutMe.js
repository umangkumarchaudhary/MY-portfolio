import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import boy from "../assets/boy-img.png";
import DownloadIcon from "@mui/icons-material/Download";

function AboutMe() {
  const skills = ["Data structures and Algorithms","competitve programming","DBMS","OS", "System design",
  "React.js", "Node.js", "Html", "CSS", "JavaSvript"];
  return (
    <>
      <Box sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
            <img src={boy} alt="" style={{ width: "88%" }} />

            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                About Me
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 3 }}>
              Hi, I'm Umang Kumar and I'm a 3rd year student pursuing my BTech in CSE from Lovely Professional University college. 
              With a 7.5 CGPA overall till my 5th semester, I have developed a strong foundation in computer science.
               My proficiency in programming languages such as C/C++ and Java, along with basic knowledge in Python and JavaScript,
                has allowed me to excel in problem-solving and data structures and algorithms.
             My passion for technology is reflected in my web development experience using HTML, CSS, JavaScript, React JS 
             and basic knowledge of Node JS. I have also gained hands-on experience in database management through my knowledge of SQL.
              I have completed several projects, including an Amazon clone using React JS, a weather API,
               and a sudoku solver using backtracking concepts. These projects have not only helped me to improve my technical 
             skills but have also allowed me to showcase my problem-solving and critical thinking abilities.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  flexWrap: "wrap",
                  my: 3,
                }}
              >
                {skills.map((item) => {
                  return (
                    <button
                      key="item"
                      style={{
                        padding: "8px",
                        backgroundColor: "green",
                        border: "2px solid #0CBBA0",
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </Box>
              <Button
                variant="contained"
                size="medium"
                sx={{ backgroundColor: "brown", width: "200px" }}
                endIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AboutMe;
