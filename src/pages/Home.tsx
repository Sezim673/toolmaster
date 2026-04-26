import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShoppingBag, PlayCircle, CheckCircle, Truck, ShieldCheck, HandCoins, Headphones, Tags, Send } from 'lucide-react';
import { Wrench, HardHat, Flame, Leaf, Wind, Droplets, Ruler, Package } from 'lucide-react';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useNotification } from '../context/NotificationContext';

const categoryIcons: Record<string, React.ReactNode> = {
  'screwdriver': <Wrench size={32} />,
  'hard-hat': <HardHat size={32} />,
  'fire': <Flame size={32} />,
  'leaf': <Leaf size={32} />,
  'wind': <Wind size={32} />,
  'droplet': <Droplets size={32} />,
  'ruler': <Ruler size={32} />,
  'toolbox': <Package size={32} />,
};

export default function Home() {
  const { showNotification } = useNotification();
  const emailRef = useRef<HTMLInputElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailRef.current?.value) {
      showNotification('Спасибо за подписку! Мы будем держать вас в курсе.', 'success');
      emailRef.current.value = '';
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Zap size={16} />
              <span>Новая коллекция 2026</span>
            </div>
            <h1 className="hero-title">
              Качественные <span>инструменты</span> для профессионалов
            </h1>
            <p className="hero-description">
              Откройте для себя широкий ассортимент электроинструментов и строительного оборудования от ведущих мировых брендов. Доставка по всему Кыргызстану.
            </p>
            <div className="hero-buttons">
              <Link to="/catalog" className="btn btn-primary">
                <ShoppingBag size={18} />
                Перейти в каталог
              </Link>
              <a href="#about" className="btn btn-secondary">
                <PlayCircle size={18} />
                О компании
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Товаров</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2500+</div>
                <div className="stat-label">Клиентов</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Брендов</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=500&fit=crop"
              alt="Профессиональные инструменты"
            />
            <div className="hero-image-badge">
              <CheckCircle size={40} color="#27ae60" />
              <div className="hero-image-badge-text">
                <span className="big">Гарантия</span>
                <span className="small">2 года на все товары</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="categories">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Наш каталог</span>
            <h2 className="section-title">Популярные категории</h2>
            <p className="section-description">
              Выберите интересующую категорию товаров для просмотра полного ассортимента
            </p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <Link to="/catalog" key={i} className="category-card fade-in" style={{ textDecoration: 'none' }}>
                <div className="category-icon">{categoryIcons[cat.icon]}</div>
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-count">{cat.count}+ товаров</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Хиты продаж</span>
            <h2 className="section-title">Популярные товары</h2>
            <p className="section-description">Самые востребованные товары среди наших клиентов</p>
          </div>
          <div className="products-grid">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/catalog" className="btn btn-primary">
              <Tags size={18} />
              Смотреть весь каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Почему мы</span>
            <h2 className="section-title">Наши преимущества</h2>
            <p className="section-description">Мы делаем всё, чтобы ваш шоппинг был комфортным и выгодным</p>
          </div>
          <div className="features-grid">
            {[
              { icon: <Truck size={48} />, title: 'Быстрая доставка', text: 'Доставка по Бишкеку в день заказа, по Кыргызстану - 1-3 дня' },
              { icon: <ShieldCheck size={48} />, title: 'Гарантия качества', text: 'Официальная гарантия на все товары от 1 до 3 лет' },
              { icon: <HandCoins size={48} />, title: 'Выгодные цены', text: 'Прямые поставки от производителей без посредников' },
              { icon: <Headphones size={48} />, title: 'Поддержка 24/7', text: 'Консультации специалистов в любое время суток' },
            ].map((f, i) => (
              <div className="feature-card fade-in" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-content">
            <p className="banner-subtitle">Специальное предложение</p>
            <h2 className="banner-title">Скидки до 40% на сезонные товары!</h2>
            <p className="banner-text">Только до конца месяца специальные цены на садовую технику, насосы и строительное оборудование.</p>
            <Link to="/catalog" className="btn btn-primary">
              <Tags size={18} />
              Смотреть акции
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">О компании</span>
            <h2 className="section-title">ToolMaster - ваш надёжный партнёр</h2>
          </div>
          <div className="about-grid">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                alt="О компании ToolMaster"
                className="about-image"
              />
            </div>
            <div>
              <p className="about-text">
                <strong>ToolMaster</strong> — это современный интернет-магазин инструментов, созданный молодой и амбициозной командой предпринимателей. Мы верим, что качественные инструменты должны быть доступны каждому.
              </p>
              <p className="about-text">
                Наша миссия — обеспечить профессионалов и домашних мастеров лучшим оборудованием по честным ценам. Мы работаем напрямую с производителями.
              </p>
              <div style={{ marginTop: '30px' }}>
                <a href="#team" className="btn btn-primary">Познакомиться с командой</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Наша команда</span>
            <h2 className="section-title">Молодые и амбициозные</h2>
            <p className="section-description">Мы — предприниматели, объединённые общей идеей создать лучший магазин инструментов в Кыргызстане</p>
          </div>
          <div className="team-grid">
            <div className="team-card fade-in">
              <div className="team-image">
                <img
                 src="/img/IMG_20260314_154844.jpg"
                  alt="Самарканова Сезим"
                />
                <div className="team-social">
                  <a href="#"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                  <a href="#"><Send size={18} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Самарканова Сезим</h3>
                <p className="team-role">Генеральный директор</p>
                <p className="team-age">17 лет</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2 className="newsletter-title">Подпишитесь на рассылку</h2>
          <p className="newsletter-text">Получайте информацию о новых поступлениях и специальных предложениях первыми!</p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input ref={emailRef} type="email" className="newsletter-input" placeholder="Введите ваш email" required />
            <button type="submit" className="newsletter-btn">
              <Send size={16} />
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
