import { v } from "convex/values";
import { mutation } from "./_generated/server"

export const getUrl = mutation({
    args: {
        storageId: v.id("_storage")
    },
    handler: async (ctx: any, args: any) => {
        return await ctx.storage.getUrl(args.storageId)
    }
})