import Grid from '@material-ui/core/Grid';
import PriceCard from "../PriceCard/component";
import styles from "./_styles.module.scss";

const PricesComparison = () => {

  const mockedData = [{
    app: 'cabify',
    high_estimate: 130,
    low_estimate: 120,
    duration: 108,
    route:'https://www.google.com/',
    },
    {
      app: 'uber',
      high_estimate: 120,
      low_estimate: 115,
      duration: 1080,
      route:'https://www.google.com/',
      }].sort((d1, d2) => (d1.low_estimate > d2.low_estimate ? 1 : -1));

  return (
    <div className={styles.root}>
    <Grid container >
     {mockedData.map((data, index) => (
        <PriceCard {...data} key={data.app} cheaper={index === 0}/>
    )) }
      
    </Grid>
  </div>
  );
};

export default PricesComparison;
