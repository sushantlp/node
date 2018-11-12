const Koa = require('koa')
const { createACDClaim } = require('../helpers/createClaims')

const main = async () => {
  const app = new Koa()

  app.use(async (ctx: any) => {
    const attributes = {
      name: `testing claim ${Date.now()}`,
      author: 'the tester',
    }

    ctx.body = await createACDClaim(attributes)
  })

  app.listen(3000)
}

// tslint:disable:no-console
main().catch(console.error)