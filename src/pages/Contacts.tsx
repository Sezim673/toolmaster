import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Building2, Send, Clock, Instagram } from 'lucide-react';
import { useNotification } from '../context/NotificationContext';

export default function Contacts() {
  const { showNotification } = useNotification();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Спасибо! Ваше сообщение отправлено.', 'success');
    formRef.current?.reset();
  };

  return (
    <>
      <section className="contacts-hero">
        <div className="container">
          <h1>Свяжитесь с нами</h1>
          <p>Мы всегда рады помочь вам с выбором инструментов и ответить на вопросы</p>
        </div>
      </section>

      <section className="contacts-section">
        <div className="container">
          <div className="contacts-grid">
            {/* Info */}
            <div>
              <div className="contact-info-card">
                <h3><MapPin size={20} style={{ color: '#00a86b', marginRight: 10 }} />Наш адрес</h3>
                <div className="contact-item">
                  <div className="contact-icon"><Building2 size={22} /></div>
                  <div className="contact-text">
                    <h4>Главный офис</h4>
                    <p>г. Бишкек, ул. Киевская, 123</p>
                    <p>ТЦ "Строитель", 2 этаж, офис 45</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={22} /></div>
                  <div className="contact-text">
                    <h4>Телефоны</h4>
                    <p><a href="tel:+996700964866">+996 700 964 866</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={22} /></div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p><a href="mailto:samarkanovasezim@gmail.com">samarkanovasezim@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Социальные сети</h3>
                <p style={{ color: '#4a6a5d', marginBottom: 20 }}>Подписывайтесь на нас!</p>
                <div className="social-links">
                  <a href="#" className="social-link"><Instagram size={22} /></a>
                  <a href="#" className="social-link"><Send size={22} /></a>
                  <a href="#" className="social-link">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>

              <div className="working-hours">
                <h4><Clock size={18} style={{ marginRight: 10 }} />Режим работы</h4>
                <ul className="hours-list">
                  <li><span>Понедельник - Пятница</span><span>9:00 - 19:00</span></li>
                  <li><span>Суббота</span><span>10:00 - 17:00</span></li>
                  <li><span>Воскресенье</span><span>Выходной</span></li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="contact-form-card">
                <h3><Send size={20} style={{ color: '#00a86b', marginRight: 10 }} />Напишите нам</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Ваше имя *</label>
                    <input type="text" className="form-control" placeholder="Введите ваше имя" required />
                  </div>
                  <div className="form-group">
                    <label>Телефон *</label>
                    <input type="tel" className="form-control" placeholder="+996 ___ ___ ___" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="example@mail.com" />
                  </div>
                  <div className="form-group">
                    <label>Тема обращения</label>
                    <select className="form-control">
                      <option value="">Выберите тему</option>
                      <option>Вопрос по заказу</option>
                      <option>Вопрос по товару</option>
                      <option>Доставка</option>
                      <option>Гарантия и возврат</option>
                      <option>Сотрудничество</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Сообщение *</label>
                    <textarea className="form-control" placeholder="Опишите ваш вопрос..." required />
                  </div>
                  <button type="submit" className="submit-btn">
                    <Send size={16} style={{ marginRight: 8 }} />
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4841656713944!2d74.5829!3d42.8746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUyJzI4LjYiTiA3NMKwMzQnNTguNCJF!5e0!3m2!1sru!2skg!4v1234567890"
                allowFullScreen
                loading="lazy"
                title="ToolMaster на карте"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
