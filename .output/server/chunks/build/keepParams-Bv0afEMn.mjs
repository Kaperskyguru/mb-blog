function keepParams({ query, route, redirect }) {
  if (query.ref) {
    const ref = query.ref;
    if (!route.query.ref) {
      const newQuery = { ...route.query, ref };
      redirect({ path: route.path, query: newQuery });
    }
  }
}

export { keepParams as default };
//# sourceMappingURL=keepParams-Bv0afEMn.mjs.map
