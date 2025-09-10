/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable no-magic-numbers */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-elements */
/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/forbid-dom-props */
import React, { FC } from 'react';

import { Footer, Header } from './HomePage.components';

import '../../style/home.css';

/** @namespace First/Route/HomePage/HomePageComponent */
export const HomePage: FC = () => (
        <div className="home-page">
            <Header />
            <main>
                <section className="hero">
                    <div className="container hero-inner">
                        <div className="hero-content">
                            <h1 className="hero-title">Shop Smart. Shop Secure.</h1>
                            <p className="hero-subtitle">Discover curated products with fast delivery and reliable support.</p>
                            <div className="cta-group">
                                <a href="#products" className="btn btn-primary">Shop Now</a>
                                <a href="#features" className="btn btn-outline">Learn More</a>
                            </div>
                        </div>
                        <div className="hero-art" aria-hidden="true"></div>
                    </div>
                </section>

                <section id="features" className="features">
                    <div className="container features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Fast Checkout</h3>
                            <p>Quick, seamless payments and order confirmation.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure</h3>
                            <p>Bank-grade encryption keeps your data safe.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚚</div>
                            <h3>Swift Delivery</h3>
                            <p>Get your products delivered on time, every time.</p>
                        </div>
                    </div>
                </section>

                <section id="products" className="products">
                    <div className="container">
                        <div className="section-header">
                            <h2>Trending Products</h2>
                            <a href="#" className="link">View all</a>
                        </div>
                        <div className="product-grid">
                            {[1, 2, 3, 4, 5, 6].map((id) => (
                                <div className="product-card" key={id}>
                                    <div className="product-media" />
                                    <div className="product-info">
                                        <h4>Product {id}</h4>
                                        <p>$ {(id * 19).toFixed(2)}</p>
                                        <button className="btn btn-sm btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
);

export default HomePage;


