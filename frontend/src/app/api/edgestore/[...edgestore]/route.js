const { initEdgeStore } = require('@edgestore/server');
const {
  createEdgeStoreNextHandler,
} = require('@edgestore/server/adapters/next/app');

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

module.exports = {
  GET: handler,
  POST: handler,
};
