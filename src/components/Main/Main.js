import React, { Component, useState } from "react";
import MerchantHead from '../MerchantHead'
import Product from '../Product'

export default function Main() {
    return (
        <div>
            <MerchantHead />
            <div id='main'>
                <Product />
            </div>
        </div>
    )
}