import PropTypes from "prop-types";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";

const Title = ({ text1, text2 }) => {
  return (
    <div
      className="inline-flex gap-3 items-center mb-4"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <p className="text-[#002443] opacity-80">
        {text1} <span className="text-[#FF584F] font-medium">{text2}</span>
      </p>
      <div className="flex items-center gap-2">
        <div className="w-6 sm:w-8 h-[2px] bg-[#FF584F]"></div>
        <div className="w-3 sm:w-4 h-[2px] bg-[#55B0FF]"></div>
      </div>
    </div>
  );
};

Title.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Title;
