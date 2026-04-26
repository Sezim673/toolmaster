import { Link } from 'react-router-dom';
import { Wrench, Instagram, Send, MessageCircle, Music, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="logo-icon"><Wrench size={22} /></div>
              <div className="logo-text">Tool<span>Master</span></div>
            </div>
            <p className="footer-about">ToolMaster — современный интернет-магазин инструментов в Кыргызстане.</p>
            <div className="footer-social">
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Send size={18} /></a>
              <a href="#"><MessageCircle size={18} /></a>
              <a href="#"><Music size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Каталог</h4>
            <ul className="footer-links">
              <li><Link to="/catalog">Электроинструменты</Link></li>
              <li><Link to="/catalog">Сварочное оборудование</Link></li>
              <li><Link to="/catalog">Садовая техника</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Информация</h4>
            <ul className="footer-links">
              <li><a href="/#about">О компании</a></li>
              <li><a href="#">Доставка</a></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-contact">
              <li><MapPin size={16} /><span>г. Бишкек, ул. Киевская, 123</span></li>
              <li><Phone size={16} /><span>+996 700 964 866</span></li>
              <li><Mail size={16} /><span>samarkanovasezim@gmail.com</span></li>
              <li><Clock size={16} /><span>Пн-Сб: 9:00 - 19:00</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ToolMaster. Все права защищены.</p>
          <p>Создано с <Heart size={14} style={{ color: '#00a86b', display: 'inline' }} /> в Бишкеке</p>
        </div>
      </div>
    </footer>
  );
}
