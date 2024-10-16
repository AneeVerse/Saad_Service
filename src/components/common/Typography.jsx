// components/Typography.js
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Typography = ({ as: Component = "p", variant, children, className }) => {
  const typographyClass = classNames(
    className, // Allows custom class names if needed
    {
      "text-5xl font-bold text-gray-900 leading-tight": variant === "h1",
      "text-4xl font-bold text-gray-800 leading-snug": variant === "h2",
      "text-3xl font-medium text-gray-700 leading-snug": variant === "h3",
      "text-2xl font-medium text-gray-700 leading-snug": variant === "h4",
      "text-xl font-semibold text-gray-600": variant === "subheading",
      "text-[17px] text-gray-600 leading-relaxed": variant === "paragraph",
      "text-sm text-gray-500 italic": variant === "caption",
    }
  );

  return <Component className={typographyClass}>{children}</Component>;
};

Typography.propTypes = {
  as: PropTypes.string, // Specify which HTML element to render
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "subheading",
    "paragraph",
    "caption",
  ]).isRequired, // Variant type is required
  children: PropTypes.node.isRequired, // Content inside the typography element
  className: PropTypes.string, // Optional custom class
};

export default Typography;
