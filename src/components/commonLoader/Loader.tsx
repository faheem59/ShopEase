import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const Loader= () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '50vh' }}>
            <CircularProgress />
        </Grid>
    );
};

export default Loader;
