
export const routes = Object.keys(addresses).reduce((routesObj, chainId) => {
  const taskIds = addresses[chainId].taskIds
  const tasks = Object.keys(taskIds)
    .map((taskName) => {
      return { taskName, ...taskIds[taskName] }
    })
    .filter((x) => x.isMiddleware === false)

  const middlewares = Object.keys(taskIds)
  .map((middlewareName) => {
    return { middlewareName, ...taskIds[middlewareName] }
  })
  .filter((x) => x.isMiddleware === true)

  routesObj[chainId] = {
    taskNames: tasks.reduce((taskIds, task ) => {
      taskIds[task.routeId] = task.taskName
      return taskIds
    }, {}),
    taskIds: tasks.reduce((taskNames, task ) => {
      taskNames[task.taskName] = task.routeId
      return taskNames
    }, {}),
    middlewareNames: middlewares.reduce((middlewareIds, middleware ) => {
      middlewareIds[middleware.routeId] = middleware.middlewareName
      return middlewareIds
    }, {}),
    middlewareIds: middlewares.reduce((middlewareNames, middleware ) => {
      middlewareNames[middleware.middlewareName] = middleware.routeId
      return middlewareNames
    }, {})
  }
  return routesObj
}, {})