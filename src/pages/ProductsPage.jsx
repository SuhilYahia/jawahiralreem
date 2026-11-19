import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { productsData, productCategories } from '../data/products';
import { siteConfig } from '../config/site';
import PageHeader from '../components/common/PageHeader';
import ProductCard from '../components/ui/ProductCard';
import AnimatedSection from '../components/common/AnimatedSection';
import { Search, SlidersHorizontal, Sparkles, MessageCircle, Truck, ShieldCheck, ShoppingBag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const { language, t } = useLanguage();

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          activeCategory === 'all' || product.category === activeCategory;

        const name = (product['name_' + language] || product.name_ar).toLowerCase();
        const desc = (product['description_' + language] || product.description_ar).toLowerCase();
        const cat = (product['categoryName_' + language] || product.categoryName_ar).toLowerCase();
        const q = searchQuery.toLowerCase().trim();

        const matchesSearch = q === '' || name.includes(q) || desc.includes(q) || cat.includes(q);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
        return 0;
      });
  }, [activeCategory, searchQuery, sortBy, language]);

  return (
    <div className="pb-28">
      {/* Page Header */}
      <PageHeader
        badge={t('sections.productsBadge')}
        title={t('sections.productsTitle')}
        subtitle={t('sections.productsDesc')}
        breadcrumbs={[{ label: t('nav.products') }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16">
        
        {/* Filter & Search Bar with Clean Spacing */}
        <div className="bg-white rounded-3xl border border-brand-primary/20 p-6 sm:p-7 shadow-soft mb-12">
          <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
            
            {/* Search Input (Touch Target 48px) */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('actions.searchPlaceholder')}
                className="w-full pl-4 pr-12 py-3.5 min-h-[48px] bg-brand-rose/25 border border-brand-primary/25 rounded-2xl text-xs sm:text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary focus:bg-white transition-all font-normal"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-brand-dark p-1 rounded font-medium"
                >
                  {language === 'ar' ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>

            {/* Sort Dropdown (Touch Target 48px) */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-medium text-brand-dark whitespace-nowrap flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{t('actions.sort')}</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="min-h-[48px] px-4 py-2.5 bg-brand-rose/30 border border-brand-primary/30 rounded-xl text-xs sm:text-sm font-medium text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary/30 cursor-pointer"
              >
                <option value="popular">{t('actions.sortPopular')}</option>
                <option value="price-low">{t('actions.sortPriceLow')}</option>
                <option value="price-high">{t('actions.sortPriceHigh')}</option>
                <option value="rating">{t('actions.sortRating')}</option>
              </select>
            </div>

          </div>

          {/* Category Tabs with Ample Gap and Touch Target */}
          <div className="flex items-center gap-3 overflow-x-auto pt-6 mt-6 border-t border-brand-rose pb-1 scrollbar-none">
            {productCategories.map((cat) => {
              const active = activeCategory === cat.id;
              const catName = cat['name_' + language] || cat.name_ar;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`min-h-[48px] px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? 'bg-brand-dark text-white shadow-soft scale-105'
                      : 'bg-brand-rose/60 text-brand-dark hover:bg-brand-rose'
                  }`}
                >
                  <span>{catName}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-brand-gold" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between mb-8 px-1">
          <p className="text-xs sm:text-sm text-brand-text-muted font-normal">
            {language === 'ar'
              ? `يتم عرض ${filteredProducts.length} منتج`
              : `Showing ${filteredProducts.length} products`}
          </p>
          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-dark hover:text-brand-primary-dark transition-colors"
          >
            <span>{language === 'ar' ? 'المتجر الإلكتروني المباشر' : 'Visit Online Storefront'}</span>
            <ExternalLink className="w-4 h-4 text-brand-gold" />
          </a>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-brand-primary/20 p-16 text-center shadow-soft">
            <Sparkles className="w-12 h-12 text-brand-gold mx-auto mb-4 opacity-60" />
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">
              {language === 'ar' ? 'لم نعثر على منتجات مطابقة لبحثك' : 'No matching products found'}
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted mb-6 font-normal">
              {language === 'ar' ? 'جربي البحث بكلمات أخرى أو اختاري تصنيفاً مختلفاً' : 'Try adjusting your search query or reset the filter'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-xl text-xs sm:text-sm font-medium hover:bg-brand-darker transition-colors"
            >
              {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
            </button>
          </div>
        )}

        {/* Wholesale & Salons Banner */}
        <div className="mt-20 bg-gradient-to-r from-brand-rose/70 via-brand-rose/40 to-brand-sand/30 rounded-3xl border border-brand-primary/30 p-8 sm:p-12 shadow-soft text-start">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-dark bg-white px-3.5 py-1.5 rounded-full border border-brand-primary/20">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{language === 'ar' ? 'خدمة وتوريد الصالونات والمشاغل النسائية' : 'Professional Salon & Spa Supply Service'}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-[1.4]">
                {language === 'ar'
                  ? 'هل تديرين صالون تجميل أو مشغلاً؟ نوفر لكِ أسعار جملة حصرية ومباشرة!'
                  : 'Managing a beauty salon or spa? Enjoy exclusive direct factory wholesale pricing!'}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-2xl font-normal">
                {language === 'ar'
                  ? 'انضمي إلى مئات الصالونات التي تعتمد حلاوة جواهر الريم ورذاذ روز كير كخيار أساسي لخدمة عميلاتهن بجودة ثابتة وتوفير مالي كبير مع فواتير ضريبية معتمدة وتوريد دوري سريع.'
                  : 'Partner with hundreds of beauty establishments relying on Jawahir Alreem master cartons for dependable salon performance, substantial savings, and official tax invoices.'}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(language === 'ar' ? 'مرحباً جواهر الريم، أود الاستفسار عن باقات الجملة للمشاغل وصالونات التجميل.' : 'Hello Jawahir Alreem, I would like to inquire about wholesale salon bundles.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{language === 'ar' ? 'طلب تسعيرة جملة عبر واتساب' : 'Request Wholesale Quote via WhatsApp'}</span>
              </a>
              <Link
                to="/contact"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-white text-brand-dark border border-brand-primary/30 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-medium hover:bg-brand-rose transition-colors"
              >
                <span>{t('nav.contact')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Guarantees Strip with High Contrast */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 text-start">
          <div className="p-6 rounded-2xl bg-white border border-brand-primary/20 shadow-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-rose flex items-center justify-center text-brand-dark shrink-0">
              <Truck className="w-6 h-6 text-brand-dark" />
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-dark">{t('hero.trust3')}</div>
              <div className="text-xs text-brand-text-muted mt-0.5 font-normal">{language === 'ar' ? 'توصيل آمن لباب منزلك أو مشغلك' : 'Reliable delivery to your door or salon'}</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-primary/20 shadow-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-rose flex items-center justify-center text-brand-dark shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-dark">{t('hero.trust2')}</div>
              <div className="text-xs text-brand-text-muted mt-0.5 font-normal">{language === 'ar' ? 'مباشرة من المصنع في المدينة المنورة' : 'Directly from our factory in Madinah'}</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-primary/20 shadow-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-rose flex items-center justify-center text-brand-dark shrink-0">
              <ShoppingBag className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-dark">{language === 'ar' ? 'خيارات دفع إلكتروني آمنة' : 'Secure Online Payment'}</div>
              <div className="text-xs text-brand-text-muted mt-0.5 font-normal">{language === 'ar' ? 'مدى، فيزا، ماستركارد، وأبل باي' : 'Mada, Visa, Mastercard, Apple Pay'}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
