import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "./svg/logo.svg";
import { ReactComponent as WhatsApp } from "./svg/whatsapp.svg";
import { ReactComponent as Telegram } from "./svg/telegram.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";

const Footer = () => {
  return (
    <div className="footer_container container">
      <Logo className="footer_logo" id="top"/>
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
