import React from 'react';
import './AboutMe.css'
const AboutMe = () => {

    return (
    <div className="aboutMe_screen">
        
        <div className='container_AboutMe container' id="aboutMe">
        
        <div className='aboutMe_container_h2'>
            <span className='aboutMe_back'>ОБО МНЕ</span>
            <h2 className='aboutMe_h2'>ОБО МНЕ</h2>
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