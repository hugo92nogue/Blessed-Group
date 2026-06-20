/* @ds-bundle: {"format":3,"namespace":"BlessedGroupDesignSystem_048f3d","components":[{"name":"ProjectCard","sourcePath":"components/blocks/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/blocks/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/blocks/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/blocks/ProjectCard.jsx":"9048e0f416bc","components/blocks/ServiceCard.jsx":"36290cba0d5e","components/blocks/Stat.jsx":"9549b32029d5","components/core/Badge.jsx":"138e0842f25a","components/core/Button.jsx":"2d6e32be60eb","components/core/Card.jsx":"409a65ae711d","components/core/Eyebrow.jsx":"896214e803e2","components/core/IconButton.jsx":"f07ca6325fae","components/forms/Input.jsx":"0054a275b65a","components/forms/Textarea.jsx":"52dcddfff1b7","ui_kits/website/data.js":"8987e10c1d2a","ui_kits/website/icons.jsx":"a364f5c37202","ui_kits/website/parts1.jsx":"376b03ac9543","ui_kits/website/parts2.jsx":"7aa32cb67a80"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlessedGroupDesignSystem_048f3d = window.BlessedGroupDesignSystem_048f3d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Project / portfolio card — full-bleed photo with dark protection gradient,
 * a red category badge, a count badge and a title that rises on hover.
 */
function ProjectCard({
  image,
  category = '',
  title = '',
  count = null,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4 / 5',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-lg)',
      transition: `box-shadow var(--dur-base) var(--ease-out)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: image ? `url("${image}") center/cover no-repeat` : 'var(--slate-300)',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: `transform var(--dur-slow) var(--ease-out)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-dark)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      display: 'flex',
      gap: 8
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--white)',
      background: 'var(--brand)',
      padding: '5px 11px',
      borderRadius: 'var(--radius-sm)'
    }
  }, category)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--white)',
      background: 'rgba(15,23,42,0.55)',
      backdropFilter: 'blur(4px)',
      padding: '5px 11px',
      borderRadius: 'var(--radius-sm)'
    }
  }, count), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
      transform: hover ? 'translateY(0)' : 'translateY(4px)',
      transition: `transform var(--dur-base) var(--ease-out)`
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--fs-display-sm)',
      color: 'var(--white)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--white)',
      opacity: hover ? 1 : 0,
      transition: `opacity var(--dur-base) var(--ease-out)`
    }
  }, "Ver proyectos ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Animated statistic — count-up number with suffix, label and icon.
 * Used on the red Stats band ("15+ Años", "85.000+ M²"). Counts up when
 * scrolled into view (IntersectionObserver).
 */
function Stat({
  icon = null,
  value = 0,
  suffix = '',
  label = '',
  tone = 'onBrand',
  duration = 1600,
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(0);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = now => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * value));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) run();
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const tones = {
    onBrand: {
      num: 'var(--white)',
      label: 'rgba(255,255,255,0.82)',
      icon: 'rgba(255,255,255,0.92)'
    },
    onDark: {
      num: 'var(--white)',
      label: 'var(--text-on-dark-dim)',
      icon: 'var(--brand)'
    },
    light: {
      num: 'var(--text-strong)',
      label: 'var(--text-body)',
      icon: 'var(--brand)'
    }
  };
  const c = tones[tone] || tones.onBrand;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 14,
      color: c.icon
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--fs-display-lg)',
      lineHeight: 1,
      color: c.num,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, display.toLocaleString('es-PY'), suffix), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--weight-medium)',
      color: c.label
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category label. The brand uses these as image category tags
 * (solid red) and as meta chips (soft / outline).
 */
