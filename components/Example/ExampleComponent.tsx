import styles from "./_styles.module.scss";

type Props = {
  text: string;
};

const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      Example component / Text from props: <strong>{text}</strong>
    </div>
  );
};

export default ExampleComponent;
