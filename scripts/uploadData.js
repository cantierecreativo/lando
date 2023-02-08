const { algoliaClient, getAlgoliaIndices } = require("./algolia/client");
const {
  request,
  getDatoLocales,
  getDatoLocalizedAssets,
} = require("./datocms/client");
const { formatArtwork } = require("./utilities");

const defaultIndices = [
  {
    name: "artworks",
    searchableAttributes: ["title"],
    collection: "artworks",
  },
];

const initializeIndices = async ({ indices, locales, formattedAssets }) => {
  locales.forEach(async (locale) => {
    defaultIndices.forEach(async (index) => {
      const { name, searchableAttributes, collection } = index;
      const indexObj = await algoliaClient.initIndex(`${name}_${locale}`);
      const data = formattedAssets[locale][name];
      await indexObj.clearObjects();
      try {
        console.log(
          `Update ${name}_${locale} index. Found ${data.length} elements.`
        );
        {
          console.log("data:", data);
        }

        await indexObj.saveObjects(data);
      } catch (error) {
        console.log(error);
      }
    });
  });
};

const formatAssets = ({ assets, locales }) => {
  const { allArtworks } = assets;
  const localizedData = [];

  const localizedArtwork = locales.map((locale) => {
    const formattedArtworks = allArtworks.map((artwork) => {
      return formatArtwork(artwork, locale);
    });
    localizedData[locale] = {
      artworks: formattedArtworks.filter((e) => e),
    };
  });
  return localizedData;
};

(async () => {
  console.log("-------------------- Algolia --------------------");

  const indices = await getAlgoliaIndices();
  const {
    _site: { locales },
  } = await getDatoLocales();
  const assets = await getDatoLocalizedAssets();
  const formattedAssets = formatAssets({ assets, locales });

  console.log("Indices found:", indices.join(", "));
  console.log("Locales found on DatoCMS:", locales.join(", "));

  await initializeIndices({ indices, locales, formattedAssets });
})();