function Badge({
  children,
  variant = 'solid',
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '0.6875rem',
      padding: '3px 8px'
    },
    md: {
      fontSize: 'var(--fs-xs)',
      padding: '5px 11px'
    }
  };
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    soft: {
      background: 'var(--brand-soft)',
      color: 'var(--brand-active)',
      border: '1px solid var(--brand-soft-bd)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    dark: {
      background: 'rgba(15,23,42,0.78)',
      color: 'var(--white)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.solid;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.2,
      ...s,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blessed Group primary action button.
 * Variants: primary (Blessed Red), secondary (solid slate), outline (red border),
 * ghost (text). Sizes sm/md/lg. Optional leading/trailing icon nodes.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 38,
      fontSize: 'var(--fs-sm)',
      gap: 8
    },
    md: {
      padding: '0 22px',
      height: 48,
      fontSize: 'var(--fs-base)',
      gap: 10
    },
    lg: {
      padding: '0 30px',
      height: 56,
      fontSize: 'var(--fs-lg)',
      gap: 12
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'var(--slate-900)',
      color: 'var(--white)',
      border: '2px solid var(--slate-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '2px solid var(--brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--brand-hover)',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--slate-800)'
    },
    outline: {
      background: 'var(--brand-soft)'
    },
    ghost: {
      background: 'var(--slate-100)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.005em',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: `all var(--dur-base) var(--ease-soft)`,
      transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Lifts + deepens shadow on hover (optional). The brand's
 * service cards add a red accent bar that wipes in across the top on hover.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  accentBar = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-5)',
    md: 'var(--card-pad)',
    lg: 'var(--card-pad-lg)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
      transform: hover ? 'translateY(-6px)' : 'translateY(0)',
      transition: `transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
      ...style
    }
  }, rest), accentBar && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 4,
      width: '100%',
      background: 'var(--brand)',
      transform: hover ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: `transform var(--dur-base) var(--ease-out)`
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/blocks/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Service offering card — icon in a soft red tile, title, description and a
 * "learn more" arrow link. Hover lifts the card, reveals the red top bar and
 * recolors the icon tile.
 */
function ServiceCard({
  icon = null,
  title = '',
  description = '',
  linkLabel = 'Conocer más',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    accentBar: true,
    padding: "lg",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'var(--brand)' : 'var(--brand-soft)',
      color: hover ? 'var(--white)' : 'var(--brand)',
      transition: `all var(--dur-base) var(--ease-soft)`,
      marginBottom: 20
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--fs-display-sm)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 22px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--brand)'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: hover ? 'translateX(4px)' : 'translateX(0)',
      transition: `transform var(--dur-base) var(--ease-out)`
    },
    "aria-hidden": "true"
  }, "\u2192")))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section eyebrow / overline — a short red em-dash rule followed by an
 * ALL-CAPS wide-tracked label. The brand's signature section opener.
 * "— SOBRE NOSOTROS", "— NUESTROS SERVICIOS", etc.
 */
function Eyebrow({
  children,
  onDark = false,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow-size)',
      fontWeight: 'var(--text-eyebrow-weight)',
      letterSpacing: 'var(--text-eyebrow-track)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-dim)' : 'var(--text-strong)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 2,
      background: 'var(--brand)',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button. Wraps a single icon node (Lucide svg).
 * Variants: solid (red), dark (slate), ghost, outline.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 38,
    md: 44,
    lg: 52
  };
  const d = dims[size] || dims.md;
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: 'var(--white)',
      border: '2px solid transparent'
    },
    dark: {
      background: 'var(--slate-900)',
      color: 'var(--white)',
      border: '2px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    solid: {
      background: 'var(--brand-hover)'
    },
    dark: {
      background: 'var(--slate-800)'
    },
    outline: {
      background: 'var(--slate-50)',
      borderColor: 'var(--brand)',
      color: 'var(--brand)'
    },
    ghost: {
      background: 'var(--slate-100)',
      color: 'var(--brand)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: `all var(--dur-base) var(--ease-soft)`,
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label. Red focus ring matching the brand. */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 48,
      padding: '0 14px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      border: `1px solid ${focus ? 'var(--brand)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(229,43,80,0.18)' : 'none',
      transition: `border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)`,
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text area. Matches Input styling; brand red focus ring. */
function Textarea({
  label,
  placeholder = '',
  value,
  defaultValue,
  onChange,
  rows = 5,
  disabled = false,
  required = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const taId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    placeholder: placeholder,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      border: `1px solid ${focus ? 'var(--brand)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(229,43,80,0.18)' : 'none',
      transition: `border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)`,
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Blessed Group — site content (from project docs). window.BGData */
window.BGData = {
  company: {
    name: 'Blessed Group',
    email: 'gerencia@blessedgroup.com.py',
    phone: '+595 21 123 4567',
    phoneHref: '+59521123457',
    whatsapp: '595984000000',
    whatsappLabel: '+595 984 000 000',
    address: 'Asunción, Paraguay',
    addressLine: 'Asunción, Paraguay',
    instagram: 'https://www.instagram.com/_blessedgroup/',
    tagline: 'Excelencia en diseño arquitectónico y construcción en Paraguay.'
  },
  nav: [{
    label: 'Inicio',
    href: '#inicio'
  }, {
    label: 'Nosotros',
    href: '#nosotros'
  }, {
    label: 'Servicios',
    href: '#servicios'
  }, {
    label: 'Proceso',
    href: '#proceso'
  }, {
    label: 'Proyectos',
    href: '#proyectos'
  }, {
    label: 'Blog',
    href: '#blog'
  }, {
    label: 'Contacto',
    href: '#contacto'
  }],
  hero: [{
    eyebrow: 'Blessed Group · Paraguay',
    title: 'Construyendo el futuro',
    subtitle: 'Excelencia en diseño arquitectónico y construcción.',
    text: 'Transformamos tus ideas en proyectos de calidad superior.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop'
  }, {
    eyebrow: 'Más de 15 años de experiencia',
    title: 'Solidez, calidad y confianza',
    subtitle: 'Estructuras duraderas que cumplen los más altos estándares.',
    text: 'Nuestra experiencia y méritos nos respaldan en cada obra.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop'
  }, {
    eyebrow: 'Soluciones integrales',
    title: 'Del concepto a la entrega',
    subtitle: 'Acompañamos cada etapa de tu obra con un equipo experto.',
    text: 'Diseño, ingeniería, presupuesto y ejecución en un solo lugar.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop'
  }],
  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Blessed Group se ha consolidado como referente en diseño y construcción en Paraguay.',
    body: 'Ofrecemos soluciones integrales para todas las etapas de la construcción de una obra: desde el diseño conceptual, la arquitectura y la ingeniería, hasta el proyecto ejecutivo, la estimación del presupuesto y la supervisión de obra. Transformamos cada idea en espacios funcionales, seguros y de calidad superior.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    floatValue: '85.000+',
    floatLabel: 'M² construidos',
    features: [{
      icon: 'ShieldCheck',
      label: 'Calidad garantizada'
    }, {
      icon: 'Users',
      label: 'Equipo experto'
    }, {
      icon: 'Compass',
      label: 'Soluciones a medida'
    }, {
      icon: 'ClipboardCheck',
      label: 'Cumplimiento de plazos'
    }]
  },
  stats: [{
    icon: 'Award',
    value: 15,
    suffix: '+',
    label: 'Años de experiencia'
  }, {
    icon: 'Building2',
    value: 120,
    suffix: '+',
    label: 'Proyectos completados'
  }, {
    icon: 'Users',
    value: 50,
    suffix: '+',
    label: 'Clientes satisfechos'
  }, {
    icon: 'Ruler',
    value: 85000,
    suffix: '+',
    label: 'M² construidos'
  }],
  services: [{
    icon: 'PenTool',
    title: 'Diseño Arquitectónico',
    desc: 'Creamos espacios funcionales y estéticos que se adaptan a tus necesidades y superan tus expectativas.'
  }, {
    icon: 'HardHat',
    title: 'Construcción',
    desc: 'Ejecutamos tus proyectos con calidad y eficiencia, con materiales de primera línea y mano de obra calificada.'
  }, {
    icon: 'Building2',
    title: 'Obras Civiles',
    desc: 'Desarrollamos infraestructura sólida y duradera cumpliendo los más altos estándares de la industria.'
  }, {
    icon: 'Hammer',
    title: 'Remodelación',
    desc: 'Renovamos y transformamos espacios existentes, dándoles nueva vida, valor y funcionalidad.'
  }, {
    icon: 'ClipboardCheck',
    title: 'Supervisión de Obra',
    desc: 'Monitoreamos cada etapa de la obra garantizando calidad, plazos y cumplimiento de las normas.'
  }, {
    icon: 'Compass',
    title: 'Consultoría',
    desc: 'Te asesoramos en la viabilidad técnica, económica y legal de tu proyecto desde el primer día.'
  }],
  process: [{
    icon: 'Compass',
    step: '01',
    title: 'Diseño conceptual',
    desc: 'Definimos la visión, el alcance y los objetivos del proyecto junto a vos.'
  }, {
    icon: 'FileText',
    step: '02',
    title: 'Proyecto ejecutivo',
    desc: 'Desarrollamos planos, ingeniería y especificaciones con metodología BIM.'
  }, {
    icon: 'Layers',
    step: '03',
    title: 'Cómputo y presupuesto',
    desc: 'Elaboramos un presupuesto detallado y transparente, optimizando recursos.'
  }, {
    icon: 'ShieldCheck',
    step: '04',
    title: 'Habilitaciones y permisos',
    desc: 'Gestionamos todos los trámites y permisos necesarios para iniciar la obra.'
  }, {
    icon: 'HardHat',
    step: '05',
    title: 'Ejecución de obra',
    desc: 'Construimos con un equipo calificado y control de calidad permanente.'
  }, {
    icon: 'ClipboardCheck',
    step: '06',
    title: 'Entrega y seguimiento',
    desc: 'Entregamos en plazo y acompañamos con seguimiento posterior a la obra.'
  }],
  projects: [{
    category: 'Comercial',
    title: 'Edificios Comerciales',
    count: '25 proyectos',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop'
  }, {
    category: 'Residencial',
    title: 'Viviendas Residenciales',
    count: '32 proyectos',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=900&auto=format&fit=crop'
  }, {
    category: 'Industrial',
    title: 'Plantas Industriales',
    count: '18 proyectos',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=900&auto=format&fit=crop'
  }, {
    category: 'Remodelación',
    title: 'Remodelaciones',
    count: '20 proyectos',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop'
  }],
  blog: [{
    date: '01 Abr 2025',
    category: 'Seguridad',
    title: 'Buenas prácticas de seguridad en la construcción industrial',
    excerpt: 'La construcción industrial conlleva riesgos. Con normas y buenas prácticas es posible minimizarlos y garantizar un entorno laboral seguro.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop'
  }, {
    date: '25 Mar 2026',
    category: 'Planificación',
    title: 'Construir bien comienza mucho antes de iniciar la obra',
    excerpt: 'En proyectos de gran envergadura, la planificación no es una etapa inicial: es un proceso estratégico continuo que define el éxito.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop'
  }, {
    date: '01 Abr 2025',
    category: 'Materiales',
    title: 'Consejos prácticos para elegir el aislamiento adecuado',
    excerpt: 'El aislamiento correcto mejora el confort y la eficiencia. Te compartimos consejos prácticos para elegir el adecuado en cada proyecto.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* Blessed Group — Lucide-style line icons (2px stroke, currentColor).
   Exposed on window.BGIcons for the site section scripts. */
const I = (paths, vb = '0 0 24 24') => ({
  size = 24,
  stroke = 2,
  style = {},
  ...rest
}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: vb,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: stroke,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  style,
  ...rest
}, paths.map((d, i) => React.createElement('path', {
  key: i,
  d
})));
const Icons = {
  Menu: I(['M4 6h16', 'M4 12h16', 'M4 18h16']),
  X: I(['M18 6 6 18', 'm6 6 12 12']),
  ArrowRight: I(['M5 12h14', 'm12 5 7 7-7 7']),
  ArrowUpRight: I(['M7 7h10v10', 'M7 17 17 7']),
  ChevronLeft: I(['m15 18-6-6 6-6']),
  ChevronRight: I(['m9 18 6-6-6-6']),
  ArrowUp: I(['m18 15-6-6-6 6']),
  Phone: I(['M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384']),
  Mail: I(['m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', 'M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z']),
  MapPin: I(['M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0', 'M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4']),
  Whatsapp: I(['M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21', 'M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1']),
  Instagram: I(['M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4', 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37', 'M17.5 6.5h.01']),
  Facebook: I(['M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z']),
  Linkedin: I(['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6', 'M2 9h4v12H2z', 'M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4']),
  Award: I(['M15.477 12.89 17 22l-5-3-5 3 1.523-9.11', 'M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12']),
  Building2: I(['M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z', 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2', 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2', 'M10 6h4', 'M10 10h4', 'M10 14h4', 'M10 18h4']),
  Users: I(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
  Ruler: I(['M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z', 'm7.5 10.5 2 2', 'm10.5 7.5 2 2', 'm13.5 4.5 2 2', 'm4.5 13.5 2 2']),
  PenTool: I(['M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z', 'm18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18', 'm2.3 2.3 7.286 7.286', 'M11 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4']),
  HardHat: I(['M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5', 'M14 6a6 6 0 0 1 4 5.659V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.341A6 6 0 0 1 10 6', 'M2 18a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z']),
  Hammer: I(['m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9', 'm18 15 4-4', 'm21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5']),
  Compass: I(['m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z', 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20']),
  ClipboardCheck: I(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1', 'm9 14 2 2 4-4']),
  ShieldCheck: I(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4']),
  Layers: I(['M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z', 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12', 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17']),
  FileText: I(['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8']),
  Wrench: I(['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z']),
  Calendar: I(['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2']),
  Quote: I(['M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v2a2 2 0 0 1-2 2h-1a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z', 'M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v2a2 2 0 0 1-2 2H5a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z']),
  Check: I(['M20 6 9 17l-5-5'])
};
window.BGIcons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts1.jsx
try { (() => {
/* Blessed Group site — top sections. Exposes window.BGParts1 */
(function () {
  const NS = window.BlessedGroupDesignSystem_048f3d;
  const {
    Button,
    Eyebrow,
    Stat,
    ServiceCard
  } = NS;
  const I = window.BGIcons;
  const D = window.BGData;
  const LOGO = '../../assets/logo.png';

  /* ---------------- Header ---------------- */
  function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const solid = scrolled || open;
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: solid ? 'var(--white)' : 'transparent',
        boxShadow: solid ? 'var(--shadow-md)' : 'none',
        transition: 'background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)',
        height: solid ? 72 : 88,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'height var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#inicio",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "Blessed Group",
      style: {
        height: solid ? 42 : 50,
        width: 'auto',
        transition: 'height var(--dur-base)',
        filter: solid ? 'none' : 'drop-shadow(0 2px 8px rgba(0,0,0,.35))'
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 30
      },
      className: "bg-desk-nav"
    }, D.nav.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.href,
      href: n.href,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 600,
        color: solid ? 'var(--text-strong)' : 'var(--white)',
        textShadow: solid ? 'none' : '0 1px 6px rgba(0,0,0,.4)',
        transition: 'color var(--dur-fast)'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--brand)',
      onMouseLeave: e => e.currentTarget.style.color = solid ? 'var(--text-strong)' : 'var(--white)'
    }, n.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-desk-cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 16
      }),
      onClick: () => goto('#contacto')
    }, "Solicitar cotizaci\xF3n")), /*#__PURE__*/React.createElement("button", {
      className: "bg-burger",
      "aria-label": "Men\xFA",
      onClick: () => setOpen(!open),
      style: {
        display: 'none',
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: solid ? 'var(--text-strong)' : 'var(--white)'
      }
    }, open ? /*#__PURE__*/React.createElement(I.X, null) : /*#__PURE__*/React.createElement(I.Menu, null)))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--white)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '12px var(--container-px) 20px'
      }
    }, D.nav.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.href,
      href: n.href,
      onClick: () => setOpen(false),
      style: {
        display: 'block',
        padding: '12px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-lg)',
        fontWeight: 600,
        color: 'var(--text-strong)',
        borderBottom: '1px solid var(--slate-100)'
      }
    }, n.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => {
        setOpen(false);
        goto('#contacto');
      }
    }, "Solicitar cotizaci\xF3n"))));
  }
  function goto(hash) {
    const el = document.querySelector(hash);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  }

  /* ---------------- Hero ---------------- */
  function Hero() {
    const slides = D.hero;
    const [i, setI] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setI(p => (p + 1) % slides.length), 6000);
      return () => clearInterval(t);
    }, [slides.length]);
    const go = n => setI((n + slides.length) % slides.length);
    return /*#__PURE__*/React.createElement("section", {
      id: "inicio",
      style: {
        position: 'relative',
        height: '100vh',
        minHeight: 620,
        overflow: 'hidden'
      }
    }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        position: 'absolute',
        inset: 0,
        opacity: idx === i ? 1 : 0,
        transition: 'opacity 900ms var(--ease-soft)',
        pointerEvents: idx === i ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: `url("${s.image}") center/cover no-repeat`,
        transform: idx === i ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 7s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(15,23,42,.82) 0%, rgba(15,23,42,.55) 45%, rgba(15,23,42,.25) 100%)'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 22,
        padding: '8px 16px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(229,43,80,.16)',
        border: '1px solid rgba(229,43,80,.5)',
        backdropFilter: 'blur(6px)',
        color: 'var(--white)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 700,
        letterSpacing: '.06em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--brand)'
      }
    }), slides[i].eyebrow), /*#__PURE__*/React.createElement("h1", {
      key: i,
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
        lineHeight: 1.02,
        letterSpacing: '-.025em',
        color: 'var(--white)',
        animation: 'bgFadeUp .8s var(--ease-out) both'
      }
    }, slides[i].title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        maxWidth: 560,
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
        lineHeight: 1.5,
        fontWeight: 500,
        color: 'rgba(255,255,255,.92)'
      }
    }, slides[i].subtitle), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        maxWidth: 540,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-lg)',
        color: 'rgba(255,255,255,.72)'
      }
    }, slides[i].text), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 18
      }),
      onClick: () => goto('#contacto')
    }, "Solicitar cotizaci\xF3n"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg",
      onClick: () => goto('#servicios'),
      style: {
        color: 'var(--white)',
        border: '2px solid rgba(255,255,255,.4)'
      }
    }, "Ver servicios")))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 34,
        left: 0,
        right: 0,
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)',
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Anterior",
      onClick: () => go(i - 1),
      style: ctrlStyle
    }, /*#__PURE__*/React.createElement(I.ChevronLeft, {
      size: 20
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Siguiente",
      onClick: () => go(i + 1),
      style: ctrlStyle
    }, /*#__PURE__*/React.createElement(I.ChevronRight, {
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginLeft: 6
      }
    }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
      key: idx,
      "aria-label": `Slide ${idx + 1}`,
      onClick: () => go(idx),
      style: {
        width: idx === i ? 32 : 10,
        height: 10,
        borderRadius: 'var(--radius-full)',
        border: 'none',
        cursor: 'pointer',
        background: idx === i ? 'var(--brand)' : 'rgba(255,255,255,.5)',
        transition: 'all var(--dur-base) var(--ease-soft)'
      }
    })))));
  }
  const ctrlStyle = {
    width: 48,
    height: 48,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,.12)',
    border: '1px solid rgba(255,255,255,.35)',
    color: 'var(--white)',
    cursor: 'pointer',
    backdropFilter: 'blur(6px)'
  };

  /* ---------------- About ---------------- */
  function About() {
    const a = D.about;
    return /*#__PURE__*/React.createElement("section", {
      id: "nosotros",
      style: {
        padding: 'var(--section-y) 0',
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center'
      },
      className: "bg-about-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-2xl)',
        aspectRatio: '4/5'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.image,
      alt: "Blessed Group",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -18,
        bottom: -18,
        background: 'var(--overlay-brand)',
        color: 'var(--white)',
        padding: '22px 26px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-brand)'
      },
      className: "bg-about-float"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '2.4rem',
        lineHeight: 1,
        letterSpacing: '-.02em'
      }
    }, a.floatValue), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 600,
        opacity: .92,
        marginTop: 4
      }
    }, a.floatLabel))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, a.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        lineHeight: 1.12,
        letterSpacing: '-.02em',
        color: 'var(--text-strong)',
        textWrap: 'balance'
      }
    }, a.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '22px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, a.body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        margin: '28px 0 32px'
      }
    }, a.features.map(f => {
      const Ico = I[f.icon];
      return /*#__PURE__*/React.createElement("div", {
        key: f.label,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          flex: 'none',
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand-soft)',
          color: 'var(--brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 22
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-base)',
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, f.label));
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 18
      }),
      onClick: () => goto('#proyectos')
    }, "Conoc\xE9 m\xE1s"))));
  }

  /* ---------------- Stats ---------------- */
  function Stats() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--overlay-brand)',
        padding: 'var(--space-16) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 28
      },
      className: "bg-stats-grid"
    }, D.stats.map(s => {
      const Ico = I[s.icon];
      return /*#__PURE__*/React.createElement(Stat, {
        key: s.label,
        icon: /*#__PURE__*/React.createElement(Ico, {
          size: 34
        }),
        value: s.value,
        suffix: s.suffix,
        label: s.label,
        tone: "onBrand"
      });
    })));
  }

  /* ---------------- Services ---------------- */
  function Services() {
    return /*#__PURE__*/React.createElement("section", {
      id: "servicios",
      style: {
        padding: 'var(--section-y) 0',
        background: 'var(--surface-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 640,
        margin: '0 auto 52px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      align: "center"
    }, "Nuestros servicios")), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        letterSpacing: '-.02em',
        color: 'var(--text-strong)'
      }
    }, "Soluciones integrales de construcci\xF3n"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-lg)',
        color: 'var(--text-body)'
      }
    }, "Acompa\xF1amos cada etapa de tu obra, del dise\xF1o a la entrega final.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      },
      className: "bg-services-grid"
    }, D.services.map(s => {
      const Ico = I[s.icon];
      return /*#__PURE__*/React.createElement(ServiceCard, {
        key: s.title,
        icon: /*#__PURE__*/React.createElement(Ico, {
          size: 28
        }),
        title: s.title,
        description: s.desc,
        linkLabel: "M\xE1s informaci\xF3n",
        onClick: () => goto('#contacto')
      });
    }))));
  }
  window.BGParts1 = {
    Header,
    Hero,
    About,
    Stats,
    Services,
    goto
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts2.jsx
try { (() => {
/* Blessed Group site — bottom sections. Exposes window.BGParts2 */
(function () {
  const NS = window.BlessedGroupDesignSystem_048f3d;
  const {
    Button,
    Eyebrow,
    Badge,
    ProjectCard,
    Input,
    Textarea
  } = NS;
  const I = window.BGIcons;
  const D = window.BGData;
  const LOGO = '../../assets/logo.png';
  const goto = h => window.BGParts1.goto(h);

  /* ---------------- Process ---------------- */
  function Process() {
    return /*#__PURE__*/React.createElement("section", {
      id: "proceso",
      style: {
        padding: 'var(--section-y) 0',
        background: 'var(--surface-dark)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        marginBottom: 52
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "Nuestro proceso"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        letterSpacing: '-.02em',
        color: 'var(--white)'
      }
    }, "C\xF3mo trabajamos en cada proyecto"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-lg)',
        color: 'var(--text-on-dark-dim)'
      }
    }, "Un m\xE9todo probado, del primer boceto a la entrega final.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      },
      className: "bg-process-grid"
    }, D.process.map(p => {
      const Ico = I[p.icon];
      return /*#__PURE__*/React.createElement("div", {
        key: p.step,
        style: {
          position: 'relative',
          background: 'rgba(255,255,255,.04)',
          border: '1px solid var(--border-on-dark)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--card-pad-lg)',
          overflow: 'hidden'
        },
        onMouseEnter: e => {
          e.currentTarget.style.background = 'rgba(229,43,80,.10)';
          e.currentTarget.style.borderColor = 'rgba(229,43,80,.5)';
        },
        onMouseLeave: e => {
          e.currentTarget.style.background = 'rgba(255,255,255,.04)';
          e.currentTarget.style.borderColor = 'var(--border-on-dark)';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: 18,
          right: 22,
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '3rem',
          color: 'rgba(255,255,255,.07)',
          lineHeight: 1
        }
      }, p.step), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand)',
          color: 'var(--white)',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 26
      })), /*#__PURE__*/React.createElement("h3", {
        style: {
          margin: '0 0 8px',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--fs-display-sm)',
          color: 'var(--white)',
          letterSpacing: '-.01em'
        }
      }, p.title), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-base)',
          lineHeight: 1.55,
          color: 'var(--text-on-dark-dim)'
        }
      }, p.desc));
    }))));
  }

  /* ---------------- Projects ---------------- */
  function Projects() {
    return /*#__PURE__*/React.createElement("section", {
      id: "proyectos",
      style: {
        padding: 'var(--section-y) 0',
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: 20,
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Proyectos"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        letterSpacing: '-.02em',
        color: 'var(--text-strong)'
      }
    }, "Obras que nos respaldan")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowUpRight, {
        size: 18
      }),
      onClick: () => goto('#contacto')
    }, "Ver todo")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      },
      className: "bg-projects-grid"
    }, D.projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
      key: p.title,
      image: p.image,
      category: p.category,
      title: p.title,
      count: p.count,
      onClick: () => goto('#contacto')
    })))));
  }

  /* ---------------- Blog ---------------- */
  function Blog() {
    return /*#__PURE__*/React.createElement("section", {
      id: "blog",
      style: {
        padding: 'var(--section-y) 0',
        background: 'var(--surface-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: 20,
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Blog"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        letterSpacing: '-.02em',
        color: 'var(--text-strong)'
      }
    }, "Novedades y consejos")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowUpRight, {
        size: 18
      })
    }, "Ver todo")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      },
      className: "bg-blog-grid"
    }, D.blog.map(b => /*#__PURE__*/React.createElement(BlogCard, {
      key: b.title,
      post: b
    })))));
  }
  function BlogCard({
    post
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("article", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '16/10',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: post.image,
      alt: post.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: hover ? 'scale(1.06)' : 'none',
        transition: 'transform var(--dur-slow) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 14,
        left: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, post.category))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--card-pad)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(I.Calendar, {
      size: 15
    }), " ", post.date), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 10px',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '1.2rem',
        lineHeight: 1.25,
        color: 'var(--text-strong)',
        letterSpacing: '-.01em'
      }
    }, post.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)',
        flex: 1
      }
    }, post.excerpt), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 700,
        color: 'var(--brand)'
      }
    }, "Leer m\xE1s ", /*#__PURE__*/React.createElement("span", {
      style: {
        transform: hover ? 'translateX(4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 16
    })))));
  }

  /* ---------------- CTA ---------------- */
  function CTA() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        background: 'var(--overlay-brand)',
        padding: 'var(--space-20) 0',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: .12,
        background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop") center/cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 860,
        margin: '0 auto',
        padding: '0 var(--container-px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'clamp(2rem,4vw,3.2rem)',
        letterSpacing: '-.025em',
        color: 'var(--white)',
        lineHeight: 1.05
      }
    }, "\xBFListo para comenzar tu proyecto?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px auto 0',
        maxWidth: 560,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xl)',
        color: 'rgba(255,255,255,.9)'
      }
    }, "Cont\xE1ctanos hoy y descubre c\xF3mo podemos transformar tus ideas en realidad."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        justifyContent: 'center',
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => goto('#contacto')
    }, "Solicitar cotizaci\xF3n"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(I.Phone, {
        size: 18
      }),
      style: {
        color: 'var(--white)',
        border: '2px solid rgba(255,255,255,.5)'
      }
    }, D.company.phone)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'clamp(28px,6vw,72px)',
        marginTop: 48
      }
    }, [['100%', 'Compromiso'], ['24/7', 'Atención'], ['+15', 'Años de experiencia']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '2.2rem',
        color: 'var(--white)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'rgba(255,255,255,.85)',
        marginTop: 6
      }
    }, l))))));
  }

  /* ---------------- Contact ---------------- */
  function Contact() {
    const [sent, setSent] = React.useState(false);
    const c = D.company;
    const info = [{
      icon: 'Mail',
      label: 'Correo',
      value: c.email,
      href: 'mailto:' + c.email
    }, {
      icon: 'Phone',
      label: 'Teléfono',
      value: c.phone,
      href: 'tel:' + c.phoneHref
    }, {
      icon: 'MapPin',
      label: 'Ubicación',
      value: c.addressLine,
      href: '#'
    }, {
      icon: 'Instagram',
      label: 'Instagram',
      value: '@_blessedgroup',
      href: c.instagram
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "contacto",
      style: {
        padding: 'var(--section-y) 0',
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 56,
        alignItems: 'start'
      },
      className: "bg-contact-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contacto"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem,3vw,2.4rem)',
        letterSpacing: '-.02em',
        color: 'var(--text-strong)'
      }
    }, "Hablemos de tu proyecto"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 32px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-lg)',
        color: 'var(--text-body)',
        lineHeight: 1.6
      }
    }, "Complet\xE1 el formulario o escribinos por cualquiera de nuestros canales. Te respondemos a la brevedad."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, info.map(it => {
      const Ico = I[it.icon];
      return /*#__PURE__*/React.createElement("a", {
        key: it.label,
        href: it.href,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 50,
          height: 50,
          flex: 'none',
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand-soft)',
          color: 'var(--brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 22
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-xs)',
          fontWeight: 700,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)'
        }
      }, it.label), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-base)',
          fontWeight: 600,
          color: 'var(--text-strong)',
          marginTop: 2
        }
      }, it.value)));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(24px,4vw,40px)',
        border: '1px solid var(--border-subtle)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '40px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--brand)',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 32
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.5rem',
        color: 'var(--text-strong)'
      }
    }, "\xA1Mensaje enviado!"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)'
      }
    }, "Gracias por contactarnos. Te responderemos pronto.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginBottom: 16
      },
      className: "bg-form-row"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Nombre",
      placeholder: "Tu nombre completo",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "tu@email.com",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginBottom: 16
      },
      className: "bg-form-row"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Tel\xE9fono",
      type: "tel",
      placeholder: "+595 ..."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Asunto",
      placeholder: "Tipo de proyecto"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Textarea, {
      label: "Mensaje",
      placeholder: "Cu\xE9ntanos sobre tu proyecto\u2026",
      rows: 5,
      required: true
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "lg",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 18
      })
    }, "Enviar mensaje")))));
  }

  /* ---------------- Footer ---------------- */
  function Footer() {
    const c = D.company;
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-dark)',
        color: 'var(--text-on-dark-dim)',
        paddingTop: 'var(--space-16)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 var(--container-px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
        gap: 40,
        paddingBottom: 'var(--space-12)'
      },
      className: "bg-footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "Blessed Group",
      style: {
        height: 54,
        marginBottom: 18
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 20px',
        maxWidth: 300,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6
      }
    }, c.tagline), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, [['Instagram', c.instagram], ['Facebook', '#'], ['Linkedin', '#']].map(([k, href]) => {
      const Ico = I[k];
      return /*#__PURE__*/React.createElement("a", {
        key: k,
        href: href,
        "aria-label": k,
        style: {
          width: 42,
          height: 42,
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-on-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        },
        onMouseEnter: e => {
          e.currentTarget.style.background = 'var(--brand)';
          e.currentTarget.style.borderColor = 'var(--brand)';
        },
        onMouseLeave: e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'var(--border-on-dark)';
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 20
      }));
    }))), /*#__PURE__*/React.createElement(FooterCol, {
      title: "Enlaces",
      links: D.nav
    }), /*#__PURE__*/React.createElement(FooterCol, {
      title: "Servicios",
      links: D.services.map(s => ({
        label: s.title,
        href: '#servicios'
      }))
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: footTitle
    }, "Contacto"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(FootContact, {
      icon: "Mail",
      text: c.email,
      href: 'mailto:' + c.email
    }), /*#__PURE__*/React.createElement(FootContact, {
      icon: "Phone",
      text: c.phone,
      href: 'tel:' + c.phoneHref
    }), /*#__PURE__*/React.createElement(FootContact, {
      icon: "MapPin",
      text: c.addressLine,
      href: "#"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-on-dark)',
        padding: '24px 0 32px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Blessed Group. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-on-dark-dim)'
      }
    }, "Privacidad"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-on-dark-dim)'
      }
    }, "T\xE9rminos")))));
  }
  const footTitle = {
    margin: '0 0 18px',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--fs-base)',
    color: 'var(--white)',
    letterSpacing: '.02em'
  };
  function FooterCol({
    title,
    links
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: footTitle
    }, title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, links.map((l, idx) => /*#__PURE__*/React.createElement("li", {
      key: idx
    }, /*#__PURE__*/React.createElement("a", {
      href: l.href,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-on-dark-dim)'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--brand)',
      onMouseLeave: e => e.currentTarget.style.color = 'var(--text-on-dark-dim)'
    }, l.label)))));
  }
  function FootContact({
    icon,
    text,
    href
  }) {
    const Ico = I[icon];
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-on-dark-dim)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand)',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      size: 18
    })), text));
  }
  window.BGParts2 = {
    Process,
    Projects,
    Blog,
    CTA,
    Contact,
    Footer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts2.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
