import React from 'react';
import "./Questions.css";
const Questions = () => {
    return (
        <div className='container container_question'>
            <h2 className='h2_question'>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
            <ul className='ul_question'>
                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Как происходит оплата ?
                        </summary>
                        Текст
                    </details>
                </li>

                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Как происходит доставка ?
                        </summary>
                        Текст
                    </details>
                </li>

                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Как оформить заказ ?
                        </summary>
                        Текст
                    </details>
                </li>

                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Вся продукция оригинальная ?
                        </summary>
                        Текст
                    </details>
                </li>

                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Почему цена зависит от размера ?
                        </summary>
                        Текст
                    </details>
                </li>

                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Как формируются цены на сайте ?
                        </summary>
                        Текст
                    </details>
                </li>

                <li className='li_question'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='plus_icon_question'>+</span> 
                            Что делать, если размер мне не подошел ?
                        </summary>
                        Текст
                    </details>
                </li>
            </ul>
        </div>
        
    );
}

export default Questions;