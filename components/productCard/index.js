import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import ProductSwiper from "./ProductSwiper";
import styles from "./styles.module.scss";

export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  const subProducts = product?.subProducts || [];
  const activeSubProduct = subProducts.length > 0 ? subProducts[active] : {};
  const [images, setImages] = useState(activeSubProduct?.images || []);
  const [prices, setPrices] = useState(
    activeSubProduct?.sizes
      ?.map((s) => s.price)
      ?.sort((a, b) => a - b) || []
  );
  const styless = subProducts.map((p) => p.color);

  useEffect(() => {
    const subProduct = subProducts[active];
    if (subProduct) {
      setImages(subProduct.images);
      setPrices(subProduct.sizes?.map((s) => s.price)?.sort((a, b) => a - b));
    }
  }, [active, subProducts]);

  if (!product) {
    return null; // Return null or an alternative component if the product prop is undefined
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <a href={`/product/${product.slug}?style=${active}`} target="_blank">
          <div>
            <ProductSwiper images={images} />
          </div>
        </a>
        {activeSubProduct.discount ? (
          <div className={styles.product__discount}>
            -{activeSubProduct.discount}%
          </div>
        ) : (
          ""
        )}
        <div className={styles.product__infos}>
          <h1>
            {product.name.length > 45
              ? `${product.name.substring(0, 45)}...`
              : product.name}
          </h1>
          <span>
            {prices.length === 1
              ? `USD${prices[0]}$`
              : prices.length > 1 && `USD${prices[0]}-${prices[prices.length - 1]}$`}
          </span>
          <div className={styles.product__colors}>
            {styless.map((style, i) =>
              style.image ? (
                <img
                  src={style.image}
                  className={i === active ? styles.active : ""}
                  onMouseOver={() => {
                    const subProduct = subProducts[i];
                    if (subProduct) {
                      setImages(subProduct.images);
                      setActive(i);
                    }
                  }}
                  alt=""
                  key={i}
                />
              ) : (
                <span
                  style={{ backgroundColor: style.color }}
                  onMouseOver={() => {
                    const subProduct = subProducts[i];
                    if (subProduct) {
                      setImages(subProduct.images);
                      setActive(i);
                    }
                  }}
                  key={i}
                ></span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
