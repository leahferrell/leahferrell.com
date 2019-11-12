import PropTypes from "prop-types";

/*
* skills
* */
export const skillContent = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};

export const skillContentList = PropTypes.arrayOf(PropTypes.shape(skillContent));

/*
* project
* */
export const projectContent = {
  title: PropTypes.string,
  link: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  image: PropTypes.string
};
export const projectContentList = PropTypes.arrayOf(PropTypes.shape(projectContent));

/*
* learning
* */
export const learningItem = {
  name: PropTypes.string,
  started: PropTypes.bool
};
export const learningContent = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(learningItem))
};
export const learningContentList = PropTypes.arrayOf(PropTypes.shape(learningContent));

/*
* blog
* */
export const blogContent = {
  title: PropTypes.string,
  snippet: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
export const blogContentList = PropTypes.arrayOf(PropTypes.shape(blogContent));

/*
* contact
* */
export const contactContent = {
  phone: PropTypes.string,
  email: PropTypes.string
};

/*
* article
* */
export const article = PropTypes.objectOf(
  PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.object
  })
);

export const articles = PropTypes.arrayOf(article);
