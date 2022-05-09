import React from 'react';
import "./Questions.css";
const Questions = () => {
    return (
        <div className='container'>
            <h2 className='h2'>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
            <ul className='ul'>
                <li className='li'>+ Как происходит оплата ?</li>
                <li className='li'>+ Как происходит доставка ?</li>
                <li className='li'>+ Как оформить заказ ?</li>
                <li className='li'>+ Вся продукция оригинальная?</li>
                <li className='li'>+ Почему цена зависит от размера ?</li>
                <li className='li'>+ Как формируются цены на сайте ?</li>
                <li className='li'>+ Что делать, если размер мне не подошел ?</li>
            </ul>
        </div>

    );
}

export default Questions;