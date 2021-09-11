import styles from "./_styles.module.scss";
import Button from '@material-ui/core/Button';

type Props = {
  text: string;
};

const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <Button variant="contained" color="primary">
      {`Hello World with material ${text}`}
    </Button>
    </div>
  );
};

export default ExampleComponent;
