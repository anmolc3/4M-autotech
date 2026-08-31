const fs = require('fs');

// High precision vector recreation of 4M AUTOTECH logo
function generateLogoSvg(width = 900, height = 600, showBg = false) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="${width}" height="${height}">
  <defs>
    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E51F26"/>
      <stop offset="100%" stop-color="#CE141B"/>
    </linearGradient>
  </defs>

  ${showBg ? '<rect width="900" height="600" fill="#0C0D0E"/>' : ''}

  <!-- 4M Graphic (Slanted Racing Italic) -->
  <g transform="skewX(-11) translate(95, 20)">
    <!-- RED '4' -->
    <path d="
      M 255,80
      L 355,80
      L 355,305
      L 405,305
      L 405,380
      L 355,380
      L 355,455
      L 255,455
      L 255,380
      L 105,380
      L 105,310
      L 200,165
      L 255,80
      Z
      M 255,195
      L 180,305
      L 255,305
      Z
    " fill="url(#redGradient)" fill-rule="evenodd"/>

    <!-- WHITE 'M' -->
    <path d="
      M 425,80
      L 535,80
      L 615,325
      L 695,80
      L 805,80
      L 805,455
      L 715,455
      L 715,225
      L 655,400
      L 575,400
      L 515,225
      L 515,455
      L 425,455
      Z
    " fill="#FFFFFF"/>
  </g>

  <!-- 'AUTOTECH' (White bold uppercase text) -->
  <text x="450" y="545"
        text-anchor="middle"
        font-family="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        font-weight="900"
        font-size="86"
        letter-spacing="9"
        fill="#FFFFFF">AUTOTECH</text>
</svg>`;
}

fs.writeFileSync('assets/logo.svg', generateLogoSvg(900, 600, false));
fs.writeFileSync('scratch/preview_logo.html', `<!DOCTYPE html>
<html>
<head>
<style>
body { background: #0a0a0a; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; font-family: sans-serif; gap: 40px;}
.box { border: 1px solid #333; padding: 20px; border-radius: 12px; background: #111; }
.nav-preview { width: 140px; height: 44px; background: #111; border-radius: 8px; padding: 4px 8px; display: flex; align-items: center;}
.nav-preview img { width: 100%; height: 100%; object-fit: contain; }
</style>
</head>
<body>
  <h2>4M AUTOTECH Vector SVG Logo</h2>
  <div class="box">
    <img src="../assets/logo.svg" style="width: 500px; height: auto;" />
  </div>
  <h3>Navbar Size Preview (44px height):</h3>
  <div class="nav-preview">
    <img src="../assets/logo.svg" />
  </div>
</body>
</html>`);

console.log('Logo generated and preview created.');
