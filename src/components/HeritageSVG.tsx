/**
 * Balochistan Heritage SVG Illustrations
 * 
 * Subtle cultural motifs — Balochi pattern.
 * Used sparingly as decorative elements, never overwhelming content.
 * All SVGs use currentColor for theme adaptability.
 * 
 * Note: Camel imagery uses a real photograph (/images/Camel.jpg)
 * instead of SVG vectors for a more authentic representation.
 */

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
