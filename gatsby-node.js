exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: '/dummy',
    component: require.resolve('./src/templates/Dummy/Dummy.js'),
  })
}
