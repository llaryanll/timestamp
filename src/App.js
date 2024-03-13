import './App.css';
import { Grid, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

function App() {
  const [processDone, setprocessDone] = useState(false);
  const title = !processDone
    ? 'About the Project'
    : 'Video contains following Activity';
  const text =
    "The project is all about Developing a project that can understand and categorize videos. We're working on creating these programs from scratch, improving them, and finding new ways to teach them to recognize things in videos.";
  return (
    <Container>
      <Grid
        style={{ background: 'linear-gradient(135deg, #13072E, #3F2182)' }}
        className="grid grid-cols-2 mt-40 p-6 rounded-lg"
      >
        <Grid className="space-y-10">
          <Grid>
            <Button
              style={{
                backgroundColor: '#21b6ae',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: 35,
              }}
            >
              Video Classification
            </Button>
          </Grid>
          <Grid>
            <Typography style={{ color: 'white', fontWeight: 'bold' }}>
              {title}
            </Typography>
            {!processDone ? (
              <Typography style={{ color: 'white' }}>{text}</Typography>
            ) : (
              <Grid>
                <Typography style={{ color: 'white' }}>Activity 1</Typography>
                <Typography style={{ color: 'white' }}>Activity 2</Typography>
                <Typography style={{ color: 'white' }}>Activity 3</Typography>
                <Typography style={{ color: 'white' }}>Activity 4</Typography>
              </Grid>
            )}
          </Grid>

          {!processDone && (
            <Grid>
              <Button
                endIcon={<ArrowForwardIcon />}
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: 35,
                }}
                onClick={() => setprocessDone(true)}
              >
                Upload Video
              </Button>
            </Grid>
          )}
        </Grid>

        <Grid>
          <img
            src="https://img.freepik.com/free-photo/businessman-typing-keyboard_1098-21128.jpg?w=900&t=st=1710349301~exp=1710349901~hmac=9fef8e6b54966cdd115f19fc28f55fe2a58142eb1b1423e13f648d827ae78cfb"
            alt="laptop"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
