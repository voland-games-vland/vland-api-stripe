
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    database: {
        mongodb: {
            uri: process.env.MONGO_URL,
            name: process.env.DATABASE_MONGODB_NAME || 'vland',
        },
    },
    firebase: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    },
    stripe: {
        privateKey: process.env.STRIPE_PRIVATE_KEY,
        webhookEndpointSecret: process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET
    }
});