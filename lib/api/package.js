module.exports = function (router) {
  router.get('/:owner/:repo.json', async function (req, res) {
    var myPackage = await router.db.Package.findOne({
      where: {
        'info.name': req.params.repo,
        'info.owner.login': req.params.owner
      }
    })
    res.json(myPackage)
  })
}
