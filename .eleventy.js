module.exports = function (eleventyConfig) {
  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("winner", ({ iphone, android }) => iphone > android ? "apple" : "android");

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
