/* eslint-disable react/prop-types */
const SectionStart = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col gap-3 justify-start items-start mb-5">
      <h3 className="text-rose-500 font-bold text-4xl md:text-5xl">{heading}</h3>
      <p className="text-gray-700">{subHeading}</p>
    </div>
  );
};

export default SectionStart;
