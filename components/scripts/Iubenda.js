import Script from "next/script";

export default function Iubenda({ siteId, policyId, visual, locale }) {
  const buttonTextColor = visual.colorButton.hex;
  const buttonBackColor = visual.colorButtonBack.hex;
  return null;
  return (
    <>
      <Script id="iubenda-cs" src="//cdn.iubenda.com/cs/iubenda_cs.js" />
      <Script
        id="iubenda"
        dangerouslySetInnerHTML={{
          __html: `
        var _iub = _iub || [];
        _iub.csConfiguration = {
          "lang":"it",
          "siteId":2934512,
          "cookiePolicyId":29463556,
          "perPurposeConsent":true,
          "localConsentDomain":"museocivico.comune.siena.it”,
          "consentOnContinuedBrowsing": false,
          "consentOnDocument": true,
          "purposes": "1, 3, 4",
          "banner":{
              "acceptButtonDisplay":true,
              "customizeButtonDisplay":true,
              "position":"float-bottom-right",
              "closeButtonDisplay":false,
              "acceptButtonColor":"#146644",
              "acceptButtonCaptionColor":"white",
              "customizeButtonColor":"#146644",
              "customizeButtonCaptionColor":"white",
              "rejectButtonColor":"#146644",
              "rejectButtonCaptionColor":"white",
              "textColor":"#ffffff",
              "backgroundColor":"#043D2F",
              "rejectButtonDisplay":true,
              "closeButtonRejects":true
            },
            callback: {
              onPreferenceExpressedOrNotNeeded: function(preference) {
                window.consentIsGiven = preference;
              }
            }
          }`,
        }}
      />
    </>
  );
}
