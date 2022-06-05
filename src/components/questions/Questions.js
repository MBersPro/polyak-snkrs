import React from 'react';
import "./Questions.css";
const Questions = () => {
    return (
        <div className='container container_question' id="questions">
            <div className='questions_titleContainer'>
                <span className="questions_titleBack">ВОПРОСЫ</span>
                <h2 className='questions_title'>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
            </div> 
            <div className='questions_detailsContainer'>
                    <details className='detail_question'>
                        <summary className='summary_question'>
                            <span className='summary_txt'>Как происходит оплата ?</span>
                        </summary>
                        Текст
                    </details>
                

                
                    <details className='detail_question'>
                        <summary className='summary_question'> 
                            <span className='summary_txt'>Как происходит доставка ?</span>
                        </summary>
                        Текст
                    </details>
                

                
                    <details className='detail_question'>
                        <summary className='summary_question'> 
                            <span className='summary_txt'>Как оформить заказ ?</span>
                        </summary>
                        Текст
                    </details>
                

                
                    <details className='detail_question'>
                        <summary className='summary_question'> 
                            <span className='summary_txt'>Вся продукция оригинальная ?</span>
                        </summary>
                        Текст
                    </details>
                

                
                    <details className='detail_question'>
                        <summary className='summary_question'> 
                            <span className='summary_txt'>Почему цена зависит от размера ?</span>
                        </summary>
                        Текст
                    </details>
                

                
                    <details className='detail_question'>
                        <summary className='summary_question'> 
                            <span className='summary_txt'>Как формируются цены на сайте ?</span>
                        </summary>
                        Текст
                    </details>
                

                
                    <details className='detail_question'>
                        <summary className='summary_question'> 
                            <span className='summary_txt'>Что делать, если размер мне не подошел ?</span>
                        </summary>
                        Текст
                    </details>
                
            </div>
            <form className='form_ask_a_question'>
                <h3 className='h3_ask_a_question'>Задать вопрос</h3>
                <input type="text" className='input_ask_a_question' placeholder="Написать вопрос..."/>    
                <button className='btn_ask_a_question'>Отправить</button>
            </form>
        </div>
        
    );
}

export default Questions;