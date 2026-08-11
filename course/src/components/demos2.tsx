import type { CSSProperties } from 'react';

/* ---------------------------------------------------------------------------
   Demo surfaces for modules 2 to 6. Same contract as demos.tsx:
   every surface renders from tokens, every "wrong" variant is a perturbation.
--------------------------------------------------------------------------- */

const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
const INK = 'hsl(200 25% 15%)';
const INK2 = 'hsl(200 12% 40%)';
const LINE = 'hsl(197 18% 89%)';

function Shell({ width = 300, pad = 24, children }: { width?: number; pad?: number | string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width, maxWidth: '100%', background: '#fff',
        border: `1px solid ${LINE}`, borderRadius: 8,
        boxShadow: '0 1px 3px hsl(200 30% 20% / 0.07)',
        padding: pad, fontFamily: FONT, lineHeight: 1.45, userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------- module 2 -------------------------------- */

export interface FormTokens {
  labelGapAbove: number;   // gap from previous element down to this label
  labelGapBelow: number;   // gap from label down to its own field
  align: 'left' | 'scattered';
  drift?: number;          // 0..1 scatter magnitude when align is 'scattered'
}

export const attachedForm: FormTokens = { labelGapAbove: 24, labelGapBelow: 6, align: 'left' };
/* Proximity perturbation: labels float equidistant between fields. */
export const floatingForm: FormTokens = { labelGapAbove: 14, labelGapBelow: 14, align: 'left' };
/* Alignment perturbation: same spacing, edges scattered. */
export const scatteredForm: FormTokens = { labelGapAbove: 24, labelGapBelow: 6, align: 'scattered' };

export function FormCard({ tokens = attachedForm }: { tokens?: FormTokens }) {
  const t = tokens;
  const d = t.align === 'scattered' ? (t.drift ?? 1) : 0;
  const field = (label: string, value: string, i: number) => (
    <div key={label} style={{ textAlign: d > 0 && i === 1 ? 'right' : 'left' }}>
      <div style={{ height: i === 0 ? 0 : t.labelGapAbove }} />
      <div style={{ fontSize: 13, fontWeight: 600, color: INK2, marginLeft: i === 0 ? 14 * d : 0 }}>{label}</div>
      <div style={{ height: t.labelGapBelow }} />
      <div
        style={{
          border: `1px solid ${LINE}`, borderRadius: 6, padding: '8px 10px',
          fontSize: 14, color: INK, width: i === 1 ? `${100 - 20 * d}%` : '100%',
          marginLeft: i === 1 ? 'auto' : 0, textAlign: 'left',
        }}
      >
        {value}
      </div>
    </div>
  );
  return (
    <Shell width={290}>
      <div style={{ fontSize: 16, fontWeight: 650, color: INK, textAlign: d > 0.7 ? 'center' : 'left', marginLeft: d > 0 && d <= 0.7 ? 10 * d : 0 }}>
        Create project
      </div>
      {field('Project name', 'marketing-site', 0)}
      {field('Region', 'eu-west-1', 1)}
      <div style={{ height: t.labelGapAbove }} />
      <span
        style={{
          display: 'inline-block', background: 'hsl(195 75% 34%)', color: '#fff',
          fontSize: 13.5, fontWeight: 600, borderRadius: 6, padding: '8px 14px',
          marginLeft: `${30 * d}%`,
        }}
      >
        Create
      </span>
    </Shell>
  );
}

/* ------------------------------- module 3 -------------------------------- */

export interface TypeTokens {
  hSize: number; hWeight: number;
  metaSize: number;
  bodySize: number; bodyLh: number;
  width: number;
}

export const scaledType: TypeTokens = { hSize: 21, hWeight: 650, metaSize: 13, bodySize: 15.5, bodyLh: 1.55, width: 320 };
/* Scale perturbation: sizes too close together to rank. */
export const crowdedType: Partial<TypeTokens> = { hSize: 17, metaSize: 15 };

export function TypeCard({ tokens = {} }: { tokens?: Partial<TypeTokens> }) {
  const t: TypeTokens = { ...scaledType, ...tokens };
  return (
    <Shell width={t.width}>
      <div style={{ fontSize: t.hSize, fontWeight: t.hWeight, color: INK, lineHeight: 1.25 }}>
        Migrating the billing service
      </div>
      <div style={{ height: 6 }} />
      <div style={{ fontSize: t.metaSize, color: 'hsl(200 12% 45%)' }}>Priya Sharma · 6 min read</div>
      <div style={{ height: 14 }} />
      <div style={{ fontSize: t.bodySize, color: INK2, lineHeight: t.bodyLh }}>
        We moved four years of invoices to the new service without downtime. The
        plan looked safe in review. Two days in, a queue we had never monitored
        started dropping events, and the fix taught us more than the migration.
      </div>
    </Shell>
  );
}

/* ------------------------------- module 4 -------------------------------- */

export const bannerTint = 'hsl(195 65% 90%)';

export function ColorBanner({ sub = bannerTint }: { sub?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 300, maxWidth: '100%', background: 'hsl(195 65% 32%)',
        borderRadius: 8, padding: 24, fontFamily: FONT, userSelect: 'none',
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 650, color: '#fff' }}>Winter release</div>
      <div style={{ height: 8 }} />
      <div style={{ fontSize: 14, lineHeight: 1.5, color: sub }}>
        Faster search, offline mode, and a calmer notification screen. Rolling
        out to all workspaces this week.
      </div>
      <div style={{ height: 16 }} />
      <span
        style={{
          display: 'inline-block', background: '#fff', color: 'hsl(196 80% 27%)',
          fontSize: 13.5, fontWeight: 600, borderRadius: 6, padding: '8px 14px',
        }}
      >
        See what's new
      </span>
    </div>
  );
}

