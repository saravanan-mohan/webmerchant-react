import React, { useState } from "react";
import './product.css'

export default function Product() {
    return (
        <section id='product'>
            <div class='product-left'>
                <div class='product-image'>
                    <img src='./images/iphone.png' />
                </div>
            </div>
            <div class='product-right'>
                <div class='product-heading'>
                     <h2>OUR PRODUCT</h2>
                </div>
                <article>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </article>
                <ul class='product-feature'>
                    <li>
                        <span></span>
                        <span>Quality</span>
                    </li>
                    <li>
                        <span></span>
                        <span>Performance</span>
                    </li>
                    <li>
                        <span></span>
                        <span>Power</span>
                    </li>
                </ul>
                <div class='product-big-button'>
                    <button class='big-button'>Big Button</button>
                </div>
            </div>
        </section>
    )
}