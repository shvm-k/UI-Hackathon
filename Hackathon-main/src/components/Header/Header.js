import styles from "./Header.module.css";
import logo from "./../../assests/logo.png";
import login from "./../../assests/login.png";
import order from "./../../assests/order.png";
import menu from "./../../assests/menu.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.btnFlex}>
        <div>
          <img
            src={menu}
            alt="menu"
            style={{ width: "149px", height: "60px" }}
          />
        </div>
        <div>
          <img
            src={order}
            alt="order"
            style={{ width: "153.5px", height: "67px" }}
          />
        </div>
        <div>
          <img
            src={login}
            alt="login"
            style={{ width: "143px", height: "58.62px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
