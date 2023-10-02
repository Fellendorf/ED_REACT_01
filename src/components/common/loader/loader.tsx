import { FadeLoader } from "react-spinners";
import styles from "./loader.module.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  loading: boolean;
  color?: string;
};

export const Loader = ({
  children,
  loading,
  color = "rgb(83 83 83)",
}: Props) => {
  return (
    <>
      <div className={styles.parent}>
        <FadeLoader
          className={styles.child}
          color={color}
          cssOverride={{
            opacity: loading ? 1 : 0,
          }}
        />
      </div>
      <> {children}</>
    </>
  );
};

