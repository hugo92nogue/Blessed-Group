/* Blessed Group site — top sections. Exposes window.BGParts1 */
(function () {
const NS = window.BlessedGroupDesignSystem_048f3d;
const { Button, Eyebrow, Stat, ServiceCard } = NS;
const I = window.BGIcons;
const D = window.BGData;
const LOGO = 'assets/logo.png';

/* ---------------- Header ---------------- */
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const solid = scrolled || open;
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: solid ? 'var(--white)' : 'transparent',
      boxShadow: solid ? 'var(--shadow-md)' : 'none',
      transition: 'background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)',
        height: solid ? 72 : 88, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'height var(--dur-base) var(--ease-soft)',
      }}>
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={LOGO} alt="Blessed Group" style={{ height: solid ? 42 : 50, width: 'auto', transition: 'height var(--dur-base)', filter: solid ? 'none' : 'drop-shadow(0 2px 8px rgba(0,0,0,.35))' }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }} className="bg-desk-nav">
          {D.nav.map((n) => (
            <a key={n.href} href={n.href} style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 600,
              color: solid ? 'var(--text-strong)' : 'var(--white)',
              textShadow: solid ? 'none' : '0 1px 6px rgba(0,0,0,.4)',
              transition: 'color var(--dur-fast)',
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand)'}
               onMouseLeave={(e) => e.currentTarget.style.color = solid ? 'var(--text-strong)' : 'var(--white)'}>
              {n.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="bg-desk-cta"><Button variant="primary" size="sm" iconRight={<I.ArrowRight size={16} />} onClick={() => goto('#contacto')}>Solicitar cotización</Button></span>
          <button className="bg-burger" aria-label="Menú" onClick={() => setOpen(!open)} style={{
            display: 'none', width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer',
            color: solid ? 'var(--text-strong)' : 'var(--white)',
          }}>{open ? <I.X /> : <I.Menu />}</button>
        </div>
      </div>
      {open && (
        <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border-subtle)', padding: '12px var(--container-px) 20px' }}>
          {D.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)',
              fontWeight: 600, color: 'var(--text-strong)', borderBottom: '1px solid var(--slate-100)',
            }}>{n.label}</a>
          ))}
          <div style={{ marginTop: 16 }}><Button variant="primary" fullWidth onClick={() => { setOpen(false); goto('#contacto'); }}>Solicitar cotización</Button></div>
        </div>
      )}
    </header>
  );
}

function goto(hash) {
  const el = document.querySelector(hash);
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
}

