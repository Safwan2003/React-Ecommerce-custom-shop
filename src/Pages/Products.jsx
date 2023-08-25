import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ tShirts }) => {
  return (
    <div className="t-shirt-container flex flex-wrap space-x-10 justify-center">
      {tShirts.map((tShirt, index) => (
        <div key={index} className="t-shirt w-[25rem] flex flex-col justify-center items-center border-2 border-black   ">
          <h3 className='font-bold text-2xl' >{tShirt.name}</h3>
          <Link to={`/product/${tShirt.name}`}>
            <img src={tShirt.images[0].image} alt={tShirt.name} />
          </Link>
          <p className='text-2xl p-3 font-bold  italic'>${tShirt.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
