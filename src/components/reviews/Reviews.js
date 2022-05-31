import React from 'react';
import Iphone from "./img/iphone.png"
import IphoneDesktop from "./img/iphoneDesktop.png"
import "./Reviews.css"
const Reviews = () => {
    return (
        <div className='container_reviews container' id="review">
            <div className='reviews_container_h2'>
                <span className="reviews_back">ОТЗЫВЫ</span>
                <h2 className='reviews_h2'>ОТЗЫВЫ</h2>
            </div> 
            <div className='div_rest_reviews'>  
                <img src={Iphone} alt='iphone' className='iphone_img_reviews'/>
                <img src={IphoneDesktop} alt='iphoneDesktop' className='iphoneDesktop_img_reviews'/>
                <p className='see_more_reviews'>Посмотреть больше отзывов</p>
                <form className='form_reviews'>
                    <h3 className='give_feedback_reviews'>Оставить отзыв</h3>
                    <input type="text" className='input_reviews' placeholder="Оставить отзыв..."/>    
                    <button className='send_btn_reviews'>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Reviews;