import eating from "./../../assests/Itachi.png";
import styles from "./Itach.module.css";

const Itachi = () => {
  return (
    <div>
      <img
        src={eating}
        alt="eating"
        style={{ marginTop: "88px" }}
        className={styles.img}
      />
    </div>
  );
};

export default Itachi;
