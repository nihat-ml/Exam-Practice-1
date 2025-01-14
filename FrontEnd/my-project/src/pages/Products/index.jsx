import React from 'react'
import { FaHeart } from 'react-icons/fa'

function Products() {
  return (
    <>
        <div className='arrivals-head'>New Arrivals</div>
        <div className='cardsDiv'>
        <div className='cards'>
            <div className='card'>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                <p>Fujifilm X100T 16 MP Digital <br /> Camera (Silver)</p>
                <span>$495.00 </span>
                <FaHeart/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Products