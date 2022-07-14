import Button from "./button";
import Card from "./card";
import styles from "./errorModel.module.css";
const ErrorModel = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.clearError}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.header}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.clearError}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModel;
