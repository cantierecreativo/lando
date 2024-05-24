import Script from "next/script";

export default function Iubenda({ siteId, policyId, visual, locale }) {
  const buttonTextColor = visual.colorButton.hex;
  const buttonBackColor = visual.colorButtonBack.hex;
  return (
    <>
      <Script
        id="iubenda-cs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "askConsentAtCookiePolicyUpdate": true,
            "countryDetection": true,
            "enableFadp": true,
            "enableLgpd": true,
            "lgpdAppliesGlobally": false,
            "perPurposeConsent": true,
            "siteId":${siteId},
            "lang":"${locale}",
            "cookiePolicyId":${policyId},
            "banner":{
              "prependOnBody":true,
              "acceptButtonDisplay":true,
              "closeButtonDisplay":false,
              "customizeButtonDisplay":true,
              "explicitWithdrawal":true,
              "listPurposes":true,
              "position":"bottom",
              "acceptButtonColor":"${buttonBackColor}",
              "acceptButtonCaptionColor":"${buttonTextColor}",
              "customizeButtonColor":"${buttonBackColor}",
              "customizeButtonCaptionColor":"${buttonTextColor}",
              "rejectButtonColor":"${buttonBackColor}",
              "rejectButtonCaptionColor":"${buttonTextColor}",
              "textColor":"${visual.colorText.hex}",
              "backgroundColor":"${visual.colorBack.hex}",
              "rejectButtonDisplay":true,
              "showPurposesToggles":true
            }
          }`,
        }}
      />
      <Script
        id="iubenda-cs-1"
        type="text/javascript"
        src={`https://cs.iubenda.com/autoblocking/${siteId}.js`}
      />
      <Script
        id="iubenda-cs-2"
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="lazyOnload"
      />
      <Script
        id="active-modal-cookie"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`,
        }}
      />
    </>
  );
}
