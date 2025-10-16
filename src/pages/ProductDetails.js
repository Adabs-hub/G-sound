import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import PropTypes from 'prop-types';
import { calculateDiscount, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import useActive from '../hooks/useActive';
import cartContext from '../contexts/cart/cartContext';
import productsData from '../data/productsData';
import SectionsHead from '../components/common/SectionsHead';
import RelatedSlider from '../components/sliders/RelatedSlider';
import ProductSummary from '../components/product/ProductSummary';
import Services from '../components/common/Services';

const ProductDetails = () => {
    useDocTitle('Product Details');
    const { handleActive, activeClass } = useActive(0);
    const { addItem } = useContext(cartContext);
    const { productId } = useParams();

    const prodId = parseInt(productId);
    const product = productsData.find(item => item.id === prodId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { 
        images, 
        title, 
        info, 
        category, 
        finalPrice, 
        originalPrice, 
        ratings, 
        rateCount 
    } = product;

    const [previewImg, setPreviewImg] = useState(images[0]);

    const handleAddItem = () => {
        addItem(product);
    };

    useEffect(() => {
        setPreviewImg(images[0]);
        handleActive(0);
    }, [images, handleActive]);

    const handlePreviewImg = (index) => {
        setPreviewImg(images[index]);
        handleActive(index);
    };

    // Calculate prices
    const discountedPrice = originalPrice - finalPrice;
    const priceDetails = {
        new: displayMoney(finalPrice),
        old: displayMoney(originalPrice),
        saved: displayMoney(discountedPrice),
        discount: calculateDiscount(discountedPrice, originalPrice)
    };

    return (
        <>
            <section id="product_details" className="section">
                <div className="container">
                    <div className="wrapper prod_details_wrapper">
                        <div className="prod_details_left_col">
                            <div className="prod_details_tabs">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`tabs_item ${activeClass(index)}`}
                                        onClick={() => handlePreviewImg(index)}
                                    >
                                        <img src={img} alt={`${title} - view ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <figure className="prod_details_img">
                                <img src={previewImg} alt={title} />
                            </figure>
                        </div>

                        <div className="prod_details_right_col">
                            <h1 className="prod_details_title">{title}</h1>
                            <h4 className="prod_details_info">{info}</h4>

                            <div className="prod_details_ratings">
                                <span className="rating_star">
                                    {[...Array(rateCount)].map((_, index) => (
                                        <IoMdStar key={index} />
                                    ))}
                                </span>
                                <span>|</span>
                                <Link to="*">{ratings} Ratings</Link>
                            </div>

                            <div className="separator"></div>

                            <div className="prod_details_price">
                                <div className="price_box">
                                    <h2 className="price">
                                        {priceDetails.new} &nbsp;
                                        <small className="del_price">
                                            <del>{priceDetails.old}</del>
                                        </small>
                                    </h2>
                                    <p className="saved_price">
                                        You save: {priceDetails.saved} ({priceDetails.discount}%)
                                    </p>
                                    <span className="tax_txt">(Inclusive of all taxes)</span>
                                </div>

                                <div className="badge">
                                    <span><IoMdCheckmark /> In Stock</span>
                                </div>
                            </div>

                            <div className="separator"></div>

                            <div className="prod_details_offers">
                                <h4>Offers and Discounts</h4>
                                <ul>
                                    <li>No Cost EMI on Credit Card</li>
                                    <li>Pay Later & Avail Cashback</li>
                                </ul>
                            </div>

                            <div className="separator"></div>

                            <div className="prod_details_buy_btn">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={handleAddItem}
                                    aria-label="Add to cart"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductSummary {...product} />

            <section id="related_products" className="section">
                <div className="container">
                    <SectionsHead heading="Related Products" />
                    <RelatedSlider category={category} />
                </div>
            </section>

            <Services />
        </>
    );
};

ProductDetails.propTypes = {
    // Component takes no props but adding PropTypes definition for future extensibility
};

export default ProductDetails;