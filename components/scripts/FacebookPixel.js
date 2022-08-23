export default function FacebookPixel({ id }) {
  return (
    <>
      <script
        type="plain/text"
        className="_iub_cs_activate"
        data-iub-purposes="5"
        dangerouslySetInnerHTML={{__html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${id}');
          fbq('track', 'PageView');
          `,
        }}
      />
      <noscript
        type="text/plain"
        className="_iub_cs_activate"
        data-iub-purposes="5"
      >
        <img
          height="1"
          width="1"
          alt=""
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
