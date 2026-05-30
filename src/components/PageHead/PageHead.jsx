const PageHead = ({ title, description }) => {
  return (
    <div className="mt-10 md:mt-20 mb-8 md:mb-10 text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-base md:text-xl text-[#627382] max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default PageHead;