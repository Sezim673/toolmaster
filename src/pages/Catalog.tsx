import { useState, useEffect } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { products as allProducts, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const brands = ['Bosch', 'Makita', 'DeWalt', 'Metabo', 'Fubag', 'Hikoki', 'Crown'];

export default function Catalog() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sort, setSort] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filtered, setFiltered] = useState(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applyFilters = () => {
    let result = [...allProducts];
    if (priceFrom) result = result.filter(p => p.price >= Number(priceFrom));
    if (priceTo) result = result.filter(p => p.price <= Number(priceTo));

    let sorted = result;
    if (sort === 'price_asc') sorted = result.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') sorted = result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') sorted = result.sort((a, b) => b.rating - a.rating);
    setFiltered(sorted);
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="catalog-hero">
        <div className="container">
          <h1>Каталог товаров</h1>
          <p>Более 5000 наименований качественных инструментов и оборудования</p>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="catalog-container">
            {/* Sidebar */}
            <aside className="catalog-sidebar">
              <div className="filter-section">
                <h3 className="filter-title">Категории</h3>
                <ul className="filter-list">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.title)}
                          onChange={() => toggleCategory(cat.title)}
                        />
                        {cat.title}
                        <span style={{ marginLeft: 'auto', color: '#b2bec3' }}>{cat.count}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Бренды</h3>
                <ul className="filter-list">
                  {brands.map(brand => (
                    <li key={brand}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                        />
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Цена (сом)</h3>
                <div className="price-range">
                  <input
                    type="number"
                    className="price-input"
                    placeholder="От"
                    value={priceFrom}
                    onChange={e => setPriceFrom(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    className="price-input"
                    placeholder="До"
                    value={priceTo}
                    onChange={e => setPriceTo(e.target.value)}
                  />
                </div>
                <button className="apply-filter-btn" onClick={applyFilters}>
                  Применить фильтры
                </button>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Наличие</h3>
                <ul className="filter-list">
                  <li><label><input type="checkbox" defaultChecked /> В наличии</label></li>
                  <li><label><input type="checkbox" /> Под заказ</label></li>
                  <li><label><input type="checkbox" /> Акционные товары</label></li>
                </ul>
              </div>
            </aside>

            {/* Products */}
            <div className="catalog-content">
              <div className="catalog-header">
                <p className="results-count">
                  Найдено <strong>{filtered.length}</strong> товаров
                </p>
                <div className="catalog-controls">
                  <select
                    className="sort-select"
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                  >
                    <option value="popular">По популярности</option>
                    <option value="price_asc">По цене (сначала дешевые)</option>
                    <option value="price_desc">По цене (сначала дорогие)</option>
                    <option value="rating">По рейтингу</option>
                  </select>
                  <div className="view-btns">
                    <button
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <LayoutGrid size={18} />
                    </button>
                    <button
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`catalog-products ${viewMode === 'list' ? 'list-view' : ''}`}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button className="page-btn">‹</button>
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} className={`page-btn ${n === 1 ? 'active' : ''}`}>{n}</button>
                ))}
                <button className="page-btn">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
