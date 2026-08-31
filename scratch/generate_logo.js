const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="brandRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E51D24"/>
      <stop offset="100%" stop-color="#D71920"/>
    </linearGradient>
  </defs>

  <!-- Dark Background (optional, logo is transparent by default if no rect) -->
  <rect width="1200" height="800" fill="#0D0E10" rx="20"/>

  <g transform="translate(40, 20)">
    <!-- Slanted 4M Group -->
    <g transform="skewX(-13) translate(140, 0)">
      <!-- Number 4 (Red) -->
      <path d="
        M 345,120
        L 460,120
        L 460,375
        L 520,375
        L 520,465
        L 460,465
        L 460,545
        L 345,545
        L 345,465
        L 180,465
        L 180,385
        L 345,120
        Z
        M 345,245
        L 265,375
        L 345,375
        Z
      " fill="url(#brandRed)"/>

      <!-- Letter M (White) -->
      <path d="
        M 540,120
        L 660,120
        L 745,385
        L 830,120
        L 950,120
        L 950,545
        L 845,545
        L 845,260
        L 780,465
        L 710,465
        L 645,260
        L 645,545
        L 540,545
        Z
      " fill="#FFFFFF"/>
    </g>

    <!-- AUTOTECH (White Bold Sans-Serif) -->
    <!-- Custom clean geometric path text or high-spec SVG text -->
    <text x="560" y="675"
          text-anchor="middle"
          font-family="'Montserrat', 'Arial Black', 'Impact', sans-serif"
          font-weight="900"
          font-size="112"
          letter-spacing="14"
          fill="#FFFFFF">AUTOTECH</text>
  </g>
</svg>`;

fs.writeFileSync('scratch/test_logo.svg', svg);
console.log('Saved scratch/test_logo.svg');
