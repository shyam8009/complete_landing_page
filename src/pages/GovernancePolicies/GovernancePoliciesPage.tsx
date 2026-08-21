import { useState } from "react";
import heroImg from "@/imports/magnific_professional-outdoor-prod_y6xDQjJPW9.jpeg";

const F    = "'Inter', sans-serif";
const MONO = "'Courier New', Courier, monospace";
const GOLD = "#c4a030";
const BORDER  = "rgba(255,255,255,0.08)";
const MUTED   = "rgba(255,255,255,0.42)";
const MUTED2  = "rgba(255,255,255,0.18)";

const POLICIES = [
  "Cyber Security Policy",
  "Formal Letter Of Appointment / Re-Appointment Of Independent Directors",
  "Archival Policy",
  "Environment, Health & Safety Policy",
  "Familiarization Policy",
  "Policy On Board Diversity",
  "Nomination And Remuneration Policy",
  "Policy On Preservation Of Documents",
  "Stakeholders Relationship And Share Transfer Policy",
  "Anti Corruption Anti Bribery Policy",
  "Corporate Social Responsibility Policy",
  "Equal Opportunity Policy",
  "Determination Of Materiality Policy",
  "Fair Disclosure Of UPSI",
  "Policy For Determining Material Subsidiaries",
  "Related Party Transactions Policy",
  "Stationary Monitoring Policy",
  "Risk Management Policy",
];

// ── Shared micro-components ──────────────────────────────────────────────────

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
      <span style={{ fontFamily: MONO, fontSize: 11, color: GOLD, letterSpacing: "2px" }}>{n}</span>
      <div style={{ width: 40, height: 1, background: GOLD }} />
      <span style={{ fontFamily: MONO, fontSize: 11, color: MUTED, letterSpacing: "2px", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", height: "clamp(420px, 52vw, 620px)", overflow: "hidden" }}>
      {/* Background */}
      <img
        src={heroImg}
        alt=""
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "grayscale(60%) brightness(0.18)",
        }}
      />

      {/* Gold top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: GOLD }} />

      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 180,
        backgroundImage: "linear-gradient(to bottom, transparent, #030405)",
      }} />

      <div style={{
        position: "relative", height: "100%", display: "flex",
        flexDirection: "column", justifyContent: "flex-end",
        padding: "clamp(32px, 5vw, 72px) clamp(24px, 5vw, 80px)",
      }}>
        {/* Breadcrumb */}
        <p style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "2px", color: MUTED2, textTransform: "uppercase", marginBottom: 20 }}>
          Home&nbsp;&nbsp;/&nbsp;&nbsp;Investors&nbsp;&nbsp;/&nbsp;&nbsp;Governance
        </p>

        {/* Title */}
        <h1 style={{
          fontFamily: F, fontSize: "clamp(44px, 6.5vw, 96px)", fontWeight: 300,
          color: "#fff", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 40,
          maxWidth: 760,
        }}>
          Policies of the Company
        </h1>

        {/* CTA button */}
        <a
          href="mailto:investors@sahanadefence.com"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)",
            color: "#fff", fontFamily: F, fontSize: 13, fontWeight: 500,
            padding: "11px 22px", cursor: "pointer", borderRadius: 2,
            letterSpacing: "0.6px", textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196,160,48,0.12)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(196,160,48,0.5)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)";
          }}
        >
          Contact Investor Relations&nbsp;&nbsp;→
        </a>
      </div>
    </section>
  );
}

// ── Mission Statement ────────────────────────────────────────────────────────

