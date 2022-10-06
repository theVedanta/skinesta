import Protected from "components/Protected";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/auth.module.css";
import BASE_API_URL from "../constants";
import ScheduleContainer from "../components/ScheduleContainer";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import upload from "../public/upload@2x.png";
import logo from "../public/logo@2x.png";
import auth_bg from "../public/auth-bg.png";

const Upload = ({ user, authed, setCart, cart }) => {
    const [scheduled, setScheduled] = useState(false);
    const [schedule, setSchedule] = useState(false);
    const [products, setProducts] = useState(false);

    const getStats = async (e) => {
        e.preventDefault();
        const file = e.target.querySelector("input").files[0];
        const params = new FormData();
        params.append("max_face_num", "1");
        params.append("face_field", [
            "smooth", // 1-4 smaller the smoother
            // "acnespotmole",
            // "wrinkle",
            "skinquality", // Array of dry and oily skin fields, example: [“0”,“1”,“0”,“0”,“0”],//“0”:“dry”,“1”:“neutral”, “2”: “oily”, which represents the forehead, nose, left cheek, right cheek, and chin in order.
        ]);
        params.append("image", file, "wil.png");

        const dataJson = await fetch(
            "https://skin-analysis.p.rapidapi.com/face/effect/skin_analyze",
            {
                method: "POST",
                headers: {
                    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
                    "X-RapidAPI-Host": "skin-analysis.p.rapidapi.com",
                },
                body: params,
            }
        );

        const data = await dataJson.json();

        if (data.message) return (window.location.href = "/error");

        // const data = {
        //     error_code: 0,
        //     error_msg: "SUCCESS",
        //     log_id: 2523904286,
        //     timestamp: 1664980923,
        //     cached: 0,
        //     result: {
        //         face_num: 1,
        //         face_list: [
        //             {
        //                 face_token: "c0a74282032310f3fc1a16c920b71645",
        //                 location: {
        //                     left: 58.89,
        //                     top: 410.25,
        //                     width: 537,
        //                     height: 518,
        //                     degree: 0,
        //                     prob: 1,
        //                     conf: 1,
        //                 },
        //                 skin: {
        //                     smooth: 3,
        //                 },
        //                 skinquality: {
        //                     skin_dryoil_check: ["1", "1", "1", "1", "0"],
        //                     skin_sensitive_check: ["0"],
        //                 },
        //             },
        //         ],
        //     },
        // };

        const face = data.result.face_list[0];

        const { smooth } = face.skin;
        const { skin_dryoil_check } = face.skinquality;

        // Determine count values for checking highest
        const [zerocount, onecount, twocount] = [0, 0, 0];

        for (let i of skin_dryoil_check) {
            if (i.toString() === "0") zerocount++;
            else if (i.toString() === "1") onecount++;
            else if (i.toString() === "2") twocount++;
        }

        // Set the number to maximum instead of the count
        let type = "";
        let smoothness = "";

        // Determine type
        let max = Math.max(zerocount, onecount, twocount);
        if (max === zerocount) type = "dry";
        else if (max === onecount) type = "neutral";
        else if (max === twocount) type = "oily";

        // Determine smoothness
        if (smooth >= 3) smoothness = "hard";
        else smoothness = "smooth";

        // API Query
        const productsJson = await fetch(
            `${BASE_API_URL}/shop/search?smooth=${
                smoothness === "smooth" ? true : false
            }&&type=${type}&&id=${user._id}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }
        );
        let products = await productsJson.json();

        const schedule = products.schedule;
        products = products.products;

        if (schedule !== null) {
            // window.location.href = "/upload-2";
            setScheduled(true);
            setSchedule(schedule);
            setProducts(products);
        }
    };

    return (
        <Protected authed={authed}>
            {!scheduled ? (
                <main className="main">
                    <form
                        onSubmit={(eve) => getStats(eve)}
                        className="form cont"
                    >
                        <input
                            type="file"
                            name="img"
                            id="img"
                            style={{ display: "none" }}
                        />
                        <label htmlFor="img">
                            <Image
                                src={upload}
                                width={320}
                                height={300}
                                alt="img"
                            />
                        </label>
                        <button type="submit" className="form-btn">
                            Submit
                        </button>
                    </form>
                </main>
            ) : (
                <Upload2
                    scheduleData={schedule}
                    prods={products}
                    cart={cart}
                    setCart={setCart}
                />
            )}
        </Protected>
    );
};

const ProductItem = ({ name, price, image, id, cart, setCart }) => {
    return (
        <div className={styles.productItem}>
            <div className={styles.productImgBox}>
                <img className={styles.prodImg} src={image} />
            </div>
            <div className={styles.productContent}>
                <h3 className={styles.productName}>{name}</h3>
                <h3 className={styles.productPrice}>{price}</h3>
                {cart && !cart.includes(id) && (
                    <button
                        onClick={() => {
                            setCart([...cart, id]);
                        }}
                        className={styles.btn}
                    >
                        Buy Now
                    </button>
                )}
            </div>
        </div>
    );
};

const Upload2 = ({ scheduleData, prods, setCart, cart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(prods);
        setProducts(prods);
    }, [prods]);

    return (
        <>
            <div className={styles.container}>
                <Image
                    src={auth_bg}
                    layout="fill"
                    style={{ zIndex: "-1" }}
                    alt="img"
                />
                <div
                    className={styles.logo}
                    style={{ marginTop: "2rem", marginBottom: "0rem" }}
                >
                    <Image src={logo} width={300} height={60} alt="img" />
                </div>

                <div className={`${styles.scheduleAndShopCard} ${styles.card}`}>
                    <div style={{ padding: "0 6vw" }}>
                        <Link href="/home">
                            <a
                                className={styles.btnMax}
                                style={{ margin: "3vh 0", width: "100%" }}
                            >
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    Home
                                </span>
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>

                    <h3 className={styles.title}>
                        According to your skin type
                    </h3>

                    <ScheduleContainer scheduleData={scheduleData} />

                    <h3 className={styles.secTitle}>Products</h3>
                    <div className={styles.contentContainer}>
                        {products &&
                            products.map((prod, i) => (
                                <ProductItem
                                    key={i}
                                    id={prod._id}
                                    image={prod.img}
                                    name={prod.name}
                                    price={`$${prod.price}`}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Upload;
