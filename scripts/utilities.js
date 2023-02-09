const { render } = require("datocms-structured-text-to-plain-text");

module.exports = {
  formatArtwork: (artwork, locale) => {
    const {
      id,
      _locales,
      _allTitleLocales,
      _allSlugLocales,
      room: roomData,
      typology: typologyData,
    } = artwork;

    if (!_locales.includes(locale)) {
      return null;
    }

    const title = _allTitleLocales.find((e) => e.locale === locale)["value"];
    const slug = _allSlugLocales.find((e) => e.locale === locale)["value"];
    const room = roomData.title;
    const typology = typologyData.title;

    return {
      objectID: id,
      title,
      slug,
      room,
      typology,
    };
  },
};
