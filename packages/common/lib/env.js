require('./dotenv');

if (!process.env.BACKEND_PORT) {
    throw new Error('BACKEND_PORT not found. Please it to your .env file on repo\'s root');
}

module.exports = {
    ...process.env,
};
