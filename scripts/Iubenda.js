import Script from "next/script";

export default function Iubenda({ siteId, policyId, visual, locale }) {
  const buttonTextColor = visual.colorButton.hex
  const buttonBackColor = visual.colorButtonBack.hex
  return (
    <>
      <Script
        id="iubenda-policy"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
        `}}
      />
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
      />
      <Script
        id="iubenda-cs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || [];
            _iub.csConfiguration = {
            "consentOnContinuedBrowsing": true,
            "lang":"${locale}",
            "siteId":${siteId},
            "cookiePolicyId":${policyId},
            "perPurposeConsent": true,
            "purposes": "1, 4, 5",
            "banner":{
              "acceptButtonDisplay":true,
              "customizeButtonDisplay":true,
              "position":"float-bottom-right",
              "closeButtonDisplay":false,
              "acceptButtonColor":"${buttonBackColor}",
              "acceptButtonCaptionColor":"${buttonTextColor}",
              "customizeButtonColor":"${buttonBackColor}",
              "customizeButtonCaptionColor":"${buttonTextColor}",
              "rejectButtonColor":"${buttonBackColor}",
              "rejectButtonCaptionColor":"${buttonTextColor}",
              "textColor":"${visual.colorText.hex}",
              "backgroundColor":"${visual.colorBack.hex}",
              "rejectButtonDisplay":true,
              "closeButtonRejects":true
            },
            "callback":{
              onPreferenceExpressedOrNotNeeded: function(preference) {
                window.consentIsGiven = preference;
              }
            }};
            `
        }}
      />
    </>
  )
}
