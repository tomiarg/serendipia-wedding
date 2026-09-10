import { useState, useEffect } from "react";

/* ============================================================
   1) CÓDIGOS VÁLIDOS
   ============================================================ */
const VALID_CODES = ["AGENCIAX2026", "AGENCIAY2026", "AGENCIAZ2026"];

const SESSION_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hs
const STORAGE_KEY = "serendipia_cotizador_access";

/* ============================================================
   2) TARIFAS OFICIALES — Revora, tabla Ago 2026 - Jul 2027
   ============================================================
   Los precios de PKGS son la tarifa Peak + Sábado (la base más
   alta, sin descuento). El resto se calcula con SEASON_MULT y
   DAY_MULT exactamente como en la planilla.
*/
const PKGS = {
  foto: [
    { id: "f1", name: "Couple", price: 1550, desc: "3 hs · 1 fotógrafo · 100 fotos" },
    { id: "f2", name: "Ring", price: 2400, desc: "5 hs · 1 fotógrafo · 250 fotos" },
    { id: "f3", name: "Bouquet", price: 3300, desc: "8 hs · 2 fotógrafos · todas las fotos" },
  ],
  video: [
    { id: "v1", name: "Couple", price: 1650, desc: "3 hs · 1 videógrafo · video + drone" },
    { id: "v2", name: "Ring", price: 2800, desc: "5 hs · 2 videógrafos · highlight + full" },
    { id: "v3", name: "Bouquet", price: 3600, desc: "8 hs · 2 videógrafos · todo + reel" },
  ],
  ambos: [
    { id: "a1", name: "Romance", price: 2500, desc: "3 hs · 1+1 · 100 fotos + video" },
    { id: "a2", name: "Pure Love", price: 3800, desc: "5 hs · 2+2 · 250 fotos + highlight + full" },
    { id: "a3", name: "Forever", price: 4700, desc: "8 hs · 2+2 · 350 fotos + todo + reel" },
  ],
};

const ADDONS = [
  { id: "express", label: "Edición express 48 hs", sub: "30 fotos prioritarias en 2 días", price: 350 },
  { id: "album", label: "Álbum físico premium", sub: "Tapa dura, fine art, 30–50 pág", price: 600 },
  { id: "print", label: "Impresión fine art", sub: "Lienzo/acrílico 40×60 cm", price: 250 },
  { id: "reel", label: "Reel para redes sociales", sub: "60 seg IG/TikTok", price: 300 },
  { id: "drone", label: "Drone en ceremonia", sub: "Cobertura aérea completa", price: 400 },
  { id: "aniv", label: "Sesión de aniversario", sub: "Al año de la boda · 20% desc", price: 400 },
];

// Multiplicador de temporada (sobre el valor Peak, redondeado al dólar)
const SEASON_MULT = { alta: 1, media: 0.85, baja: 0.75 };
// Multiplicador de día (Lun-Jue -10%, Vie y Dom -5%, Sáb = base)
const DAY_MULT = { sat: 1, fri: 0.95, sun: 0.95, week: 0.9 };

const DAY_LABEL = { sat: "Sábado", fri: "Viernes", sun: "Domingo", week: "Lunes–Jueves" };
const SEASON_LABEL = {
  alta: "Temporada peak · Oct–Dic / Mar–May",
  media: "Temporada regular · Ene–Feb / Jun",
  baja: "Off season · Jul–Ago–Sep",
};
const MONTHS = [
  [12, "Diciembre"], [1, "Enero"], [2, "Febrero"], [3, "Marzo"],
  [4, "Abril"], [5, "Mayo"], [6, "Junio"], [7, "Julio"],
  [8, "Agosto"], [9, "Septiembre"], [10, "Octubre"], [11, "Noviembre"],
];

// Calendario real de temporadas (se repite cada año)
function getSeason(m) {
  const month = +m;
  if ([10, 11, 12, 3, 4, 5].includes(month)) return "alta"; // Peak
  if ([1, 2, 6].includes(month)) return "media"; // Regular
  return "baja"; // Off Season: 7, 8, 9
}

