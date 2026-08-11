import type { CSSProperties, ReactNode } from 'react';

/* ---------------------------------------------------------------------------
   Demo UIs, rendered from tokens.
   Every "wrong" variant in a drill is the same component with a few tokens
   perturbed — nothing is a screenshot. This is the seed of the Layer-3
   trainer described in research/delivery.md §3.
--------------------------------------------------------------------------- */

export interface CardTokens {
  pad: string;          // container padding
  gapTitle: string;     // title block → rows
  gapRow: string;       // between rows
  gapFoot: string;      // rows → footer
  titleSize: number;
  titleWeight: number;
  metaColor: string;
  labelColor: string;
  labelSize: number;
  valueColor: string;
  valueWeight: number;
  radius: number;
  btnKind: 'primary' | 'ghost' | 'loud-ghost';
}

export const goodCard: CardTokens = {
  pad: '24px',
  gapTitle: '20px',
  gapRow: '12px',
  gapFoot: '20px',
  titleSize: 16,
  titleWeight: 650,
  metaColor: 'hsl(200 9% 54%)',
  labelColor: 'hsl(200 12% 40%)',
  labelSize: 14,
  valueColor: 'hsl(200 25% 15%)',
  valueWeight: 600,
  radius: 8,
  btnKind: 'primary',
};

/* Spacing perturbation: no scale, every gap eyeballed independently. */
export const offScaleCard: Partial<CardTokens> = {
  pad: '17px 13px 25px 19px',
  gapTitle: '9px',
  gapRow: '19px',
  gapFoot: '31px',
};

/* Hierarchy perturbation: every token flattened to the same volume. */
export const flatCard: Partial<CardTokens> = {
  titleSize: 14,
  titleWeight: 400,
  metaColor: 'hsl(200 25% 15%)',
  labelColor: 'hsl(200 25% 15%)',
  labelSize: 14,
  valueColor: 'hsl(200 25% 15%)',
  valueWeight: 400,
  btnKind: 'loud-ghost',
};

const ROWS: Array<[string, string]> = [
  ['Acme Corp', '$4,800.00'],
  ['Northwind', '$1,250.00'],
  ['Initech', '$720.00'],
];

function CardButton({ kind }: { kind: CardTokens['btnKind'] }) {
  const base: CSSProperties = {
    fontSize: 13.5,
    borderRadius: 6,
    padding: '8px 14px',
    cursor: 'default',
    border: '1px solid transparent',
    fontWeight: 600,
  };
  const kinds: Record<CardTokens['btnKind'], CSSProperties> = {
    primary: { background: 'hsl(195 75% 34%)', color: '#fff' },
    ghost: { background: '#fff', color: 'hsl(196 80% 27%)', borderColor: 'hsl(197 18% 88%)' },
    'loud-ghost': { background: '#fff', color: 'hsl(200 25% 15%)', borderColor: 'hsl(200 25% 15%)', fontWeight: 400 },
  };
  return (
    <span style={{ ...base, ...kinds[kind], display: 'inline-block' }} aria-hidden="true">
      New invoice
    </span>
  );
}

export function InvoiceCard({ tokens = {}, width = 280 }: { tokens?: Partial<CardTokens>; width?: number }) {
  const t: CardTokens = { ...goodCard, ...tokens };
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        maxWidth: '100%',
        background: '#fff',
        border: '1px solid hsl(197 18% 89%)',
        borderRadius: t.radius,
        boxShadow: '0 1px 3px hsl(200 30% 20% / 0.07)',
        padding: t.pad,
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.4,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: t.titleSize, fontWeight: t.titleWeight, color: 'hsl(200 25% 15%)' }}>
          Invoices
        </span>
        <span style={{ fontSize: 12.5, color: t.metaColor }}>March</span>
      </div>
      <div style={{ height: t.gapTitle }} />
      <div style={{ display: 'grid', gap: t.gapRow }}>
        {ROWS.map(([name, amount]) => (
          <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: t.labelSize, color: t.labelColor }}>{name}</span>
            <span
              style={{
                fontSize: t.labelSize,
                color: t.valueColor,
                fontWeight: t.valueWeight,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {amount}
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: t.gapFoot }} />
      <CardButton kind={t.btnKind} />
    </div>
  );
}

/* A settings screen whose loudest element is the wrong one — used by the
   prominence-vs-importance drill in module 1. */
export function MismatchCard({ width = 300 }: { width?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        maxWidth: '100%',
        background: '#fff',
        border: '1px solid hsl(197 18% 89%)',
        borderRadius: 8,
        boxShadow: '0 1px 3px hsl(200 30% 20% / 0.07)',
        padding: 24,
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.45,
        userSelect: 'none',
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 650, color: 'hsl(200 25% 15%)' }}>Your trial ends in 3 days</div>
      <div style={{ height: 8 }} />
      <div style={{ fontSize: 14, color: 'hsl(200 12% 40%)' }}>
        Keep your projects and history by choosing a plan.
      </div>
      <div style={{ height: 20 }} />
      <div style={{ display: 'grid', gap: 10 }}>
        <span
          style={{
            fontSize: 14.5, fontWeight: 600, textAlign: 'center',
            background: 'hsl(195 75% 34%)', color: '#fff',
            borderRadius: 6, padding: '10px 14px',
          }}
        >
          Compare all 14 features
        </span>
        <span
          style={{
            fontSize: 13.5, textAlign: 'center', color: 'hsl(200 9% 54%)',
            padding: '4px', textDecoration: 'underline', textUnderlineOffset: 2,
          }}
        >
          upgrade now
        </span>
      </div>
    </div>
  );
}

export function DemoMat({ children }: { children: ReactNode }) {
  return <div className="demo-mat">{children}</div>;
}