/* ---------------- Hero ---------------- */
function Hero() {
  const slides = D.hero;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);
  const go = (n) => setI((n + slides.length) % slides.length);
  return (
    <section id="inicio" style={{ position: 'relative', height: '100vh', minHeight: 620, overflow: 'hidden' }}>
      {slides.map((s, idx) => (
        <div key={idx} style={{
          position: 'absolute', inset: 0, opacity: idx === i ? 1 : 0,
          transition: 'opacity 900ms var(--ease-soft)', pointerEvents: idx === i ? 'auto' : 'none',
        }}>
          <div style={{
            position: 'absolute', inset: 0, background: `url("${s.image}") center/cover no-repeat`,
            transform: idx === i ? 'scale(1.06)' : 'scale(1)', transition: 'transform 7s var(--ease-out)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(15,23,42,.82) 0%, rgba(15,23,42,.55) 45%, rgba(15,23,42,.25) 100%)' }} />
        </div>
      ))}
      <div style={{
        position: 'relative', height: '100%', maxWidth: 'var(--container)', margin: '0 auto',
        padding: '0 var(--container-px)', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{ maxWidth: 720 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22,
            padding: '8px 16px', borderRadius: 'var(--radius-full)',
            background: 'rgba(229,43,80,.16)', border: '1px solid rgba(229,43,80,.5)',
            backdropFilter: 'blur(6px)', color: 'var(--white)',
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 700,
            letterSpacing: '.06em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)' }} />
            {slides[i].eyebrow}
          </span>
          <h1 key={i} style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', lineHeight: 1.02, letterSpacing: '-.025em',
            color: 'var(--white)',
          }}>{slides[i].title}</h1>
          <p style={{
            margin: '20px 0 0', maxWidth: 560, fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', lineHeight: 1.5, fontWeight: 500,
            color: 'rgba(255,255,255,.92)',
          }}>{slides[i].subtitle}</p>
          <p style={{ margin: '10px 0 0', maxWidth: 540, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)', color: 'rgba(255,255,255,.72)' }}>{slides[i].text}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <Button variant="primary" size="lg" iconRight={<I.ArrowRight size={18} />} onClick={() => goto('#contacto')}>Solicitar cotización</Button>
            <Button variant="ghost" size="lg" onClick={() => goto('#servicios')} style={{ color: 'var(--white)', border: '2px solid rgba(255,255,255,.4)' }}>Ver servicios</Button>
          </div>
        </div>
      </div>
      {/* controls */}
      <div style={{
        position: 'absolute', bottom: 34, left: 0, right: 0, maxWidth: 'var(--container)',
        margin: '0 auto', padding: '0 var(--container-px)', display: 'flex', alignItems: 'center', gap: 18,
      }}>
        <button aria-label="Anterior" onClick={() => go(i - 1)} style={ctrlStyle}><I.ChevronLeft size={20} /></button>
        <button aria-label="Siguiente" onClick={() => go(i + 1)} style={ctrlStyle}><I.ChevronRight size={20} /></button>
        <div style={{ display: 'flex', gap: 8, marginLeft: 6 }}>
          {slides.map((_, idx) => (
            <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => go(idx)} style={{
              width: idx === i ? 32 : 10, height: 10, borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer',
              background: idx === i ? 'var(--brand)' : 'rgba(255,255,255,.5)', transition: 'all var(--dur-base) var(--ease-soft)',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
const ctrlStyle = {
  width: 48, height: 48, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.35)', color: 'var(--white)',
  cursor: 'pointer', backdropFilter: 'blur(6px)',
};

/* ---------------- About ---------------- */
function About() {
  const a = D.about;
  return (
    <section id="nosotros" style={{ padding: 'var(--section-y) 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="bg-about-grid">
        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', aspectRatio: '4/5' }}>
            <img src={a.image} alt="Blessed Group" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{
            position: 'absolute', right: -18, bottom: -18, background: 'var(--overlay-brand)',
            color: 'var(--white)', padding: '22px 26px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-brand)',
          }} className="bg-about-float">
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.4rem', lineHeight: 1, letterSpacing: '-.02em' }}>{a.floatValue}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 600, opacity: .92, marginTop: 4 }}>{a.floatLabel}</div>
          </div>
        </div>
        <div>
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.12, letterSpacing: '-.02em', color: 'var(--text-strong)', textWrap: 'balance' }}>{a.title}</h2>
          <p style={{ margin: '22px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)', lineHeight: 1.65, color: 'var(--text-body)' }}>{a.body}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '28px 0 32px' }}>
            {a.features.map((f) => {
              const Ico = I[f.icon];
              return (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ico size={22} /></span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', fontWeight: 600, color: 'var(--text-strong)' }}>{f.label}</span>
                </div>
              );
            })}
          </div>
          <Button variant="secondary" iconRight={<I.ArrowRight size={18} />} onClick={() => goto('#proyectos')}>Conocé más</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  return (
    <section style={{ background: 'var(--overlay-brand)', padding: 'var(--space-16) 0' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }} className="bg-stats-grid">
        {D.stats.map((s) => {
          const Ico = I[s.icon];
          return <Stat key={s.label} icon={<Ico size={34} />} value={s.value} suffix={s.suffix} label={s.label} tone="onBrand" />;
        })}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section id="servicios" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-subtle)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Eyebrow align="center">Nuestros servicios</Eyebrow></div>
          <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.02em', color: 'var(--text-strong)' }}>Soluciones integrales de construcción</h2>
          <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)', color: 'var(--text-body)' }}>Acompañamos cada etapa de tu obra, del diseño a la entrega final.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="bg-services-grid">
          {D.services.map((s) => {
            const Ico = I[s.icon];
            return <ServiceCard key={s.title} icon={<Ico size={28} />} title={s.title} description={s.desc} linkLabel="Más información" onClick={() => goto('#contacto')} />;
          })}
        </div>
      </div>
    </section>
  );
}

window.BGParts1 = { Header, Hero, About, Stats, Services, goto };
})();
