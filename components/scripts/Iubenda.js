import Script from "next/script";

export default function Iubenda({ siteId, policyId, visual, locale }) {
  const buttonTextColor = visual.colorButton.hex;
  const buttonBackColor = visual.colorButtonBack.hex;
  return (
    <>
      <Script
        id="iubenda"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || [];
          _iub.csConfiguration = {
            "localConsentDomain":"museocivico.comune.siena.it”,
            "lang":"${locale}",
            "siteId":${siteId},
            "cookiePolicyId":${policyId},
            "perPurposeConsent":true,
            "purposes":"1,4,5",
            "askConsentAtCookiePolicyUpdate":true,
            "countryDetection":true,
            "enableLgpd":true,
            "enableUspr":true,
            "floatingPreferencesButtonDisplay":"bottom-right",
            "invalidateConsentWithoutLog":true,
            "lgpdAppliesGlobally":false,
            "whitelabel":false,
            "banner":{
              "acceptButtonDisplay":true,
              "closeButtonDisplay":false,
              "customizeButtonDisplay":true,
              "explicitWithdrawal":true,
              "position":"float-bottom-right",
              "listPurposes":true,
              "position":"float-bottom-right",
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
      <Script id="iubenda-stub" src="//cdn.iubenda.com/cs/gpp/stub.js" />
      <Script id="iubenda-cs" src="//cdn.iubenda.com/cs/iubenda_cs.js" />
    </>
  );
}

{
  /* <script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"countryDetection":true,"enableLgpd":true,"enableUspr":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"lang":"it","lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":2934512,"whitelabel":false,"cookiePolicyId":29463556, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center","rejectButtonDisplay":true }};
</script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script> */
}
