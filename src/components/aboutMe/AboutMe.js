import React from 'react';
import './AboutMe.css'
const AboutMe = () => {

    return (
    <div className="aboutMe_screen">
        
        <div className='container_AboutMe container' id="aboutMe">
        
        <div className='aboutMe_titleContainer'>
            <span className='aboutMe_titleBack'>ОБО МНЕ</span>
            <h2 className='aboutMe_title'>ОБО МНЕ</h2>
        </div> 
        
            <p className='txt_AboutMe'>
                Lorem Ipsum является текст-заполнитель обычно 
                используется в графических, печать и издательской индустрии 
                для предварительного просмотра макета и визуальных макетах.
                Lorem Ipsum является текст-заполнитель обычно 
                используется в графических, печать и издательской индустрии 
                для предварительного просмотра макета и визуальных макетах.
                Lorem Ipsum является текст-заполнитель обычно 
                используется в графических, печать и издательской индустрии 
                для предварительного просмотра макета и визуальных макетах.
            </p>
        </div>
        <div className='aboutMe_square'>
        </div>
    </div>
    );
}

export default AboutMe;