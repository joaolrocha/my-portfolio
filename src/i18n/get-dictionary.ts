export type Locale = "en" | "pt";

export const getDictionary = async (locale: Locale) => {
  return (await import(`./dictionaries/${locale}`)).default;
};
