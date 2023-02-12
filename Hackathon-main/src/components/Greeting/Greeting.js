import food from "./../../assests/food1.png";
import bowl from "./../../assests/food2.png";
import order from "./../../assests/orderNow.png";
import ramen from "./../../assests/ramen.png";
import dish1 from "./../../assests/dish1.png";
import styles from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.welcome}>
          <span>Welcome to IchiRaku Ramens!</span>
        </div>
        <div className={styles.discover}>
          <span>
            Discover the authentic taste of Japanese cuisine with our delicious
            ramen dishes
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "38px" }}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "42px",
              }}
            >
              <div>
                <img src={food} alt="food" style={{ marginRight: "22px" }} />
              </div>
              <div className={styles.foodText}>
                <span>
                  Our passion for authentic flavors and ingredients is what sets
                  us apart and makes us the perfect choice for anyone looking
                  for a delicious and satisfying meal
                </span>
              </div>
            </div>
            <div style={{ marginTop: "44px" }}>
              <span className={styles.lstText}>
                At Ichiraku Ramen, we believe in providing our customers with
                the best possible experience, which is why we've made it easy
                for you to order online.
              </span>
            </div>
          </div>
          <div>
            <img src={bowl} alt="food" style={{ marginTop: "12px" }} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ marginTop: "38px" }}>
            <span className={styles.lstText}>
              Whether you're at home, at work, or on the go, our online ordering
              system allows you to order your favorite dishes quickly and easily
            </span>
          </div>
          <div style={{ marginTop: "24px" }}>
            <img src={order} alt="order" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          //   gap: "4px",
          alignItems: "center",
          textAlign: "center",
          marginTop: "26px",
          marginBottom: "60px",
        }}
      >
        {/* <div
          style={{
            background: "#F6F1E8",
            borderRadius: "10px",

            // paddingLeft: "2px",
            // paddingRight: "2px",
          }}
        >
          <div className={styles.popular}>
            <span>OUR MOST POPULAR DISHES</span>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-evenly",
                // gap: "4px",
                // marginTop: "42px",
                // paddingLeft: "16px",
                // paddingRight: "2px",
                // paddingLeft: "2px",
              }}
            >
              <div className={styles.dish}>
                <span>. Classic Shoyu Ramen</span>
              </div>
              <div>
                <img src={dish1} alt="dish1" />
              </div>
              <div className={styles.dish}>
                <span>$15</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-evenly",
                // gap: "44px",
                // marginTop: "22px",
                // paddingLeft: "16px",
              }}
            >
              <div className={styles.dish}>
                <span>. Spicy Miso Ramen</span>
              </div>
              <div>
                <img src={dish1} alt="dish1" />
              </div>
              <div className={styles.dish}>
                <span>$13.4</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-evenly",
                // gap: "44px",
                // marginTop: "22px",
                // marginBottom: "22px",
                // paddingLeft: "16px",
              }}
            >
              <div className={styles.dish}>
                <span>. Tonkatsu Ramen</span>
              </div>
              <div>
                <img src={dish1} alt="dish1" />
              </div>
              <div className={styles.dish}>
                <span>$14</span>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <img src={ramen} alt="ramen" style={{ marginRight: "26px" }} />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
