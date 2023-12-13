import React, { useState, useRef } from "react";
import "./Card.css";
import productsData from "../../../api/kutez-data.json";
import leftArrowIcon from "../../../assets/icons/left-arrow-icon.svg";
import rightArrowIcon from "../../../assets/icons/right-arrow-icon.svg";

const Card = () => {
  const filteredProducts = productsData.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );

  const [activeImgs, setActiveImgs] = useState(
    filteredProducts.map((product) => product.img[0])
  );
  const [selectedColorIndices, setSelectedColorIndices] = useState(
    new Array(filteredProducts.length).fill(0)
  );

  const cartWrapperRef = useRef(null);

  const changeColorFunc = (productIndex, colorIndex) => {
    const newSelectedColorIndices = [...selectedColorIndices];
    newSelectedColorIndices[productIndex] = colorIndex;
    setSelectedColorIndices(newSelectedColorIndices);

    const newActiveImgs = [...activeImgs];
    newActiveImgs[productIndex] =
      filteredProducts[productIndex].img[colorIndex];
    setActiveImgs(newActiveImgs);
  };

  const scrollToLeft = () => {
    if (cartWrapperRef.current) {
      cartWrapperRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    if (cartWrapperRef.current) {
      cartWrapperRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className='slider'>
      <h1 className='slider-header'>Moissanite Engagement Rings</h1>
      <div className='slider-container'>
        <button className='slider-button left' onClick={scrollToLeft}>
          <img src={leftArrowIcon} alt='Left Arrow' />
        </button>
        <div className='cart-wrapper' ref={cartWrapperRef}>
          {filteredProducts.map((item, itemIndex) => (
            <div key={itemIndex} className='cart-item'>
              <div className='image-container'>
                <img
                  className='cart-image'
                  src={activeImgs[itemIndex]}
                  alt='Product'
                />
              </div>

              <div className='product-info'>
                <h2 className='product-name'>Engagement Ring {item.id}</h2>
                <div className='price'>
                  <span>${item.price.toFixed(2)}</span> USD
                </div>
                <div className='colors'>
                  <div className='colors-wrapper'>
                    {item.color.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`color-wrapper ${
                          selectedColorIndices[itemIndex] === colorIndex
                            ? "active"
                            : ""
                        }`}
                        onClick={() => changeColorFunc(itemIndex, colorIndex)}
                      >
                        <label style={{ backgroundColor: color }}>
                          <input type='radio' name='product-color' />
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className='colors-label'>
                    {item.colorName[selectedColorIndices[itemIndex]]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className='slider-button right' onClick={scrollToRight}>
          <img src={rightArrowIcon} alt='Right Arrow' />
        </button>
      </div>
    </section>
  );
};

export default Card;