function getMult(month, day) {
  const season = getSeason(month);
  return { sm: SEASON_MULT[season], dm: DAY_MULT[day], season };
}

// Formato exacto de la planilla: siempre 2 decimales, ej. $1,472.50
function money(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Precio final de un paquete para una temporada/día dados
function priceFor(basePeakSat, sm, dm) {
  const seasonBase = Math.round(basePeakSat * sm); // redondeo al dólar, como la planilla
  return seasonBase * dm;
}

/* ============================================================
   3) GATE DE ACCESO
   ============================================================ */
function useAccessGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { expiresAt } = JSON.parse(raw);
        if (expiresAt && Date.now() < expiresAt) setUnlocked(true);
        else localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
    setChecking(false);
  }, []);

  function tryUnlock(code) {
    const normalized = code.trim().toUpperCase();
    const isValid = VALID_CODES.includes(normalized);
    if (isValid) {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ code: normalized, expiresAt: Date.now() + SESSION_DURATION_MS })
        );
      } catch (e) {}
      setUnlocked(true);
    }
    return isValid;
  }

  function lock() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setUnlocked(false);
  }

  return { unlocked, checking, tryUnlock, lock };
}

function AccessGate({ onSubmit }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit(code)) {
      setError(true);
      setCode("");
    }
  }

  return (
    <div className="cotizador-page">
      <div className="cotizador-inner">
        <div className="gate-wrap">
          <div className="gate-title">Acceso al cotizador</div>
          <div className="gate-sub">Ingresá el código que te dio Serendipia para acceder.</div>
          <form onSubmit={handleSubmit} className="gate-form">
            <input
              type="text"
              className="gate-input"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError(false);
              }}
              placeholder="Código de agencia"
              autoFocus
            />
            {error && <div className="gate-error">Código inválido. Probá de nuevo.</div>}
            <button type="submit" className="gate-submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   4) COTIZADOR
   ============================================================ */