export function ContrastPair() {
  const sample = (tag: string, color: string, ratio: string) => (
    <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderRadius: 8, padding: 16, width: 220, maxWidth: '100%' }}>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'hsl(200 12% 45%)', marginBottom: 8 }}>{tag}</div>
      <div style={{ fontSize: 14.5, lineHeight: 1.5, color }}>
        Refunds usually arrive within five business days of approval.
      </div>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: 'hsl(200 12% 45%)', marginTop: 8 }}>{ratio}</div>
    </div>
  );
  return (
    <div aria-hidden="true" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: FONT, userSelect: 'none' }}>
      {sample('sample A', '#999999', 'contrast ?')}
      {sample('sample B', '#767676', 'contrast ?')}
    </div>
  );
}

/* ------------------------------- module 5 -------------------------------- */

export const consistentShadows = [
  '0 1px 2px hsl(200 30% 20% / 0.08)',
  '0 1px 2px hsl(200 30% 20% / 0.08)',
  '0 6px 16px hsl(200 30% 20% / 0.12), 0 2px 4px hsl(200 30% 20% / 0.06)',
];

export function DepthRow({ shadows = consistentShadows }: { shadows?: string[] }) {
  const mode = shadows === consistentShadows ? 'consistent' : 'mixed';
  const card = (title: string, value: string, shadow: string, raised?: boolean) => (
    <div
      key={title}
      style={{
        background: '#fff', borderRadius: 8, padding: 14, width: 108,
        boxShadow: shadow, transform: raised && mode === 'consistent' ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ fontSize: 11.5, color: INK2 }}>{title}</div>
      <div style={{ fontSize: 17, fontWeight: 650, color: INK, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
    </div>
  );
  return (
    <div aria-hidden="true" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontFamily: FONT, userSelect: 'none', padding: 6 }}>
      {card('Requests', '84k', shadows[0])}
      {card('Errors', '0.3%', shadows[1])}
      {card('Latency p95', '212ms', shadows[2], true)}
    </div>
  );
}

export interface SeparationTokens { borders: boolean }

export function SettingsCard({ tokens = { borders: false } }: { tokens?: SeparationTokens }) {
  const b = tokens.borders;
  const row = (label: string, value: string, last?: boolean) => (
    <div
      key={label}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: b ? '10px 10px' : '10px 0',
        border: b ? `1px solid ${LINE}` : 'none',
        borderBottom: b ? `1px solid ${LINE}` : last ? 'none' : `1px solid hsl(197 18% 93%)`,
        borderRadius: b ? 6 : 0,
        marginBottom: b ? 8 : 0,
      }}
    >
      <span style={{ fontSize: 13.5, color: INK2 }}>{label}</span>
      <span style={{ fontSize: 13.5, color: INK, fontWeight: 600 }}>{value}</span>
    </div>
  );
  return (
    <Shell width={280} pad={b ? 16 : 24}>
      <div
        style={{
          fontSize: 15, fontWeight: 650, color: INK,
          padding: b ? '8px 10px' : 0,
          border: b ? `1px solid ${LINE}` : 'none', borderRadius: b ? 6 : 0, marginBottom: b ? 8 : 14,
        }}
      >
        Notifications
      </div>
      {row('Mentions', 'Push + email')}
      {row('Deploys', 'Push')}
      {row('Weekly digest', 'Email', true)}
    </Shell>
  );
}

