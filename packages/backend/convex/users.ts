import { ConvexError } from "convex/values";
import { mutation, query } from "./_generated/server.js";

export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (identity == null) {
            throw new ConvexError({
                code: "UNAUTHORIZED",
                message: "You must be signed in to add a user"
            });
        } 
        return identity;
    },
});

export const add = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (identity == null) {
            throw new ConvexError({
                code: "UNAUTHORIZED",
                message: "You must be signed in to add a user"
            });
        } 
    },
});