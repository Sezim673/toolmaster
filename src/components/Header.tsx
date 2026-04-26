import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Phone, Wrench, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, cartCount } = useCart();
  const { showNotification } = useNotification();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleCartClick = () => {
    if (cart.length === 0) {
      showNotification('Корзина пуста. Добавьте товары!', 'info');
    } else {
      showNotification(`В корзине ${cartCount} товаров`, 'success');
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <div className="logo-icon"><Wrench size={24} /></div>
          <div className="logo-text">Tool<span>Master</span></div>
        </Link>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Главная</NavLink>
          <NavLink to="/catalog" className="nav-link" onClick={() => setMenuOpen(false)}>Каталог</NavLink>
          <a href="/#about" className="nav-link" onClick={() => setMenuOpen(false)}>О нас</a>
          <a href="/#team" className="nav-link" onClick={() => setMenuOpen(false)}>Команда</a>
          <NavLink to="/contacts" className="nav-link" onClick={() => setMenuOpen(false)}>Контакты</NavLink>
        </nav>

        <div className="header-actions">
          <a href="tel:+996700964866" className="header-phone">
            <Phone size={18} />
            <span>+996 700 964 866</span>
          </a>
          <button className="cart-btn" onClick={handleCartClick}>
            <ShoppingCart size={20} />
            <span className="cart-count">{cartCount}</span>
          </button>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
