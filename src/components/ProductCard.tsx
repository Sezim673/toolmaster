import { useState } from 'react';
import { Heart, Eye, Plus, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    showNotification('Товар добавлен в корзину!', 'success');
  };

  const handleLike = () => {
    setLiked(!liked);
    showNotification(liked ? 'Удалено из избранного' : 'Добавлено в избранное!', liked ? 'info' : 'success');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.floor(rating) ? '#ffc107' : 'none'}
        stroke={i < Math.ceil(rating) ? '#ffc107' : '#ddd'}
      />
    ));
  };

  return (
    <div className="product-card fade-in visible">
      {product.badge && <div className="product-badge">{product.badge}</div>}
      {product.isNew && <div className="product-badge new">Новинка</div>}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <div className="product-actions">
          <button className={`product-action-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
            <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button className="product-action-btn">
            <Eye size={18} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-rating">
          {renderStars(product.rating)}
          <span>({product.reviews} отзывов)</span>
        </div>
        <div className="product-price">
          <div>
            <span className="price-current">{product.price.toLocaleString('ru-RU')} сом</span>
            {product.oldPrice && (
              <span className="price-old">{product.oldPrice.toLocaleString('ru-RU')} сом</span>
            )}
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
