/**
 * Balochistan Heritage SVG Illustrations
 * 
 * Subtle cultural motifs — camel caravan and Baloch figure.
 * Used sparingly as decorative elements, never overwhelming content.
 * All SVGs use currentColor for theme adaptability.
 */

/**
 * Camel caravan silhouette — evokes Balochistan's desert heritage.
 * Used as a subtle decorative element in hero/section backgrounds.
 */
export function CamelCaravan({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {/* Sand dunes */}
      <path
        d="M0 180 Q100 160 200 170 Q300 180 400 165 Q500 150 600 160 Q700 170 800 155 L800 200 L0 200 Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M0 190 Q150 175 300 185 Q450 195 600 180 Q700 175 800 185 L800 200 L0 200 Z"
        fill="currentColor"
        opacity="0.05"
      />

      {/* Camel 1 — lead */}
      <g transform="translate(500, 80)" opacity="0.15">
        {/* Body */}
        <ellipse cx="40" cy="60" rx="30" ry="18" fill="currentColor" />
        {/* Hump */}
        <ellipse cx="35" cy="45" rx="12" ry="10" fill="currentColor" />
        {/* Neck */}
        <path d="M55 55 Q65 30 60 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* Head */}
        <ellipse cx="62" cy="12" rx="8" ry="5" fill="currentColor" />
        {/* Legs */}
        <line x1="25" y1="75" x2="22" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="75" x2="33" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="75" x2="52" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="73" x2="60" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        {/* Tail */}
        <path d="M12 55 Q5 50 8 45" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Camel 2 — middle */}
      <g transform="translate(380, 90) scale(0.85)" opacity="0.12">
        <ellipse cx="40" cy="60" rx="30" ry="18" fill="currentColor" />
        <ellipse cx="35" cy="45" rx="12" ry="10" fill="currentColor" />
        <path d="M55 55 Q65 30 60 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
        <ellipse cx="62" cy="12" rx="8" ry="5" fill="currentColor" />
        <line x1="25" y1="75" x2="22" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="75" x2="33" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="75" x2="52" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="73" x2="60" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Camel 3 — trailing */}
      <g transform="translate(270, 95) scale(0.7)" opacity="0.09">
        <ellipse cx="40" cy="60" rx="30" ry="18" fill="currentColor" />
        <ellipse cx="35" cy="45" rx="12" ry="10" fill="currentColor" />
        <path d="M55 55 Q65 30 60 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
        <ellipse cx="62" cy="12" rx="8" ry="5" fill="currentColor" />
        <line x1="25" y1="75" x2="22" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="75" x2="33" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="75" x2="52" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="73" x2="60" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Handler figure walking ahead */}
      <g transform="translate(600, 85)" opacity="0.15">
        {/* Head */}
        <circle cx="10" cy="10" r="6" fill="currentColor" />
        {/* Body */}
        <line x1="10" y1="16" x2="10" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        {/* Arms */}
        <path d="M10 25 Q0 30 -5 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M10 25 Q20 30 25 28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <line x1="10" y1="50" x2="4" y2="75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="10" y1="50" x2="16" y2="75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Staff */}
        <line x1="25" y1="20" x2="28" y2="75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Turban hint */}
        <path d="M5 7 Q10 2 15 7" stroke="currentColor" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

/**
 * Baloch cultural motif — geometric pattern inspired by
 * traditional Balochi embroidery (needlework / dochi).
 * Used as a subtle border decoration.
 */
export function BalochiPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Repeating diamond/chevron pattern inspired by Balochi needlework */}
      <pattern id="balochi-motif" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 5 L30 20 L20 35 L10 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M20 10 L26 20 L20 30 L14 20 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.25" />
      </pattern>
      <rect width="400" height="40" fill="url(#balochi-motif)" />
    </svg>
  );
}

/**
 * Single camel silhouette — for use as a small decorative element.
 */
export function CamelSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="55" cy="55" rx="30" ry="18" fill="currentColor" opacity="0.12" />
      {/* Hump */}
      <ellipse cx="50" cy="40" rx="12" ry="10" fill="currentColor" opacity="0.12" />
      {/* Neck */}
      <path d="M70 50 Q80 25 75 10" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.12" />
      {/* Head */}
      <ellipse cx="77" cy="8" rx="8" ry="5" fill="currentColor" opacity="0.12" />
      {/* Legs */}
      <line x1="38" y1="70" x2="35" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
      <line x1="48" y1="70" x2="46" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
      <line x1="62" y1="70" x2="64" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
      <line x1="72" y1="68" x2="74" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
      {/* Tail */}
      <path d="M27 50 Q20 45 23 40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}
