import styles from "../styles/shop.module.css";

const shop = () => {
  return (
    <div>
      <div className={styles.search}>
        <img
          src="/Icon ionic-ios-.png"
          style={{ marginTop: 3, marginLeft: 3 }}
          width={22}
          height={22}
        />
        <input
          className={styles.text2}
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className={styles.carousel1}>{/* Carousel 1 */}</div>
      <text className={styles.text1} type="text">
        Best Seller
      </text>
      <div className={styles.carousel2}>{/* Carousel 2 */}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
        }}
        className={styles.navbar}
      >
        <img
          style={{
            marginTop: 26,
            marginRight: 20,
            marginLeft: 20,
            width: 27,
            height: 18,
          }}
          src="/Icon feather-vi.png"
        />
        <img
          style={{
            marginTop: 23.5,
            marginRight: 20,
            marginLeft: 20,
            width: 21,
            height: 23,
          }}
          src="/Icon feather-ca.png"
        />
        <img
          style={{
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20,
            width: 50,
            height: 50,
          }}
          src="/home-icon.png"
        />
        <img
          style={{
            marginTop: 23.5,
            marginRight: 20,
            marginLeft: 20,
            width: 21,
            height: 23,
          }}
          src="/Icon feather-sh.png"
        />
        <img
          style={{
            marginTop: 23.5,
            marginRight: 20,
            marginLeft: 20,
            width: 21,
            height: 23,
          }}
          src="/Icon feather-us.png"
        />
      </div>
    </div>
  );
};

export default shop;
