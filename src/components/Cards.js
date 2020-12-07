import React from "react"

const Cards = () => {
  return (
    <div className="container gap-5 grid grid-cols-1 md:grid-cols-3">
      <div className="w-100 text-center h-60">
        <h1 className="text-lg">JavaScript Fullstack </h1>
        <p className="centered px-5 text-center text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          officia assumenda reiciendis, officiis voluptas ducimus sit,
          perspiciatis cumque neque sapiente dignissimos quos possimus deserunt
          minus qui natus corrupti cupiditate magnam.
        </p>
      </div>
      <div className="w-100 text-center h-60">
        <h1 className="text-lg">Problem Solving Skills</h1>
        <p className="centered px-5 text-center text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          officia assumenda reiciendis, officiis voluptas ducimus sit,
          perspiciatis cumque neque sapiente dignissimos quos possimus deserunt
          minus qui natus corrupti cupiditate magnam.
        </p>
      </div>
      <div className="w-100 text-center h-60">
        <h1 className="text-lg">Shopify E-commerce</h1>
        <p className="centered px-5 text-center text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          officia assumenda reiciendis, officiis voluptas ducimus sit,
          perspiciatis cumque neque sapiente dignissimos quos possimus deserunt
          minus qui natus corrupti cupiditate magnam.
        </p>
      </div>
    </div>
  )
}

export default Cards
