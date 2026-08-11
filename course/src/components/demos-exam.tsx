/* ---------------------------------------------------------------------------
   Exam stimuli: contexts no module showed. Each one tests a course concept
   on a surface the learner has never seen, so the exit drill measures the
   concept, not memory of the course's own cards.
--------------------------------------------------------------------------- */

const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
const INK = 'hsl(200 25% 15%)';
const INK2 = 'hsl(200 12% 40%)';
const INK3 = 'hsl(200 12% 45%)';
const LINE = 'hsl(197 18% 89%)';

function Box({ width = 280, pad = 20, radius = 8, children }: { width?: number; pad?: number; radius?: number; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width, maxWidth: '100%', background: '#fff',
        border: `1px solid ${LINE}`, borderRadius: radius,
        boxShadow: '0 1px 3px hsl(200 30% 20% / 0.07)',
        padding: pad, fontFamily: FONT, lineHeight: 1.45, userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
}

/* Hierarchy in a new context: a people list. Broken = roles as loud as names. */
export function TeamCard({ roleSize = 12.5, roleWeight = 400, roleColor = INK3 }: { roleSize?: number; roleWeight?: number; roleColor?: string }) {
  const rows: Array<[string, string]> = [
    ['Dana Rivas', 'Engineering lead'],
    ['Tom Okafor', 'Design'],
    ['Mei Chen', 'Support'],
  ];
  return (
    <Box>
      <div style={{ fontSize: 15, fontWeight: 650, color: INK }}>Team</div>
      <div style={{ height: 14 }} />
      <div style={{ display: 'grid', gap: 12 }}>
        {rows.map(([name, role]) => (
          <div key={name}>
            <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{name}</div>
            <div style={{ fontSize: roleSize, fontWeight: roleWeight, color: roleColor }}>{role}</div>
          </div>
        ))}
      </div>
    </Box>
  );
}

/* Grouping in a new context: a toolbar. Broken = uniform gaps, groups lost. */
export function Toolbar({ inGap = 6, betweenGap = 24 }: { inGap?: number; betweenGap?: number }) {
  const btn = (label: string) => (
    <span
      key={label}
      style={{
        display: 'inline-block', border: `1px solid ${LINE}`, borderRadius: 6,
        padding: '6px 10px', fontSize: 13, fontWeight: 600, color: INK2, background: '#fff',
      }}
    >
      {label}
    </span>
  );
  return (
    <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', fontFamily: FONT, userSelect: 'none', background: '#fff', border: `1px solid ${LINE}`, borderRadius: 8, padding: 12 }}>
      <span style={{ display: 'flex', gap: inGap }}>{btn('B')}{btn('I')}{btn('U')}</span>
      <span style={{ width: betweenGap }} />
      <span style={{ display: 'flex', gap: inGap }}>{btn('Link')}{btn('Image')}</span>
      <span style={{ width: betweenGap }} />
      <span style={{ display: 'flex', gap: inGap }}>{btn('Undo')}{btn('Redo')}</span>
    </div>
  );
}

/* Line height in a new context: a support reply. */
export function NoteCard({ lh = 1.55 }: { lh?: number }) {
  return (
    <Box width={300}>
      <div style={{ fontSize: 13, fontWeight: 600, color: INK2 }}>Support · reply</div>
      <div style={{ height: 10 }} />
      <div style={{ fontSize: 14, lineHeight: lh, color: INK }}>
        Thanks for flagging this. The export finished on our side, and the file
        should appear in your downloads within a minute. If it does not, the
        retry link below regenerates it without counting against your quota.
      </div>
    </Box>
  );
}

/* Contrast in a new context: a call-to-action button. */
export function CtaCard({ btnBg = 'hsl(195 75% 34%)' }: { btnBg?: string }) {
  return (
    <Box width={260}>
      <div style={{ fontSize: 15, fontWeight: 650, color: INK }}>Your report is ready</div>
      <div style={{ height: 6 }} />
      <div style={{ fontSize: 13.5, color: INK2, lineHeight: 1.5 }}>Twelve weeks of usage, summarized.</div>
      <div style={{ height: 14 }} />
      <span style={{ display: 'inline-block', background: btnBg, color: '#fff', fontSize: 13.5, fontWeight: 600, borderRadius: 6, padding: '9px 14px' }}>
        Download report
      </span>
    </Box>
  );
}

/* Radius nesting in a new context: a media card. Broken = inner ≥ outer. */
export function MediaCard({ innerRadius = 5 }: { innerRadius?: number }) {
  return (
    <Box width={260} radius={12} pad={10}>
      <div
        style={{
          height: 84, borderRadius: innerRadius,
          background: 'linear-gradient(135deg, hsl(195 45% 82%), hsl(195 55% 62%))',
        }}
      />
      <div style={{ padding: '12px 8px 6px' }}>
        <div style={{ fontSize: 14.5, fontWeight: 650, color: INK }}>Field notes, week 40</div>
        <div style={{ height: 4 }} />
        <div style={{ fontSize: 13, color: INK2 }}>Six screens, before and after.</div>
      </div>
    </Box>
  );
}

/* Labels in a new context: a half-filled form. Broken = placeholder-as-label. */
export function FilledForm({ placeholderOnly = false }: { placeholderOnly?: boolean }) {
  const field = (label: string, value: string) => (
    <div key={label}>
      {!placeholderOnly && (
        <>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: INK2 }}>{label}</div>
          <div style={{ height: 5 }} />
        </>
      )}
      <div style={{ border: `1px solid ${LINE}`, borderRadius: 6, padding: '8px 10px', fontSize: 14, color: value ? INK : INK3 }}>
        {value || (placeholderOnly ? label : ' ')}
      </div>
    </div>
  );
  return (
    <Box width={270}>
      <div style={{ fontSize: 15, fontWeight: 650, color: INK }}>Shipping</div>
      <div style={{ height: 14 }} />
      <div style={{ display: 'grid', gap: 14 }}>
        {field('Postal code', '10115')}
        {field('City', '')}
      </div>
    </Box>
  );
}
