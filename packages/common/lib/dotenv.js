const dotenv = require('dotenv');
const path = require('path');

const dotEnvPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: dotEnvPath });