function MissionStatement() {
  return (
    <section style={{
      background: "#030405", padding: "clamp(64px, 8vw, 112px) clamp(24px, 5vw, 80px)",
      borderBottom: `1px solid ${BORDER}`,
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        {/* Gold accent line */}
        <div style={{ width: 40, height: 2, background: GOLD, margin: "0 auto 32px" }} />

        <p style={{
          fontFamily: F, fontSize: "clamp(18px, 2.4vw, 26px)", fontWeight: 300,
          color: "rgba(255,255,255,0.88)", lineHeight: 1.65, letterSpacing: "0.01em",
          marginBottom: 40,
        }}>
          Our purpose is to provide a thorough Scrutinizer Report which plays a crucial role
          in ensuring the integrity and transparency of the voting process during the meeting.
        </p>

        <div style={{ width: 40, height: 1, background: BORDER, margin: "0 auto 40px" }} />

        <p style={{
          fontFamily: F, fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 400,
          color: MUTED, lineHeight: 1.75, maxWidth: 680, margin: "0 auto",
        }}>
          Providing our valued investors with essential updates and strategic insights to stay informed
          on the innovations, achievements, and future directions shaping our success.
        </p>
      </div>
    </section>
  );
}

// ── Policy Row ───────────────────────────────────────────────────────────────

function PolicyRow({ name, index }: { name: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 28px",
        border: `1px solid ${hovered ? "rgba(196,160,48,0.35)" : BORDER}`,
        borderRadius: 3,
        background: hovered ? "rgba(196,160,48,0.04)" : "rgba(255,255,255,0.02)",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "pointer",
        gap: 24,
      }}
    >
      {/* Left: index + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: MONO, fontSize: 11, color: GOLD, letterSpacing: "1px",
          flexShrink: 0, opacity: 0.75,
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span style={{
          fontFamily: F, fontSize: "clamp(13px, 1.4vw, 16px)", fontWeight: 400,
          color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
          transition: "color 0.2s", lineHeight: 1.4,
        }}>
          {name}
        </span>
      </div>

      {/* Right: download */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
        color: hovered ? GOLD : MUTED,
        fontFamily: F, fontSize: 13, fontWeight: 500, letterSpacing: "0.5px",
        transition: "color 0.2s",
      }}>
        <span>Download</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// ── Policies Section ─────────────────────────────────────────────────────────

function PoliciesSection() {
  return (
    <section style={{
      background: "#030405",
      padding: "clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionTag n="01" label="Governance Documents" />

        {/* Header row */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          marginBottom: 48, gap: 24, flexWrap: "wrap",
        }}>
          <h2 style={{
            fontFamily: F, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300,
            color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 520,
          }}>
            Corporate Governance Policies
          </h2>
          <p style={{
            fontFamily: MONO, fontSize: 11, color: MUTED2, letterSpacing: "1.5px",
            textTransform: "uppercase", textAlign: "right",
          }}>
            {POLICIES.length} Documents
          </p>
        </div>

        {/* Hairline top rule */}
        <div style={{ height: 1, background: BORDER, marginBottom: 20 }} />

        {/* Policy rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {POLICIES.map((policy, i) => (
            <PolicyRow key={policy} name={policy} index={i} />
          ))}
        </div>

        {/* Bottom rule */}
        <div style={{ height: 1, background: BORDER, marginTop: 20 }} />

        {/* Compliance note */}
        <p style={{
          fontFamily: MONO, fontSize: 11, color: MUTED2, letterSpacing: "1.5px",
          textTransform: "uppercase", marginTop: 24, textAlign: "center",
        }}>
          All policies are maintained in accordance with SEBI (LODR) Regulations 2015 and applicable corporate law
        </p>
      </div>
    </section>
  );
}

// ── CTA ──────────────────────────────────────────────────────────────────────

function InvestorCTA() {
  return (
    <section style={{
      background: "#030405",
      borderTop: `1px solid ${BORDER}`,
      padding: "clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Gold rule */}
        <div style={{ width: 40, height: 2, background: GOLD, marginBottom: 40 }} />

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px 64px", alignItems: "start",
        }}>
          {/* Left column */}
          <div>
            <h3 style={{
              fontFamily: F, fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300,
              color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20,
            }}>
              Investor Relations
            </h3>
            <p style={{
              fontFamily: F, fontSize: 15, fontWeight: 400, color: MUTED,
              lineHeight: 1.7, maxWidth: 420,
            }}>
              For governance enquiries, policy clarifications, or shareholder documentation,
              our investor relations team is available to assist.
            </p>
          </div>

          {/* Right column — contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <p style={{ fontFamily: MONO, fontSize: 10, color: GOLD, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>
                Email
              </p>
              <a
                href="mailto:investors@sahanadefence.com"
                style={{ fontFamily: F, fontSize: 16, color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 2 }}
              >
                investors@sahanadefence.com
              </a>
            </div>

            <div>
              <p style={{ fontFamily: MONO, fontSize: 10, color: GOLD, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>
                Registered Office
              </p>
              <p style={{ fontFamily: F, fontSize: 14, color: MUTED, lineHeight: 1.7 }}>
                Sahana Defence Limited<br />
                Panjrapol, Ambawadi<br />
                Ahmedabad – 380 015, Gujarat, India
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="mailto:investors@sahanadefence.com"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: GOLD, color: "#030405",
                  fontFamily: F, fontSize: 13, fontWeight: 600,
                  padding: "11px 22px", borderRadius: 2, textDecoration: "none",
                  letterSpacing: "0.5px",
                }}
              >
                Contact Investor Relations&nbsp;&nbsp;→
              </a>
            </div>
          </div>
        </div>

        {/* Legal footer note */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: MUTED2, letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: 1.8 }}>
            Sahana Defence Limited — CIN: U29304GJ2019PLC110476 — All governance documents are subject to periodic review and Board approval. For the most current versions, contact the Company Secretary.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GovernancePoliciesPage() {
  return (
    <div style={{ fontFamily: F, background: "#030405", color: "#fff", overflowX: "hidden" }}>
      <Hero />
      <MissionStatement />
      <PoliciesSection />
      <InvestorCTA />
    </div>
  );
}
