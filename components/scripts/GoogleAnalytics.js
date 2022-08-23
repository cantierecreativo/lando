export default function GoogleAnalytics({ id }) {
  return (
    <>
      <script
        async={true}
        type="plain/text"
        className="_iub_cs_activate"
        data-iub-purposes="4"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <script
        type="plain/text"
        className="_iub_cs_activate"
        data-iub-purposes="4"
        dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  )
}
