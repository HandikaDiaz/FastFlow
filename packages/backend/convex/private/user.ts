import { ConvexError, v } from "convex/values";
import { mutation } from "../_generated/server.js";

export const createUser = mutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const exists = await ctx.db
            .query("users")
            .withIndex("by_clerk_user_id", (q) => q.eq("clerkUserId", args.clerkId))
            .unique();

        if (exists) {
            return exists._id;
        }
        const identity = await ctx.auth.getUserIdentity();

        if (identity === null) {
            throw new ConvexError({
                code: "UNAUTHORIZED",
                message: "Identify not found",
            });
        }

        const user = await ctx.db.insert("users", {
            clerkUserId: identity.clerkId as string,
            name: identity.givenName ?? "",
            email: identity.email ?? "",
            createdAt: Date.now()
        });

        return user;
    },
});