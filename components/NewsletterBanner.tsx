const NewsletterBanner = () => {
  return (
    <div className="bg-gradient-to-r from-stone-800 to-stone-700 text-white rounded-xl p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-light">Never miss a story</h3>
          <p className="text-stone-300/80 text-sm mt-1 max-w-md">
            Get the best travel stories delivered to your inbox weekly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 bg-white text-stone-800 placeholder:text-stone-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all duration-200"
          />
          <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium rounded-lg transition-colors duration-200 text-sm whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
