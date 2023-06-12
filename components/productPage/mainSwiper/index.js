import styles from "./styles.module.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { useState } from "react";

export default function MainSwiper({ images, activeImg }) {
  const [active, setActive] = useState(0);
  return (
    
    <div className={styles.swiper}>
      <div className={styles.swiper__active}>
      <TransformWrapper>
      <TransformComponent>
        <img src={activeImg || images[active].url }alt="test" />
      </TransformComponent>
    </TransformWrapper>
     
      </div>
      <div className={styles.swiper__list}>
        {images.map((img, i) => (
          <div
            className={`${styles.swiper__list_item} ${
              i == active && styles.active
            }`}
            key={i}
            onMouseOver={() => setActive(i)}
          >
            <img src={img.url} alt="" key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}