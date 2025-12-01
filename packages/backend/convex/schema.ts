import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        clerkUserId: v.string(),
        name: v.string(),
        email: v.string(),
        baseCurrency: v.optional(v.string()),
        travelMode: v.optional(v.boolean()),
        currentLocation: v.optional(v.string()),
        financialHealthScore: v.optional(v.number()),
        lastHealthCheck: v.optional(v.number()),
        createdAt: v.number(),
    })
        .index("by_clerk_user_id", ["clerkUserId"])
        .index("by_email", ["email"]),

    organizations: defineTable({
        name: v.string(),
        type: v.union(
            v.literal("personal"),
            v.literal("business"),
            v.literal("community"),
            v.literal("event"),
            v.literal("family")
        ),
        baseCurrency: v.string(),
        createdBy: v.id("users"),
        settings: v.optional(
            v.object({
                approvalWorkflow: v.optional(v.boolean()),
                spendingLimits: v.optional(v.boolean()),
                multiUser: v.optional(v.boolean()),
            })
        ),
        createdAt: v.number(),
    })
        .index("by_created_by", ["createdBy"])
        .index("by_type", ["type"]),

    organizationMembers: defineTable({
        organizationId: v.id("organizations"),
        userId: v.id("users"),
        role: v.union(v.literal("admin"), v.literal("member")),
        permissions: v.array(v.string()),
        joinedAt: v.number(),
    })
        .index("by_organization_id", ["organizationId"])
        .index("by_user_id", ["userId"])
        .index("by_organization_and_user", ["organizationId", "userId"]),

    // === FINANCIAL ENTITIES ===
    wallets: defineTable({
        name: v.string(),
        ownerUserId: v.optional(v.id("users")),
        organizationId: v.optional(v.id("organizations")),
        currency: v.string(),
        type: v.union(
            v.literal("cash"),
            v.literal("bank"),
            v.literal("e-wallet"),
            v.literal("credit-card")
        ),
        balance: v.number(),
        isActive: v.boolean(),
        metadata: v.optional(
            v.object({
                institution: v.optional(v.string()),
                accountNumber: v.optional(v.string()),
                color: v.optional(v.string()),
            })
        ),
        createdAt: v.number(),
    })
        .index("by_owner_user_id", ["ownerUserId"])
        .index("by_organization_id", ["organizationId"])
        .index("by_user_and_currency", ["ownerUserId", "currency"]),

    categories: defineTable({
        name: v.string(),
        userId: v.optional(v.id("users")),
        organizationId: v.optional(v.id("organizations")),
        type: v.union(v.literal("income"), v.literal("expense")),
        color: v.string(),
        icon: v.string(),
        parentCategoryId: v.optional(v.id("categories")),
        isDefault: v.optional(v.boolean()),
        isActive: v.boolean(),
        createdAt: v.number(),
    })
        .index("by_user_id", ["userId"])
        .index("by_organization_id", ["organizationId"])
        .index("by_user_and_type", ["userId", "type"])
        .index("by_organization_and_type", ["organizationId", "type"]),

    transactions: defineTable({
        // Core transaction data
        walletId: v.id("wallets"),
        userId: v.id("users"),
        organizationId: v.optional(v.id("organizations")),
        categoryId: v.optional(v.id("categories")),

        // Amount & Currency
        originalAmount: v.number(),
        originalCurrency: v.string(),
        amountInBase: v.number(),
        baseCurrency: v.string(),

        // Transaction details
        type: v.union(v.literal("expense"), v.literal("income"), v.literal("transfer")),
        description: v.string(),
        date: v.number(),
        timestamp: v.number(),

        tags: v.optional(v.array(v.string())),
        attachmentUrls: v.optional(v.array(v.string())),

        // AI/OCR fields
        inputMethod: v.union(v.literal("manual"), v.literal("ocr"), v.literal("voice")),
        aiConfidence: v.optional(v.number()),
        rawOcrText: v.optional(v.string()),
        ocrData: v.optional(
            v.object({
                vendor: v.optional(v.string()),
                items: v.optional(v.array(v.string())),
                confidence: v.optional(v.number()),
            })
        ),

        // Organizational workflow
        context: v.union(v.literal("personal"), v.literal("organizational")),
        approvedBy: v.optional(v.id("users")),
        status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),

        // Recurring transactions
        isRecurring: v.optional(v.boolean()),
        recurringPattern: v.optional(
            v.union(
                v.literal("daily"),
                v.literal("weekly"),
                v.literal("monthly"),
                v.literal("yearly")
            )
        ),
        linkedTransactionId: v.optional(v.id("transactions")),

        createdAt: v.number(),
    })
        .index("by_user_and_date", ["userId", "date"])
        .index("by_wallet_and_date", ["walletId", "date"])
        .index("by_category", ["categoryId"])
        .index("by_organization_and_date", ["organizationId", "date"])
        .index("by_status", ["status"])
        .index("by_recurring", ["isRecurring"]),
});