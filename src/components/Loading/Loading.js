import { CircleLoader } from "react-spinners";

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={`position-absolute h-100 w-100 ${styles.wrapper}`}>
      <div className={`bg-dark h-100 w-100 ${styles.background}`}></div>
      <div className={`position-absolute ${styles.loader}`}>
        <CircleLoader color={'#ffffff'} size={150} />
      </div>
    </div>
  );
};

export default Loading;
