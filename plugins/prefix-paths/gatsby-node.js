exports.onCreatePage = ({ page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  for (var locale of pluginOptions.prefixes) {
    createPage({
      path: locale + page.path,
      component: page.component,
      context: {
        locale: locale,
      },
    })
  }
}