function Quotizer({ onLock }) {
  const [type, setType] = useState("foto");
  const [pkgId, setPkgId] = useState(PKGS.foto[0].id);
  const [month, setMonth] = useState(12);
  const [day, setDay] = useState("sat");
  const [addons, setAddons] = useState(new Set());

  function handleSetType(t) {
    setType(t);
    setPkgId(PKGS[t][0].id);
  }
  function toggleAddon(id) {
    setAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const packages = PKGS[type];
  const selectedPkg = packages.find((p) => p.id === pkgId) || packages[0];
  const { sm, dm, season } = getMult(month, day);

  const base = selectedPkg.price; // nominal Peak/Sábado
  const pkgAdj = priceFor(base, sm, dm);
  const addonsTotal = [...addons].reduce((s, id) => s + (ADDONS.find((a) => a.id === id)?.price || 0), 0);
  const grand = pkgAdj + addonsTotal;

  const smPct = sm === 1 ? "Base" : `${Math.round((sm - 1) * 100)}%`;
  const dmPct = dm === 1 ? "Base" : `${Math.round((dm - 1) * 100)}%`;
  const smClass = sm > 1 ? "p-up" : sm < 1 ? "p-down" : "p-neu";
  const dmClass = dm > 1 ? "p-up" : dm < 1 ? "p-down" : "p-neu";

  return (
    <div className="cotizador-page">
      <div className="cotizador-inner">
      <div className="section-title">
        Calculá el precio <em>en tiempo real</em>
      </div>
      <p className="section-intro">
        Esta herramienta aplica automáticamente los multiplicadores de temporada y día, y suma los add-ons
        seleccionados. Usala en cada cotización para garantizar siempre el precio correcto.
      </p>

      <div className="sim-wrap">
        <div className="sim-title">Cotizador Serendipia</div>
        <div className="sim-sub">Seleccioná tipo de servicio, paquete, fecha y add-ons para obtener el total ajustado</div>

        <div className="sim-section">
          <div className="sim-step">1. Tipo de servicio</div>
          <div className="tab-row">
            <button className={`stab ${type === "foto" ? "active" : ""}`} onClick={() => handleSetType("foto")}>Solo foto</button>
            <button className={`stab ${type === "video" ? "active" : ""}`} onClick={() => handleSetType("video")}>Solo video</button>
            <button className={`stab ${type === "ambos" ? "active" : ""}`} onClick={() => handleSetType("ambos")}>Foto + video</button>
          </div>
        </div>

        <div className="sim-section">
          <div className="sim-step">2. Paquete</div>
          <div className="pkg-grid">
            {packages.map((p) => {
              const adj = priceFor(p.price, sm, dm);
              const sel = pkgId === p.id;
              return (
                <div
                  key={p.id}
                  className={`pkg-card ${sel ? "selected" : ""}`}
                  onClick={() => setPkgId(p.id)}
                >
                  <div className="pkg-card-name">{p.name}</div>
                  <div className="pkg-card-desc">{p.desc}</div>
                  <div className="pkg-card-price">${money(adj)}</div>
                  {adj !== p.price && <div className="pkg-card-orig">${money(p.price)}</div>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="sim-section">
          <div className="sim-step">3. Fecha del evento</div>
          <div className="date-row">
            <div>
              <div className="field-label">Mes</div>
              <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
                {MONTHS.map(([val, label]) => <option key={val} value={val}>{label}</option>)}
              </select>
            </div>
            <div>
              <div className="field-label">Día de semana</div>
              <select value={day} onChange={(e) => setDay(e.target.value)}>
                {Object.entries(DAY_LABEL).map(([val, label]) => <option key={val} value={val}>{label}</option>)}
              </select>
            </div>
          </div>
          <div className="season-tag">
            <span>{SEASON_LABEL[season]}</span> <span style={{ color: "var(--muted)" }}>· {DAY_LABEL[day]}</span>
          </div>
        </div>

        <div className="sim-section">
          <div className="sim-step">4. Add-ons opcionales</div>
          <div className="addon-checks">
            {ADDONS.map((a) => {
              const on = addons.has(a.id);
              return (
                <div className="check-row" key={a.id}>
                  <div className={`chk ${on ? "on" : ""}`} onClick={() => toggleAddon(a.id)} />
                  <div style={{ flex: 1 }}>
                    <div className="chk-label">{a.label}</div>
                    <div className="chk-sub">{a.sub}</div>
                  </div>
                  <div className="chk-price">+${money(a.price)}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="summary-box">
          <div className="sum-row"><span className="sum-muted">Paquete {selectedPkg.name} (Peak / Sábado)</span><span className="sum-val">${money(base)}</span></div>
          <div className="sum-row"><span className="sum-muted">Temporada <span className={`pill ${smClass}`}>{smPct}</span></span><span></span></div>
          <div className="sum-row"><span className="sum-muted">Día de semana <span className={`pill ${dmClass}`}>{dmPct}</span></span><span></span></div>
          <div className="sum-row" style={{ paddingBottom: 8, borderBottom: "0.5px solid rgba(255,255,255,0.12)", marginBottom: 4 }}>
            <span className="sum-muted">Subtotal paquete</span><span className="sum-val">${money(pkgAdj)}</span>
          </div>
          {[...addons].map((id) => {
            const a = ADDONS.find((x) => x.id === id);
            return (
              <div className="sum-row" key={id}>
                <span className="sum-muted">{a.label}</span><span className="sum-val">+${money(a.price)}</span>
              </div>
            );
          })}
          <div className="sum-total">
            <span className="sum-total-label">Total estimado</span>
            <span>${money(grand)} USD</span>
          </div>
        </div>
      </div>

      {onLock && (
        <button onClick={onLock} className="gate-exit" type="button">Salir / cambiar código</button>
      )}
      </div>
    </div>
  );
}

/* ============================================================
   5) COMPONENTE PRINCIPAL
   ============================================================ */
export const CotizadorConAcceso = () => {
  const { unlocked, checking, tryUnlock, lock } = useAccessGate();

  if (checking) return null;

  return unlocked ? <Quotizer onLock={lock} /> : <AccessGate onSubmit={tryUnlock} />;
};