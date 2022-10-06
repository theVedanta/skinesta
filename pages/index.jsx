import Image from "next/image";
import style from "../styles/landing.module.css";
import Link from "next/link";
import logo from "../public/logo@2x.png";
import img from "../public/img@2x.png";

const Home = () => {
    return (
        <main className="main">
            <section className={`cont ${style.landing}`}>
                <nav className={style.nav}>
                    <Image alt="logo" width="150" height="30" src={logo} />
                    <Link href="/auth">
                        <a className={`${style.btn}`}>Login</a>
                    </Link>
                </nav>

                <h1 className={style.title}>
                    Enhance your beauty
                    <br />
                    and Skin-care
                    <br />
                    Experience
                </h1>
                <p className={style.p}>
                    Pictures are used by the Skinesta app to evaluate your skin
                    type and provide you with the best possible schedule and
                    products
                </p>
                <div className={style.btns}>
                    <Link href="/auth">
                        <a
                            className={`${style.btn}`}
                            style={{ marginRight: "14px" }}
                        >
                            Explore
                        </a>
                    </Link>
                    <Link href="/auth">
                        <a className={`${style.btn} ${style.btnSecondary}`}>
                            Store
                        </a>
                    </Link>
                </div>
            </section>
            <div className={style.img}>
                <Image
                    src={img}
                    alt="img"
                    width="500"
                    height="1000"
                    objectFit="cover"
                />
            </div>
        </main>
    );
};
export default Home;
