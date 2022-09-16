const locales = {
  no: {
    isDefault: true,
    path: "no",
    bookAppointmentPath: "/bestill-time",
  },
  en: {
    isDefault: false,
    path: "en",
    bookAppointmentPath: "/en/book-an-appointment",
  },
};

exports.locales = locales;
exports.localeKeys = Object.keys(locales);
