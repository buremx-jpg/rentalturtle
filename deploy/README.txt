RENTAL TURTLE - WEB COMPLETA (versión 2026-10-23)
==================================================

ESTRUCTURA DE CARPETAS
----------------------
index.html            Portada en portugués (rentalturtle.com/)
carrito.html          Carrito (PT)
pack-desconto.html    Pack Desconto (PT)
404.html              Página de error
catalogo/             Fichas de producto en portugués
assets/               Imágenes, logos e iconos (PT)
blog/                 Blog en portugués
es/                   Versión en español (index, catalogo/, blog/, assets/, pack-descuento.html)
en/                   Versión en inglés (index, catalog/, blog/, assets/, pack-discount.html)
support.js, precios.js, wa-float.js, image-slot.js
                      Scripts compartidos (necesarios, no borrar)
sitemap.xml, robots.txt, llms.txt
                      SEO e indexación
_headers, _redirects  Reglas para hostings tipo Netlify/Cloudflare Pages
                      (se ignoran en hostings Apache/cPanel)
favicon.ico, favicon.png, apple-touch-icon.png, og-*.png
                      Iconos e imagen para redes sociales

Todas las rutas son relativas.

ABRIR EN LOCAL
--------------
Opción recomendada (servidor local, todo funciona igual que online):
  1. Abre una terminal dentro de esta carpeta.
  2. Ejecuta:  python3 -m http.server 8000
     (o con Node:  npx serve .)
  3. Abre en el navegador:  http://localhost:8000/

Opción rápida: doble clic en index.html. Se ve la web, pero algunos
navegadores bloquean scripts al abrir archivos sueltos (file://);
si algo no carga, usa el servidor local.

SUBIR A UN HOSTING (cPanel / Hostinger / similar)
-------------------------------------------------
  1. Entra en el Administrador de archivos y abre public_html/.
  2. Sube el ZIP y descomprímelo.
  3. Mueve TODO el contenido de la carpeta web_completa_2026-10-23/
     directamente a public_html/ (index.html debe quedar en
     public_html/index.html, no dentro de una subcarpeta).
  4. Borra la carpeta vacía y el ZIP.
  5. Comprueba rentalturtle.com/, /es/ y /en/.
  Opcional: borra README.txt del servidor.

Por FTP (FileZilla): sube el contenido de esta carpeta a public_html/.
