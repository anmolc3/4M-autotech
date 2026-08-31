const fs = require('fs');

// We will construct the exact vector SVG matching the uploaded brand asset.
// viewBox: 0 0 1000 660

// 1. Slanted '4' & 'M'
// We can apply skewX(-12) or bake the coordinates.
// Using SVG skewX(-12) keeps the geometry clean and mathematically perfect.

// Let's define the 4 and M in local coordinate space (skewed by -12 deg):
// 4 shape:
// Top: y=80
// Bottom: y=460 (height = 380)
// Crossbar: y=310 to y=385
// Stem right: x=395
// Stem left: x=290
// Crossbar right: x=440
// Crossbar left: x=115
// Top flat: x=270 to x=395
// Top-left chamfer: (270, 80) -> (190, 205) -> (115, 310)
// Or chamfer: (270, 80) -> (210, 160) -> (115, 310)
// Bottom stem: (290, 460) to (395, 460)

// Let's build the SVG:

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 660" width="100%" height="100%">
  <defs>
    <!-- Vibrant brand red matching reference image -->
    <linearGradient id="brandRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E51D24"/>
      <stop offset="100%" stop-color="#D71920"/>
    </linearGradient>
  </defs>

  <!-- Group with subtle forward racing slant for 4M -->
  <g transform="skewX(-11) translate(75, 0)">
    <!-- 4 (RED) -->
    <path d="
      M 285,75
      L 395,75
      L 395,305
      L 445,305
      L 445,385
      L 395,385
      L 395,465
      L 285,465
      L 285,385
      L 125,385
      L 125,315
      L 215,180
      L 285,75
      Z
      M 285,195
      L 205,305
      L 285,305
      Z
    " fill="url(#brandRed)" fill-rule="evenodd"/>

    <!-- M (WHITE) -->
    <path d="
      M 465,75
      L 585,75
      L 670,335
      L 755,75
      L 875,75
      L 875,465
      L 775,465
      L 775,230
      L 715,410
      L 625,410
      L 565,230
      L 565,465
      L 465,465
      Z
    " fill="#FFFFFF"/>
  </g>

  <!-- AUTOTECH (WHITE) - Pure vector paths for ultimate sharpness across all platforms -->
  <g fill="#FFFFFF" transform="translate(100, 520)">
    <!-- A -->
    <path d="M 12,90 L 44,90 L 52,65 L 84,65 L 92,90 L 124,90 L 79,0 L 57,0 Z M 68,23 L 58,51 L 78,51 Z"/>
    
    <!-- U -->
    <path d="M 148,0 L 178,0 L 178,55 Q 178,72 188,80 Q 198,88 214,88 Q 230,88 240,80 Q 250,72 250,55 L 250,0 L 280,0 L 280,55 Q 280,82 263,94 Q 244,106 214,106 Q 184,106 165,94 Q 148,82 148,55 Z" transform="translate(0, -10)"/>
    
    <!-- T -->
    <path d="M 302,0 L 398,0 L 398,24 L 365,24 L 365,90 L 335,90 L 335,24 L 302,24 Z"/>
    
    <!-- O -->
    <path d="M 460,0 Q 425,0 407,24 Q 389,48 389,80 Q 389,112 407,136 Q 425,160 460,160 Q 495,160 513,136 Q 531,112 531,80 Q 531,48 513,24 Q 495,0 460,0 Z M 460,25 Q 478,25 489,40 Q 500,56 500,80 Q 500,104 489,120 Q 478,135 460,135 Q 442,135 431,120 Q 420,104 420,80 Q 420,56 431,40 Q 442,25 460,25 Z" transform="scale(0.56) translate(335, 0)"/>
    
    <!-- T -->
    <path d="M 522,0 L 618,0 L 618,24 L 585,24 L 585,90 L 555,90 L 555,24 L 522,24 Z"/>
    
    <!-- E -->
    <path d="M 638,0 L 726,0 L 726,24 L 668,24 L 668,36 L 718,36 L 718,58 L 668,58 L 668,66 L 728,66 L 728,90 L 638,90 Z"/>
    
    <!-- C -->
    <path d="M 838,24 Q 822,8 800,8 Q 782,8 770,22 Q 757,36 757,56 Q 757,76 770,90 Q 782,104 800,104 Q 822,104 838,88 L 856,108 Q 832,128 798,128 Q 766,128 743,105 Q 720,82 720,56 Q 720,30 743,7 Q 766,-16 798,-16 Q 832,-16 856,4 Z" transform="scale(0.7) translate(300, 20)"/>
    
    <!-- H -->
    <path d="M 785,0 L 815,0 L 815,35 L 865,35 L 865,0 L 895,0 L 895,90 L 865,90 L 865,58 L 815,58 L 815,90 L 785,90 Z"/>
  </g>
</svg>`;

fs.writeFileSync('scratch/logo_vector.svg', logoSvg);
console.log('Saved scratch/logo_vector.svg');
