import {Button, Grid2, Typography} from '@mui/material';

export const MainErrorFallback = () => {
  return (
    <Grid2
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      role="alert"
      spacing={2}
    >
      <Grid2>
        <Typography variant="h6" color="error" fontWeight={600}>
          Ooops, something went wrong :
        </Typography>
      </Grid2>
      <Grid2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.assign(window.location.origin)}
        >
          Refresh
        </Button>
      </Grid2>
    </Grid2>
  );
};
