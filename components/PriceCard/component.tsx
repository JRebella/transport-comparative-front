import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { capitalize } from 'lodash';
import Chip from '@material-ui/core/Chip';
import styles from "./_styles.module.scss";
import { Link } from '@material-ui/core';


type Props = {
  app: string;
  high_estimate: number;
  low_estimate: number;
  duration: number;
  route: string;
  cheaper?: boolean;
  };

const PricesComparison = ({ 
  app,
  high_estimate,
  low_estimate,
  duration,
  route,
  cheaper,
}: Props) => (
  <div className={styles.root}>
  <Paper className={styles.paper}>
    <Grid container >
    <Link color={'inherit'} href={route} className={styles.fullWidth}>
    <ButtonBase className={styles.buttonWrapper}>
    <Grid item>
    <img src="car.svg" alt="car" className={styles.image}/>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs className={styles.flexContainer}>
          <Typography variant="h5">
                {capitalize(app)}
              </Typography>
              <Typography variant="subtitle2">
                {`duración: ${duration} min`}
            </Typography>
          </Grid>
         {cheaper && ( <Grid item className={styles.flexContainer}>
          <Chip label="Mas económico" color="primary" size="small"/>
          </Grid>)}
        </Grid>
        <Grid item >
          <Typography variant="h6">{`$${low_estimate} - $ ${high_estimate}`}</Typography>
        </Grid>
      </Grid>
        </ButtonBase>
    </Link>   
    </Grid>
  </Paper>
</div>
);

export default PricesComparison;
