module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {

  const homePaths = {
    v1: "/tlcHackathonMasterV1.html",
    dev: "/tlcHackathonDev.html",
    final: "/tlcHackathonMasterV2.html"
  }

  const detailPaths = {
    v1: "/tlcHackathonProductDetailsMasterV1.html?id=1",
    dev: "/tlcHackathonProductDetailsDev.html?id=1",
    final: "/tlcHackathonProductDetailsMasterV2.html?id=1"
  }

  const version = config.env.version

  config.env.home = homePaths[version]
  config.env.detail = detailPaths[version]

  return config;

}

require('@applitools/eyes-cypress')(module)
