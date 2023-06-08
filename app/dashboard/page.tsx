'use client'
import React, { useEffect, useState, useContext } from "react"
import { Context } from "../context/context"

// components

import ChartLine from "../components/Cards/CardLineChart";
import CardSocialTraffic from "../components/Cards/CardTableDisplay";
import Container from "../components/RatingStars/index";
// layout for page


export default function Dashboard() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(res => res.json()).then(res => setProducts(res.products))
    }, [])
    return (
        <Context.Provider value={products}>
            <div className="flex flex-wrap place-content-center w-full container m-auto mt-5">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <Container />
                </div>

            </div>
            <div className="flex flex-wrap place-content-center w-full container m-auto mt-5">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <ChartLine />
                </div>

            </div>
            <div className="flex flex-wrap mt-4 place-content-center w-full container m-auto">
                <div className="w-full xl:w-8/12  ">
                    <CardSocialTraffic />
                </div>
            </div>

        </Context.Provider>
    );
}
