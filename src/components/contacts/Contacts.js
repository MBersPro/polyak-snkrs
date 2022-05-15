import React from 'react';
import { ReactComponent as Mail } from "./svg/mail.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";
import { ReactComponent as WhatsApp } from "./svg/whatsapp.svg";
import { ReactComponent as Telegram } from "./svg/telegram.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import './Contacts.css'
const Contacts = () => {
    return (
        <div>
            <ul className='ul_contacts'>
                <li className='li_contacts'><a href="tel:+79851981025" className='link_contacts'><Phone className='svg_icon_contacts'/><span className='value_li_contacts'>+7 (985) 1981025</span></a></li>
                <li className='li_contacts'><a href="mailto:andreypolyak9@gmail.com" className='link_contacts'><Mail className='svg_icon_contacts'/><span className='value_li_contacts'>andreypolyak9@gmail.com</span></a></li>
            </ul>
            <div className='container_social_media_contacts'>
                <a href="https://wa.me/79851981025" className='social_media_contacts'>
                    <WhatsApp className='icon_socia_media_contacts'/>
                </a>
                <a href="tg://resolve?domain=polyak9" className='social_media_contacts'>
                    <Telegram className='icon_socia_media_contacts'/>
                </a>
                <a href="https://instagram.com/polyaksnkrs?igshid=YmMyMTA2M2Y=" className='social_media_contacts'>
                    <Instagram className='icon_socia_media_contacts'/>
                </a>
            </div>
        </div>
    );
}

export default Contacts;