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
        id="iubenda-script"
        type="text/javascript"
        strategy="afterInteractive"
        src={`//cs.iubenda.com/sync/${siteId}.js`}
      />
      <Script
        id="iubenda-cs"
        type="text/javascript"
        strategy="afterInteractive"
        src="//cdn.iubenda.com/cs/beta/iubenda_cs.js"
      />
    </>
  );
}
