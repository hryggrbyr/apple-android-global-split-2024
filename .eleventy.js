module.exports = function (eleventyConfig) {
  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("winner", ({ iphone, android }) => iphone > android ? 223 : 147);
    eleventyConfig.addFilter("weighting", ({ iphone, android }) => iphone > android ? `${Math.ceil(iphone / 10) * 10}` : `${Math.ceil(android / 10) * 10}`);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
