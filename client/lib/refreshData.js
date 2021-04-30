export const refreshData = (router) => {
  router.replace(router.asPath, null, { scroll: false })
}
