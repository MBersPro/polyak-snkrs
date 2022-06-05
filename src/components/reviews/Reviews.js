import React from 'react';
import IphonePhone from "./img/iphonePhone.png"
import iphoneTabletAndDesktop from "./img/iphoneTablet.png"
import "./Reviews.css"
const Reviews = () => {
    return (
        <div className='container_reviews container' id="review">
            <div className='reviews_titleContainer'>
                <span className="reviews_titleBack">ОТЗЫВЫ</span>
                <h2 className='reviews_title'>ОТЗЫВЫ</h2>
            </div> 
            <div className='div_rest_reviews'>  
                <img src={IphonePhone} alt='iphone' className='iphonePhone_img_reviews'/>
                <img src={iphoneTabletAndDesktop} alt='iphone' className='iphoneTabletAndDesktop_img_reviews'/>
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