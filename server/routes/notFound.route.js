const express = require('express');
const router = express.Router();

router.get('/*', function(request, response) {
  if (request.url !== "/favicon.ico") {
    LOGGER.error({
      message: `TIME:${new Date().toLocaleDateString("eu", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      })} METHOD:${request.method} PROTOCOL:${request.protocol} URL:${request.url} USER_AGENT:${request.get("User-Agent")}`
    });
  }
  response.status(404).send({
    message: "Not Found (",
    errorcode: 404
  });
});

module.exports = router;