const _get = require('lodash/get');
const toKebabCase = require('../src/utils/toKebabCase');
const { locales, localeKeys } = require('../src/static/locales');

const removeTrailingAndLeadingSlash = (path) => path.replace(/^\/|\/$/g, '');
const cleanSlug = (path) => removeTrailingAndLeadingSlash(toKebabCase(path));

const getLocalizedPath = (localeSlugs, locale) => {
  const lang = locales[locale].path ?? locales.no.path;
  const cleanedSlug = cleanSlug(
    _get(localeSlugs, `[${lang}].current`, 'missing-slug'),
  );
  const localizedPath = locales[lang].isDefault
    ? `/${cleanedSlug}`
    : `/${locales[lang].path}/${cleanedSlug}`;
  return localizedPath;
};

const getLocalizedPaths = (localeSlugs) =>
  localeKeys.reduce((acc, locale) => {
    acc[locale] = getLocalizedPath(localeSlugs, locale);
    return acc;
  }, {});

module.exports = {
  getLocalizedPath,
  getLocalizedPaths,
};
