import styles from "./ihnput-error.module.css";

type Props = {
  message: string;
};

export const InputError = ({ message }: Props) => {
  return <div className={styles.inputError}>{message || ""}</div>;
};

