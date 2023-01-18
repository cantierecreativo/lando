import Script from "next/script";

export default function Iubenda({ siteId, policyId, visual, locale }) {
  const buttonTextColor = visual.colorButton.hex;
  const buttonBackColor = visual.colorButtonBack.hex;
  return (
    <>
      <Script id="iubenda-cs" src="//cdn.iubenda.com/cs/iubenda_cs.js" />
      <Script
        id="iubenda"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || [];
            _iub.csConfiguration = {
            "localConsentDomain":"museocivico.comune.siena.it”,
            "consentOnContinuedBrowsing":true,
            "invalidateConsentWithoutLog":true,
            "lang":"${locale}",
            "siteId":${siteId},
            "cookiePolicyId":${policyId},
            "perPurposeConsent":true,
            "purposes":"1,4,5",
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
            `,
        }}
      />
    </>
  );
}
