const Controller = require('egg').Controller
const Site = require('../models/site')

class SiteController extends Controller {
  async index() {
    const { ctx, logger } = this
    const data = await Site.find().exec()
      .catch(e => {
        logger.error(e.message)
        ctx.body = e.message
        ctx.status = 300
      })
    ctx.body = data
  }
}

module.exports = SiteController