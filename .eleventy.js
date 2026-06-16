module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/admin": "admin"});
  eleventyConfig.addPassthroughCopy("src/_redirects");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
  });

  eleventyConfig.addFilter("filterByDiary", (items, diaryName) => {
    return (items || []).filter(item => item.data && item.data.diary === diaryName);
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", layouts: "_layouts" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
