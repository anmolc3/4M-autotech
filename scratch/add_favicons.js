const fs = require('fs');

const files = [
  'index.html',
  'about.html',
  'products.html',
  'services.html',
  'home-service.html',
  'contact.html',
  'privacy-policy.html',
  'terms.html'
];

const faviconSnippet = `    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="css/style.css">`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('apple-touch-icon.png')) {
      content = content.replace('<link rel="stylesheet" href="css/style.css">', faviconSnippet);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Added favicons to ' + file);
    }
  }
});
