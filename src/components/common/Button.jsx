// components/Button.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link"; // For Next.js routing (if needed)

const Button = ({ type = "primary", text, onClick, disabled = false, link }) => {
  // Button styles based on the type
  const buttonClass = classNames(
    "py-[10px] px-6 rounded-full font-semibold transition-all duration-300 focus:outline-none shadow-sm",
    {
      "bg-[#D4AF37] text-white hover:bg-[#b89730]": type === "primary", // Gold color for primary buttons
      "bg-white text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white":
        type === "secondary", // Gold color for secondary buttons with outline
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  // If the `link` prop is provided, render as an anchor tag
  if (link) {
    return (
      <Link href={link} className={buttonClass} role="button">
        {text}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Not required if the button is a link
  disabled: PropTypes.bool,
  link: PropTypes.string, // If a link is passed, the button will render as an anchor tag
};

export default Button;
