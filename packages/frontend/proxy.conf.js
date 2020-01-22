const env = require('@vista-point/common/lib/env');

const PROXY_CONFIG = {
    "/api": {
        target: `http://localhost:${env.BACKEND_PORT}`,
        "secure": "false",
        "pathRewrite": {"^/api" : ""},
    },
};

module.exports = PROXY_CONFIG;
