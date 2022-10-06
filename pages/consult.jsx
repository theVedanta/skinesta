import Container from "components/Container";
import styles from "@/styles/consult.module.css";
import Image from "next/image";
import { Video, ArrowRight } from "react-feather";
import consult from "../public/consult_img.png";

const Consult = () => {
    return (
        <>
            <Container>
                <div className={styles.topContainer}>
                    <h2 className={styles.title}>
                        Schedule a Meeting with our experts
                    </h2>
                    <div className={styles.img}>
                        <Image src={consult} width="310" height="270" />
                    </div>
                    <p>Get suggestions from top dermatologists</p>
                    <h3 className={styles.price}>$30/Hr.</h3>
                </div>
                <button className={styles.btn}>
                    <span>
                        <p>Schedule Meeting</p>
                        <ArrowRight
                            className={styles.btnArrow}
                            size="18"
                            color="#fff"
                        />
                    </span>

                    <Video className={styles.btnIcon} color="#fff" />
                </button>
            </Container>
        </>
    );
};

export default Consult;
