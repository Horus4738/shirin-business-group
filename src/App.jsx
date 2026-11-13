import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, Award, Building2, Check, ChevronDown, Factory,
  FlaskConical, HardHat, Menu, Mountain, Shield, ShoppingCart, Star,
  Target, Truck, Users, X, Zap,
} from 'lucide-react';

const features = [
  { icon: Mountain, title: 'Добыча полезных ископаемых', desc: 'Современные технологии разработки месторождений с соблюдением экологических стандартов и требований безопасности.' },
  { icon: Building2, title: 'Строительство', desc: 'Полный цикл строительных работ: от проектирования до сдачи объектов под ключ — промышленных и гражданских.' },
  { icon: Factory, title: 'Производство материалов', desc: 'Собственное производство строительных материалов: бетон, железобетонные изделия, щебень и песок.' },
  { icon: FlaskConical, title: 'Химическая продукция', desc: 'Качественные химические составы для промышленности и строительства с контролем и сертификацией.' },
  { icon: ShoppingCart, title: 'Оптовая и розничная торговля', desc: 'Широкая дилерская сеть, прямые поставки и гибкие условия для партнёров и розничных клиентов.' },
  { icon: Shield, title: 'Комплексные решения', desc: 'Объединяем наши направления, чтобы реализовывать крупные проекты любой сложности под ключ.' },
];
const steps = [
  { icon: Target, title: 'Анализ и проектирование', desc: 'Изучаем задачу, проводим необходимые изыскания и разрабатываем техническое решение.' },
  { icon: Truck, title: 'Производство и логистика', desc: 'Обеспечиваем объект материалами собственного производства и организуем поставки.' },
  { icon: Award, title: 'Реализация и контроль', desc: 'Выполняем работы с контролем качества на каждом этапе и сдаём объект с гарантией.' },
];
const testimonials = [
  { name: 'Александр Петров', role: 'Директор по строительству, ГК «Вертикаль»', text: 'Ширин Бизнес Групп стал нашим ключевым партнёром по поставке строительных материалов. Стабильное качество и точные сроки — редкость в этой сфере.' },
  { name: 'Марина Соколова', role: 'Главный инженер, «ПромСтройПроект»', text: 'Работаем вместе на крупных промышленных объектах уже три года. Впечатляет компетентность в вопросах добычи и переработки сырья.' },
  { name: 'Тимур Жумабаев', role: 'Владелец сети «СтройМаркет»', text: 'Надёжный поставщик с честными ценами. Их химическая продукция пользуется стабильным спросом у наших клиентов.' },
];
const plans = [
  { name: 'Базовый', monthly: '50 000', yearly: '45 000', desc: 'Для небольших проектов и стартапов', features: ['Поставка материалов', 'Консультация специалиста', 'Стандартная логистика', 'Договорная поддержка'] },
  { name: 'Про', monthly: '150 000', yearly: '128 000', desc: 'Оптимально для растущего бизнеса', popular: true, features: ['Всё из тарифа «Базовый»', 'Приоритетные поставки', 'Технический супервайзинг', 'Гибкие условия оплаты', 'Персональный менеджер'] },
  { name: 'Энтерпрайз', monthly: 'Индивидуально', yearly: 'Индивидуально', desc: 'Для крупных инфраструктурных проектов', custom: true, features: ['Всё из тарифа «Про»', 'Выделенная команда', 'Индивидуальное производство', 'Финансирование проектов', 'Поддержка 24/7'] },
];
const faqs = [
  { q: 'Какие регионы обслуживает компания?', a: 'Основная деятельность сосредоточена в Кыргызстане. Возможны поставки в соседние страны Центральной Азии; логистика согласуется под проект.' },
  { q: 'Есть ли у вас собственное производство?', a: 'Да. Мы контролируем полный цикл — от добычи сырья до выпуска готовой продукции, что помогает поддерживать качество и конкурентные цены.' },
  { q: 'Работаете ли вы с государственными заказчиками?', a: 'Мы участвуем в закупках и тендерах. Документы и условия сотрудничества предоставляются по запросу.' },
  { q: 'Какие сроки поставки материалов?', a: 'Сроки зависят от наличия, объёма и специфики заказа. Сообщите нам, что вам нужно, — мы подготовим точный график.' },
  { q: 'Предоставляете ли вы гарантию на работы?', a: 'Гарантийные условия согласуются для каждого проекта и фиксируются в договоре. На материалы действует гарантия производителя.' },
  { q: 'Как стать дилером компании?', a: 'Оставьте заявку через форму или свяжитесь с отделом продаж. Мы расскажем об условиях партнёрства и поддержке дилеров.' },
];
const stats = [
  { value: 8, suffix: '+', label: 'лет на рынке' },
  { value: 500, suffix: '+', label: 'реализованных проектов' },
  { value: 120, suffix: 'K', label: 'тонн добычи в год' },
  { value: 98, suffix: '%', label: 'довольных клиентов' },
];

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent('Запрос с сайта Shirin Business Group');
    const body = encodeURIComponent(`Здравствуйте! Хочу обсудить проект. Мой email: ${email.trim()}`);
    window.location.href = `mailto:draglordshadow@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Ширин Бизнес Групп — на главную">
            <span className="brand-mark"><Mountain size={23} strokeWidth={2.2} /></span>
            <span>Ширин <b>Бизнес Групп</b></span>
          </a>
          <nav className="desktop-nav" aria-label="Главная навигация">
            <a href="#features">Направления</a><a href="#process">Процесс</a><a href="#pricing">Сотрудничество</a><a href="#faq">Вопросы</a>
          </nav>
          <a className="button button-small" href="#contact">Обсудить проект <ArrowRight size={16} /></a>
          <button className="menu-button" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu /></button>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? 'visible' : ''}`} onClick={closeMenu} aria-hidden="true" />
      <nav className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
        <div className="drawer-top"><span className="brand"><span className="brand-mark"><Mountain size={21} /></span>Ширин Бизнес Групп</span><button aria-label="Закрыть меню" onClick={closeMenu}><X /></button></div>
        <a href="#features" onClick={closeMenu}>Направления <ArrowRight size={18} /></a><a href="#process" onClick={closeMenu}>Процесс <ArrowRight size={18} /></a><a href="#pricing" onClick={closeMenu}>Сотрудничество <ArrowRight size={18} /></a><a href="#faq" onClick={closeMenu}>Вопросы <ArrowRight size={18} /></a>
        <a className="button" href="#contact" onClick={closeMenu}>Обсудить проект <ArrowRight size={17} /></a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" /><div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="hero-tag"><span className="live-dot" /><Zap size={15} /> ПРОМЫШЛЕННЫЙ ХОЛДИНГ ПОЛНОГО ЦИКЛА</div>
              <h1>Создаём основу<br />для <span className="gradient-text">больших свершений</span></h1>
              <p className="hero-description">Добыча, строительство и производство — объединённые экспертизой, надёжными технологиями и ответственностью за результат.</p>
              <div className="hero-actions"><a className="button" href="#contact">Обсудить проект <ArrowRight size={18} /></a><a className="button button-outline" href="#features">О компании <ArrowDown size={17} /></a></div>
              <div className="hero-proof"><span><Shield size={17} /> Ответственный подход</span><i /><span><Users size={17} /> Команда экспертов</span><i /><span><Award size={17} /> Контроль качества</span></div>
            </div>
            <div className="hero-visual" aria-label="Промышленное производство">
              <div className="visual-frame"><img src="https://images.unsplash.com/photo-1513828583688-c52646e6b309?auto=format&fit=crop&w=1200&q=85" alt="Промышленный карьер и производственная техника" /><div className="image-shade" />
                <div className="visual-label"><span className="visual-icon"><Mountain size={19} /></span><span><b>Полный цикл</b><small>От сырья до готового решения</small></span><ArrowRight size={18} /></div>
              </div>
              <div className="floating-card"><span className="floating-icon"><Factory size={21} /></span><span><b>Единая система</b><small>производства и поставок</small></span></div>
              <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            </div>
          </div>
          <a className="scroll-hint" href="#stats"><span /> ЛИСТАЙТЕ ВНИЗ</a>
        </section>

        <section className="stats-section" id="stats"><div className="container stats-grid">{stats.map((stat, index) => <div className="stat-item" key={stat.label}><span className="stat-index">0{index + 1}</span><div className="stat-value">{stat.value}<span>{stat.suffix}</span></div><p>{stat.label}</p></div>)}</div></section>

        <section className="section" id="features"><div className="container"><SectionHeading eyebrow="ЧЕМ МЫ ЗАНИМАЕМСЯ" title="Экспертиза, объединённая в систему">Ключевые направления бизнеса работают вместе — чтобы обеспечивать качество и надёжность на каждом этапе.</SectionHeading>
          <div className="feature-grid">{features.map(({ icon: Icon, title, desc }, index) => <article className="feature-card" key={title}><div className="feature-top"><span className="icon-box"><Icon size={23} /></span><span className="card-index">0{index + 1}</span></div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`Подробнее: ${title}`} className="card-arrow"><ArrowRight size={18} /></a></article>)}</div>
        </div></section>

        <section className="process-section section" id="process"><div className="container"><SectionHeading eyebrow="ПОНЯТНЫЙ ПРОЦЕСС" title="От задачи к результату">Работаем прозрачно: вы знаете, что происходит с проектом и какой следующий шаг.</SectionHeading>
          <div className="steps-grid">{steps.map(({ icon: Icon, title, desc }, index) => <article className="step-card" key={title}><div className="step-number">0{index + 1}</div><span className="step-icon"><Icon size={25} /></span><h3>{title}</h3><p>{desc}</p>{index < steps.length - 1 && <span className="step-connector"><ArrowRight size={17} /></span>}</article>)}</div>
        </div></section>

        <section className="section testimonials-section"><div className="container"><SectionHeading eyebrow="НАС РЕКОМЕНДУЮТ" title="Партнёрство, которому доверяют">Долгосрочные отношения строятся на надёжности, открытом диалоге и общем результате.</SectionHeading>
          <div className="testimonial-grid">{testimonials.map((item, index) => <article className="testimonial-card" key={item.name}><div className="stars" aria-label="5 из 5"><Star /><Star /><Star /><Star /><Star /></div><p className="quote">«{item.text}»</p><div className="person"><span className={`avatar avatar-${index + 1}`}>{item.name.split(' ').map((part) => part[0]).join('')}</span><span><b>{item.name}</b><small>{item.role}</small></span></div></article>)}</div>
        </div></section>

        <section className="pricing-section section" id="pricing"><div className="container"><SectionHeading eyebrow="ФОРМАТЫ СОТРУДНИЧЕСТВА" title="Решения под ваши задачи">Начинайте с конкретной потребности — условия и состав работ адаптируем под проект.</SectionHeading>
          <div className="pricing-note"><span>Подписка не нужна</span><span className="note-line" /><span>Условия по договору</span></div>
          <div className="pricing-grid">{plans.map((plan) => <article className={`pricing-card ${plan.popular ? 'featured-plan' : ''}`} key={plan.name}>{plan.popular && <span className="popular-label">ЧАСТО ВЫБИРАЮТ</span>}<p className="plan-kicker">ФОРМАТ {plan.name.toUpperCase()}</p><h3>{plan.name}</h3><p className="plan-desc">{plan.desc}</p><div className="plan-price">{plan.custom ? <span className="custom-price">По запросу</span> : <><b>{yearly ? plan.yearly : plan.monthly}</b><span>сом / месяц</span></>}</div><div className="plan-divider" />
            <ul>{plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul><a className={plan.popular ? 'button' : 'button button-outline'} href="#contact">Запросить условия <ArrowRight size={16} /></a></article>)}</div>
          <div className="pricing-footnote"><Shield size={17} /> Финальная стоимость зависит от объёма, сроков и состава проекта.</div>
        </div></section>

        <section className="faq-section section" id="faq"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">ОТВЕЧАЕМ ОТКРЫТО</span><h2>Частые<br /><span className="gradient-text">вопросы</span></h2><p>Не нашли ответ? Расскажите о своей задаче — поможем разобраться.</p><a href="#contact" className="text-link">Задать вопрос <ArrowRight size={17} /></a></div><div className="faq-list">{faqs.map((faq, index) => <article className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={faq.q}><button className="faq-question" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span><i>0{index + 1}</i>{faq.q}</span><span className="faq-chevron"><ChevronDown size={19} /></span></button><div className="faq-answer"><p>{faq.a}</p></div></article>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="container"><div className="contact-card"><div className="contact-glow" /><div className="contact-content"><span className="eyebrow">ВАШ ПРОЕКТ — НАШ СЛЕДУЮЩИЙ ШАГ</span><h2>Давайте строить<br /><span className="gradient-text">будущее вместе</span></h2><p>Опишите задачу — обсудим подходящее решение и ответим на ваши вопросы.</p><form className="contact-form" onSubmit={handleSubmit}><label className="sr-only" htmlFor="contact-email">Ваш email</label><input id="contact-email" type="email" placeholder="Ваш рабочий email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} required /><button className="button" type="submit">{submitted ? 'Письмо подготовлено' : 'Написать нам'} {submitted ? <Check size={17} /> : <ArrowRight size={17} />}</button></form><small className="form-caption">Откроется ваше почтовое приложение с подготовленным письмом. Отправка выполняется вами.</small></div><div className="contact-decoration"><div className="decoration-ring ring-one" /><div className="decoration-ring ring-two" /><div className="decoration-mark"><Mountain size={76} strokeWidth={1.1} /></div><span className="deco-dot dot-one" /><span className="deco-dot dot-two" /></div></div></div></section>
      </main>

      <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-about"><a className="brand" href="#home"><span className="brand-mark"><Mountain size={22} /></span><span>Ширин <b>Бизнес Групп</b></span></a><p>Промышленный холдинг полного цикла. Создаём решения для развития бизнеса и инфраструктуры.</p></div><div className="footer-column"><span>НАПРАВЛЕНИЯ</span><a href="#features">Добыча сырья</a><a href="#features">Строительство</a><a href="#features">Производство</a><a href="#features">Поставки</a></div><div className="footer-column"><span>КОМПАНИЯ</span><a href="#process">Как мы работаем</a><a href="#pricing">Сотрудничество</a><a href="#faq">Вопросы и ответы</a><a href="#contact">Связаться с нами</a></div><div className="footer-column"><span>КОНТАКТЫ</span><span>Кыргызстан</span><a href="tel:+996709704777">+996 709 704 777</a><a href="mailto:draglordshadow@gmail.com">draglordshadow@gmail.com</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ОсОО «Ширин Бизнес Групп». Все права защищены.</span><a href="#home">В начало ↑</a></div></div></footer>
    </>
  );
}
