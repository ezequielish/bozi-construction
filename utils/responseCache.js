const { config } = require("../config/index");

const cacheResponse = (resp, seconds) => {
    if (!config.dev) {
        resp.set("Cache-Control", `public max-age=${seconds}`);
    }
}

module.exports = cacheResponse;