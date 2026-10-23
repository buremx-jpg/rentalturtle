window.RT_PRECIOS = Object.freeze({ berco: 30 });
// Produtos ativos. Itens do carrinho (localStorage 'rt-cart') com outro id são removidos ao carregar a página.
// 'bebe-conforto' OCULTO temporalmente (ver abaixo). Lista original:
// ['bebe-conforto','compacto','cadeirinha','cadeirinha-360','assento-elevacao','cadeira','berco','banheira','colchao']
window.RT_PRODUCT_IDS = Object.freeze(['compacto','carrinho-cheerio','cadeirinha','cadeirinha-360','assento-elevacao','cadeira','berco','banheira','colchao']);

/* ============ PARA REACTIVAR BEBÊ CONFORTO ============
 1. precios.js: volver a poner 'bebe-conforto' al inicio de RT_PRODUCT_IDS (lista original arriba).
 2. En TODAS las páginas con el catálogo (Rental Turtle.dc.html, deploy/index.html, es/index.html, en/index.html,
    carrito.html, pack-desconto.html, es/pack-descuento.html, en/pack-discount.html y las fichas de catalogo/,
    es/catalogo/, en/catalog/): en PRODUCTS quitar  oculto:true  (y su comentario OCULTO) de la línea { id:'bebe-conforto', ... }.
    (El filtro !p.oculto del catálogo, carrito, relacionados y PACK_PRODUCTS puede quedarse: sin el flag no oculta nada.)
 3. Texto de la cadeirinha (DETAILS.cadeirinha, mismas páginas) restaurar:
    PT: "para isso, o bebê conforto ou o assento de elevação (a partir de 15 kg) são mais práticos."
    ES: "para eso es más práctica la sillita de coche para bebé o el asiento elevador (desde 15 kg)."
    EN: "for that, the infant car seat or the booster seat (from 15 kg) is more practical."
 4. pack-desconto.html: meta description / og / twitter: "carrinho, cadeirinha, berço" -> "carrinho, bebê conforto, berço".
 5. blog/onde-alugar-carrinho-bebe-rio-de-janeiro.html: h3 "Cadeirinha de carro" -> "Cadeirinha de carro e bebê conforto" (borrar el comentario OCULTO).
 6. wa-float.js: volver a poner 'bebe-conforto' al inicio de IDS.
 7. llms.txt: re-añadir "- Infant car seat (bebê conforto)" tras "- Baby stroller / pushchair (carrinho de passeio)"
    y "- Infant car seat: from R$25/day" tras "- Stroller: from R$30/day".
 8. sitemap.xml: descomentar los 3 bloques <url> marcados "OCULTO bebe-conforto".
 9. _redirects: borrar el bloque "# OCULTO bebe-conforto" (las 6 líneas 302!).
 Nada se borró: fichas, fotos (assets/prod-bebe-conforto.webp), precios (TOPES, PRICES_3_7, PACK_DAILY) y textos siguen intactos.
======================================================= */
