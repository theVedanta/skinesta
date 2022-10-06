import styles from "@/styles/shop.module.css";
import ProductCard from "components/ProductCard";
import SearchBar from "components/SearchBar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ShopBannerCard from "components/ShopBannerCard";
import Container from "components/Container";
import { useEffect, useState } from "react";
import BASE_API_URL from "../../constants";

const Shop = ({ cart, setCart }) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const productsJson = await fetch(`${BASE_API_URL}/shop`);
            const prods = await productsJson.json();

            setProducts(prods);
        };

        getProducts();
    }, []);

    return (
        <>
            <Container>
                <SearchBar />
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className={`embla__slide`}>
                            <ShopBannerCard image={"/banner1.png"} />
                        </div>
                        <div className={`embla__slide`}>
                            <ShopBannerCard image={"/banner1.png"} />
                        </div>
                        <div className={`embla__slide`}>
                            <ShopBannerCard image={"/banner1.png"} />
                        </div>
                        <div className={`embla__slide`}>
                            <ShopBannerCard image={"/banner1.png"} />
                        </div>
                        <div className={`embla__slide`}>
                            <ShopBannerCard image={"/banner1.png"} />
                        </div>
                        <div className={`embla__slide`}>
                            <ShopBannerCard image={"/banner1.png"} />
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Best Seller</h2>
                    <div className={styles.contentContainer}>
                        {products.map((prod, i) => (
                            <ProductCard
                                key={i}
                                image={prod.img}
                                name={prod.name}
                                brand={`$${prod.price}`}
                                id={prod._id}
                                cart={cart}
                                setCart={setCart}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Shop;
