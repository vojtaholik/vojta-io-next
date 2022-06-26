import {Prisma} from '@prisma/client'
import {Context, defaultContext} from './context'
import {v4} from 'uuid'
// import {SpanContext} from '@vercel/tracing-js'
// import {tracer} from '../utils/honeycomb-tracer'

type SDKOptions = {ctx?: Context}

// function startSpan(name: string, childOf?: SpanContext) {
//   return tracer.startSpan(name, {childOf})
// }

export function getSdk(
  {ctx = defaultContext}: SDKOptions = {ctx: defaultContext},
) {
  return {
    async findUser(id: string) {
      const user = await ctx.prisma.user.findFirst({
        where: {
          id,
        },
      })
      return user
    },
    async findOrCreateUser(email: string, name?: string | null) {
      // const span = startSpan('findOrCreateUser', spanContext)
      let isNewUser = false
      let user = await ctx.prisma.user.findFirst({
        where: {
          email,
        },
      })

      if (!user) {
        isNewUser = true
        user = await ctx.prisma.user.create({
          data: {email, name},
        })
      }

      // span.finish()
      return {user, isNewUser}
    },
    // async getProduct(options: Prisma.ProductFindFirstArgs) {
    //   const span = startSpan('getProduct', spanContext)
    //   const product = await ctx.prisma.product.findFirst(options)
    //   span.finish()
    //   return product
    // },
  }
}
