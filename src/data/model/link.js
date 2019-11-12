import PropTypes from "prop-types";

export const LinkType = {
  DEFAULT: "DEFAULT",
  BUTTON: "BUTTON",
  TITLE: "TITLE",
  INPUT: "INPUT"
};

export const link = PropTypes.shape({
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired
});

export const links = PropTypes.arrayOf(link).isRequired;
