import React from 'react';
import Iphone from "./img/iphone.png"
import "./Reviews.css"
const Reviews = () => {
    return (
        <div className='container_reviews container'>
            <div className='div_h2_reviews'>
                <h2 className='h2_reviews'>ОТЗЫВЫ</h2>
            </div>  
            <div className='div_rest_reviews'>  
                <img src={Iphone} alt='iphone' className='iphone_img_reviews'/>
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