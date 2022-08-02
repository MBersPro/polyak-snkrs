import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "./svg/logo.svg";
import { ReactComponent as WhatsApp } from "./svg/whatsapp.svg";
import { ReactComponent as Telegram } from "./svg/telegram.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import { ReactComponent as Mail } from "./svg/mail.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";

const Footer = () => {
  return (
    <div className="footer_container container">
      <Logo className="footer_logo" id="top"/>
        <div className='footer_container-link'><a href="tel:+79851981025" className='link_footer'><Phone className='svg_icon_phone_footer'/><span className='value_li_footer'>+7 (985) 1981025</span></a></div>
        <div className='footer_container-link'><a href="mailto:andreypolyak9@gmail.com" className='link_footer'><Mail className='svg_icon_mail_footer'/><span className='value_li_footer'>andreypolyak9@gmail.com</span></a></div>
      <ul className="footer_icons_container">
        
        <li className="footer_icon_container">
          <a href="https://wa.me/79851981025">
            <WhatsApp className="footer_icons" />
          </a>
        </li>
        <li className="footer_icon_container">
          <a href="tg://resolve?domain=polyak9">
            <Telegram className="footer_icons" />
          </a>
        </li>
        <li className="footer_icon_container">
          <a href="https://instagram.com/polyaksnkrs?igshid=YmMyMTA2M2Y=">
            <Instagram className="footer_icons" />
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Footer;