/* ------------------------------- module 6 -------------------------------- */

export type UiState = 'ideal' | 'empty' | 'loading' | 'error';

export function StateCard({ state = 'ideal' }: { state?: UiState }) {
  const rows: Array<[string, string]> = [
    ['Acme Corp', '$4,800.00'],
    ['Northwind', '$1,250.00'],
    ['Initech', '$720.00'],
  ];
  const bar = (w: string) => (
    <div style={{ height: 12, width: w, borderRadius: 6, background: 'hsl(197 18% 92%)' }} />
  );
  return (
    <Shell width={280}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 16, fontWeight: 650, color: INK }}>Invoices</span>
        <span style={{ fontSize: 12.5, color: 'hsl(200 12% 45%)' }}>March</span>
      </div>
      <div style={{ height: 18 }} />

      {state === 'ideal' && (
        <div style={{ display: 'grid', gap: 12 }}>
          {rows.map(([name, amount]) => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, color: INK2 }}>{name}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: INK, fontVariantNumeric: 'tabular-nums' }}>{amount}</span>
            </div>
          ))}
        </div>
      )}

      {state === 'loading' && (
        <div style={{ display: 'grid', gap: 14 }}>
          {bar('100%')}{bar('88%')}{bar('94%')}
        </div>
      )}

      {state === 'empty' && (
        <div style={{ textAlign: 'center', padding: '6px 0' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>No invoices yet</div>
          <div style={{ height: 6 }} />
          <div style={{ fontSize: 13, color: INK2, lineHeight: 1.5 }}>
            Invoices you send will show up here, with their payment status.
          </div>
        </div>
      )}

      {state === 'error' && (
        <div
          style={{
            background: 'hsl(354 65% 97%)', border: '1px solid hsl(354 55% 88%)',
            borderRadius: 6, padding: 12,
          }}
        >
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'hsl(354 55% 40%)' }}>
            Couldn't load invoices
          </div>
          <div style={{ height: 4 }} />
          <div style={{ fontSize: 13, color: INK2, lineHeight: 1.5 }}>
            Your connection dropped mid-request. Your data is safe.
          </div>
        </div>
      )}

      <div style={{ height: 18 }} />
      <span
        style={{
          display: 'inline-block',
          background: state === 'error' ? '#fff' : 'hsl(195 75% 34%)',
          color: state === 'error' ? 'hsl(196 80% 27%)' : '#fff',
          border: state === 'error' ? `1px solid ${LINE}` : '1px solid transparent',
          fontSize: 13.5, fontWeight: 600, borderRadius: 6, padding: '8px 14px',
        }}
      >
        {state === 'empty' ? 'Send your first invoice' : state === 'error' ? 'Retry' : 'New invoice'}
      </span>
    </Shell>
  );
}

export function ErrorField({ good = false }: { good?: boolean }) {
  return (
    <Shell width={290}>
      <div style={{ fontSize: 13, fontWeight: 600, color: INK2 }}>Card number</div>
      <div style={{ height: 6 }} />
      <div
        style={{
          border: '1px solid hsl(354 55% 60%)', borderRadius: 6, padding: '8px 10px',
          fontSize: 14, color: INK, fontVariantNumeric: 'tabular-nums',
        }}
      >
        4242 4242 4242 424
      </div>
      <div style={{ height: 6 }} />
      <div style={{ fontSize: 12.5, lineHeight: 1.5, color: 'hsl(354 55% 40%)' }}>
        {good
          ? 'This number has 15 digits; card numbers have 16. The last group looks one short.'
          : 'Error 422: validation failed (card_number)'}
      </div>
    </Shell>
  );
}
