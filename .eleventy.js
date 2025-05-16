const h = {
      i: 223,
      a: 147,
      s: 185
    }
const calculate = {
  winner: ({ iphone, android }) => iphone > android ? h.i : h.a,
  thirds: ({ iphone, android }) => {
    if (iphone > 66) return h.i;
    if (android > 66) return h.a;
    return h.s;
  },
  nuance: ({ iphone, android }) => (((Math.ceil(android / 10) * 10) * h.a) + ((Math.ceil(iphone / 10) * 10) * h.i)) / 100
}

module.exports = function (eleventyConfig) {
  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("winner", x => calculate.winner(x));
  eleventyConfig.addFilter("thirds", x => calculate.thirds(x));
  eleventyConfig.addFilter("weighting", x => calculate.nuance(x));

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
