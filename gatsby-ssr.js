import React from 'react';

const GA_MEASUREMENT_ID = 'G-NTY2GFSYPX';
const GTM_ID = 'GTM-MMTVDWM';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      key="google-gtag-manager"
      dangerouslySetInnerHTML={{
        __html: `
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${GTM_ID}');
  
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push('js', new Date());
        window.dataLayer.push('config', '${GA_MEASUREMENT_ID}');
        `,
      }}
    />,
  ]);
  setPostBodyComponents([
    <noscript
      key="google-noscript-manager"
      dangerouslySetInnerHTML={{
        __html: `
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe>`,
      }}
    ></noscript>,
  ]);
};
