// ==UserScript==
// @name         Tamper Tokped
// @version      0.0.1
// @description  Userscript to improve Tokopedia by overriding and/or hiding elements
// @license      MIT
// @author       Griko Nibras
// @namespace    https://github.com/grikomsn
// @match        https://tokopedia.com/*
// @match        https://www.tokopedia.com/*
// @run-at       document-end
// @grant        none
// @icon         https://www.tokopedia.com/favicon.ico
// @updateURL    https://nbr.st/tamper-tokped.js
// @downloadURL  https://nbr.st/tamper-tokped.js
// @supportURL   https://github.com/grikomsn/tamper-tokped/issues
// ==/UserScript==

(() => {
  "use strict";
  let el = document.createElement("style"),
    css = String.raw;
  el.innerHTML = css`
    * {
      animation-duration: 0s !important;
    }

    [aria-label="unf-overlay"],
    [data-testid="overlayHeaderNotif"],
    [data-testid="overLayShopUser"],
    [override-modal-overlay-styles] {
      backdrop-filter: blur(8px);
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }

    .css-1rm20k0 > [tabindex="-1"] /* hide wishlist info callout */,
    #header-main-wrapper > :first-child /* hide secondary navbar */,
    #trending-popular-keywords /* hide navbar trending keywords */,
    main > button:last-child /* hide home page chat button */,
    [hide-unnecessary-elements] {
      display: none;
    }

    .css-mcivn2 > :first-child /* my shop button */,
    [data-testid="btnHeaderMyshop"] /* my shop button */,
    [prevent-user-interaction] {
      opacity: 25%;
      pointer-events: none;
    }
  `;
  document.head.appendChild(el);
})();
