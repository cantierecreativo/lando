const { render } = require("datocms-structured-text-to-plain-text");

module.exports = {
  formatArtwork: (artwork, locale) => {
    const {
      id,
      _locales,
      _allTitleLocales,
      _allSlugLocales,
      typology: typologyData,
      room: roomData,
    } = artwork;

    if (!_locales.includes(locale)) {
      return null;
    }

    const title = _allTitleLocales.find((e) => e.locale === locale)["value"];
    const slug = _allSlugLocales.find((e) => e.locale === locale)["value"];
    const typology = typologyData.map(
      (m) => m._allTitleLocales?.find((t) => t.locale === locale)["value"]
    );
    const room = roomData.map(
      (m) => m._allTitleLocales?.find((e) => e.locale === locale)["value"]
    );

    return {
      objectID: id,
      title,
      slug,
      room,
      typology,
    };
  },
  formatHighlights: (artwork, locale) => {
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
    const room = roomData.map(
      (m) => m._allTitleLocales?.find((e) => e.locale === locale)["value"]
    );
    const typology = typologyData.map(
      (m) => m._allTitleLocales?.find((t) => t.locale === locale)["value"]
    );

    return {
      objectID: id,
      title,
      slug,
      room,
      typology,
    };
  },
};
