
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: '/',
  criticalCssPlans: [[1,"/styles-NQTYAPSB.css",624,["button","input","select"],[],[[37,":root","{color-scheme:light;--paper:#fff;--canvas:#f7f8f5;--ink:#27332b;--muted:#818780;--line:#e8ebe6;--green:#4f8a60;font-family:Avenir Next,Avenir,Segoe UI,sans-serif;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:var(--canvas);color:var(--ink)}",[0],["avenir next","avenir","segoe ui","sans-serif"]],[5,"*","{box-sizing:border-box}",[0]],[5,"body","{min-width:320px;min-height:100vh;margin:0}",[0]],[5,[1,2,3],"{font:inherit}",[3,3,3]],[5,["button:focus-visible","a:focus-visible","input:focus-visible","select:focus-visible"],"{outline:3px solid rgb(77 126 87 / 35%);outline-offset:2px}",[[0,0,[1],0],[0,0,["a"],0],[0,0,[2],0],[0,0,[3],0]]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/overview",
    "relativeRedirect": true,
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bsr3gA8r.js",
      "chunk-B66Tu3L2.js"
    ],
    "route": "/overview"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DtaL2eCF.js",
      "chunk-B66Tu3L2.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 0,
    "redirectTo": "/overview",
    "relativeRedirect": true,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1253, hash: 'b58c6efa09bb7be8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '5a205b409bd1f89c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
