import Landing from "../Landing/Itachi";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import styles from "./index.module.css";

const Index = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div>
          <Landing />
        </div>
        <div className={styles.left}>
          <Greeting />
        </div>
      </div>
    </div>
  );
};

export default Index;
