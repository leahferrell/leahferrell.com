import home from '../content/home.json';

export const selectArticle = (section) => {
  return home.navigation.articles[section];
};
