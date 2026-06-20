/* Blessed Group site — bottom sections. Exposes window.BGParts2 */
(function () {
const NS = window.BlessedGroupDesignSystem_048f3d;
const { Button, Eyebrow, Badge, ProjectCard, Input, Textarea } = NS;
const I = window.BGIcons;
const D = window.BGData;
const LOGO = 'assets/logo.png';
const goto = (h) => window.BGParts1.goto(h);

/* ---------------- Process ---------------- */
function Process() {
  return (
    <section id="proceso" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-dark)', position: 'relative' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div style={{ maxWidth: 640, marginBottom: 52 }}>
          <Eyebrow onDark>Nuestro proceso</Eyebrow>
          <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.02em', color: 'var(--white)' }}>Cómo trabajamos en cada proyecto</h2>
          <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)', color: 'var(--text-on-dark-dim)' }}>Un método probado, del primer boceto a la entrega final.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="bg-process-grid">
          {D.process.map((p) => {
            const Ico = I[p.icon];
            return (
              <div key={p.step} style={{
                position: 'relative', background: 'rgba(255,255,255,.04)', border: '1px solid var(--border-on-dark)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--card-pad-lg)', overflow: 'hidden',
              }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(229,43,80,.10)'; e.currentTarget.style.borderColor = 'rgba(229,43,80,.5)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = 'var(--border-on-dark)'; }}>
                <span style={{ position: 'absolute', top: 18, right: 22, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '3rem', color: 'rgba(255,255,255,.07)', lineHeight: 1 }}>{p.step}</span>
                <span style={{ display: 'inline-flex', width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--brand)', color: 'var(--white)', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}><Ico size={26} /></span>
                <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-display-sm)', color: 'var(--white)', letterSpacing: '-.01em' }}>{p.title}</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', lineHeight: 1.55, color: 'var(--text-on-dark-dim)' }}>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  return (
    <section id="proyectos" style={{ padding: 'var(--section-y) 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 44 }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow>Proyectos</Eyebrow>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.02em', color: 'var(--text-strong)' }}>Obras que nos respaldan</h2>
          </div>
          <Button variant="outline" iconRight={<I.ArrowUpRight size={18} />} onClick={() => goto('#contacto')}>Ver todo</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="bg-projects-grid">
          {D.projects.map((p) => (
            <ProjectCard key={p.title} image={p.image} category={p.category} title={p.title} count={p.count} onClick={() => goto('#contacto')} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Blog ---------------- */
function Blog() {
  return (
    <section id="blog" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-subtle)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 44 }}>
          <div>
            <Eyebrow>Blog</Eyebrow>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.02em', color: 'var(--text-strong)' }}>Novedades y consejos</h2>
          </div>
          <Button variant="outline" iconRight={<I.ArrowUpRight size={18} />}>Ver todo</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="bg-blog-grid">
          {D.blog.map((b) => <BlogCard key={b.title} post={b} />)}
        </div>
      </div>
    </section>
  );
}
function BlogCard({ post }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      border: '1px solid var(--border-subtle)', boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
      transform: hover ? 'translateY(-6px)' : 'none', transition: 'all var(--dur-base) var(--ease-out)', cursor: 'pointer',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.06)' : 'none', transition: 'transform var(--dur-slow) var(--ease-out)' }} />
        <span style={{ position: 'absolute', top: 14, left: 14 }}><Badge variant="solid">{post.category}</Badge></span>
      </div>
      <div style={{ padding: 'var(--card-pad)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', marginBottom: 10 }}><I.Calendar size={15} /> {post.date}</span>
        <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.25, color: 'var(--text-strong)', letterSpacing: '-.01em' }}>{post.title}</h3>
        <p style={{ margin: '0 0 18px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', lineHeight: 1.55, color: 'var(--text-body)', flex: 1 }}>{post.excerpt}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 700, color: 'var(--brand)' }}>
          Leer más <span style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}><I.ArrowRight size={16} /></span>
        </span>
      </div>
    </article>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section style={{ position: 'relative', background: 'var(--overlay-brand)', padding: 'var(--space-20) 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .12, background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop") center/cover' }} />
      <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', padding: '0 var(--container-px)', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-.025em', color: 'var(--white)', lineHeight: 1.05 }}>¿Listo para comenzar tu proyecto?</h2>
        <p style={{ margin: '18px auto 0', maxWidth: 560, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xl)', color: 'rgba(255,255,255,.9)' }}>Contáctanos hoy y descubre cómo podemos transformar tus ideas en realidad.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 34 }}>
          <Button variant="secondary" size="lg" onClick={() => goto('#contacto')}>Solicitar cotización</Button>
          <Button variant="ghost" size="lg" iconLeft={<I.Phone size={18} />} style={{ color: 'var(--white)', border: '2px solid rgba(255,255,255,.5)' }}>{D.company.phone}</Button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(28px,6vw,72px)', marginTop: 48 }}>
          {[['100%', 'Compromiso'], ['24/7', 'Atención'], ['+15', 'Años de experiencia']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.2rem', color: 'var(--white)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.85)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = React.useState(false);
  const c = D.company;
  const info = [
    { icon: 'Mail', label: 'Correo', value: c.email, href: 'mailto:' + c.email },
    { icon: 'Phone', label: 'Teléfono', value: c.phone, href: 'tel:' + c.phoneHref },
    { icon: 'MapPin', label: 'Ubicación', value: c.addressLine, href: '#' },
    { icon: 'Instagram', label: 'Instagram', value: '@_blessedgroup', href: c.instagram },
  ];
  return (
    <section id="contacto" style={{ padding: 'var(--section-y) 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 56, alignItems: 'start' }} className="bg-contact-grid">
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.4rem)', letterSpacing: '-.02em', color: 'var(--text-strong)' }}>Hablemos de tu proyecto</h2>
          <p style={{ margin: '14px 0 32px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)', color: 'var(--text-body)', lineHeight: 1.6 }}>Completá el formulario o escribinos por cualquiera de nuestros canales. Te respondemos a la brevedad.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {info.map((it) => {
              const Ico = I[it.icon];
              return (
                <a key={it.label} href={it.href} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ width: 50, height: 50, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ico size={22} /></span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{it.label}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', fontWeight: 600, color: 'var(--text-strong)', marginTop: 2 }}>{it.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <div style={{ background: 'var(--surface-subtle)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,4vw,40px)', border: '1px solid var(--border-subtle)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <span style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: '50%', background: 'var(--brand)', color: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><I.Check size={32} /></span>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-strong)' }}>¡Mensaje enviado!</h3>
              <p style={{ margin: 0, color: 'var(--text-body)', fontFamily: 'var(--font-body)' }}>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="bg-form-row">
                <Input label="Nombre" placeholder="Tu nombre completo" required />
                <Input label="Email" type="email" placeholder="tu@email.com" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="bg-form-row">
                <Input label="Teléfono" type="tel" placeholder="+595 ..." />
                <Input label="Asunto" placeholder="Tipo de proyecto" />
              </div>
              <div style={{ marginBottom: 20 }}>
                <Textarea label="Mensaje" placeholder="Cuéntanos sobre tu proyecto…" rows={5} required />
              </div>
              <Button type="submit" variant="primary" size="lg" fullWidth iconRight={<I.ArrowRight size={18} />}>Enviar mensaje</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const c = D.company;
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark-dim)', paddingTop: 'var(--space-16)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: 40, paddingBottom: 'var(--space-12)' }} className="bg-footer-grid">
          <div>
            <img src={LOGO} alt="Blessed Group" style={{ height: 54, marginBottom: 18 }} />
            <p style={{ margin: '0 0 20px', maxWidth: 300, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', lineHeight: 1.6 }}>{c.tagline}</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[['Instagram', c.instagram], ['Facebook', '#'], ['Linkedin', '#']].map(([k, href]) => {
                const Ico = I[k];
                return <a key={k} href={href} aria-label={k} style={{ width: 42, height: 42, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand)'; e.currentTarget.style.borderColor = 'var(--brand)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-on-dark)'; }}><Ico size={20} /></a>;
              })}
            </div>
          </div>
          <FooterCol title="Enlaces" links={D.nav} />
          <FooterCol title="Servicios" links={D.services.map((s) => ({ label: s.title, href: '#servicios' }))} />
          <div>
            <h4 style={footTitle}>Contacto</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <FootContact icon="Mail" text={c.email} href={'mailto:' + c.email} />
              <FootContact icon="Phone" text={c.phone} href={'tel:' + c.phoneHref} />
              <FootContact icon="MapPin" text={c.addressLine} href="#" />
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-on-dark)', padding: '24px 0 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)' }}>
          <span>© 2025 Blessed Group. Todos los derechos reservados.</span>
          <span style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'var(--text-on-dark-dim)' }}>Privacidad</a>
            <a href="#" style={{ color: 'var(--text-on-dark-dim)' }}>Términos</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
const footTitle = { margin: '0 0 18px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-base)', color: 'var(--white)', letterSpacing: '.02em' };
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 style={footTitle}>{title}</h4>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map((l, idx) => (
          <li key={idx}><a href={l.href} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-on-dark-dim)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-dim)'}>{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
function FootContact({ icon, text, href }) {
  const Ico = I[icon];
  return <li><a href={href} style={{ display: 'flex', alignItems: 'center', gap: 11, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-on-dark-dim)' }}><span style={{ color: 'var(--brand)', flex: 'none' }}><Ico size={18} /></span>{text}</a></li>;
}

window.BGParts2 = { Process, Projects, Blog, CTA, Contact, Footer };
})();
