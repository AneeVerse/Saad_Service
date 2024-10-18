// components/Typography.js
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Typography = ({ as: Component = "div", variant, children, className }) => {
  const typographyClass = classNames(
    className, // Allows custom class names if needed
    {
      "text-5xl font-bold text-gray-900 leading-tight": variant === "h1",
      "text-4xl font-bold text-gray-800 leading-snug relative flex items-center justify-center": variant === "h2",
      "text-3xl font-medium text-gray-700 leading-snug": variant === "h3",
      "text-2xl font-medium text-gray-700 leading-snug": variant === "h4",
      "text-xl font-medium text-gray-700 leading-snug": variant === "h5",
      "text-xl font-semibold text-gray-600": variant === "subheading",
      "text-[17px] text-gray-600 leading-relaxed": variant === "paragraph",
      "text-sm text-gray-500 italic": variant === "caption",
    }
  );

  return (
    <Component className={typographyClass}>
      {variant === "h2" ? (
        <div className="relative flex items-center justify-center w-full">
          {/* Line on the left side */}
          <span className="flex-grow border-t-2 border-[#D4AF37] mr-4"></span>
          
          {/* Spacing to ensure the text and lines are separated */}
          <span className="text-center">{children}</span>

          {/* Line on the right side */}
          <span className="flex-grow border-t-2 border-[#D4AF37] ml-4"></span>
        </div>
      ) : (
        children
      )}
    </Component>
  );
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
