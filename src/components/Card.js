import React from 'react'
import mobile from '../images/image-product-mobile.jpg'
import icon from '../images/icon-cart.svg'
import desktopImg from '../images/image-product-desktop.jpg'
const Card = () => {
    return (

        <div className='background'>
            <div className='newWrite'>
                <img className='img' src={mobile} alt="" />
                <img className='imgD' src={desktopImg} alt="" />
                <div className='writeup'>
                    <p className='perfume'>PERFUME</p>
                    <h1 className='gab'>Gabrielle Essence  Eau De Parfum</h1>
                    <p className='xtrics'>A floral, solar voluptuous <br /> interpretation composed by Olivier <br /> Polge, Perfumer-Creator for the House of <br /> CHANEL.</p>
                    <div className='price'>
                        <h1 className='amount'>$149.99 </h1>
                        <p className='previousFee'><s>169.99</s></p>
                    </div>
                    <button className='clickButton'><img src={icon} alt="" /> Add to Cart </button>
                </div>
            </div>
        </div>

    )
}

export default Card