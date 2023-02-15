# Sito web del Museo Civico di Siena

## Come iniziare

Il progetto è compilato attraverso il generatore di siti statici Next.js (https://nextjs.org/).

Per installare l’ambiente necessario allo sviluppo è necessario avere installato sul proprio sistema il seguente _package manager_:

- [Yarn](https://yarnpkg.com/)

Una volta installati il _package manager_, è necessario eseguire i seguenti comandi:

```sh
yarn
```

e creare un file di configurazione `.envrc.private` personalizzato per la propria macchina:

```sh
NEXT_PUBLIC_DATO_API_KEY={{inserire la chiave API di sola lettura da DatoCMS}}
NEXT_PUBLIC_GTM=G-
NEXT_PUBLIC_IUBENDA_SITE_ID=
SITE_URL=http://localhost:3000/
NEXT_PUBLIC_W3F=
NEXT_PUBLIC_ENV=
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=
NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY=
NEXT_PUBLIC_MAPBOX_KEY=
```

Il sito può essere testato in ambiente locale eseguendo il seguente comando:

`yarn dev`

In questo modo il sito sarà disponibile all’indirizzo http://localhost:3000/.
