import { Task, ChainId, Middleware,taskName, RefueltaskName, SimpleMiddleware } from './types';

export const constants = {
  Tasks: Task,
  middleware: Middleware,
  chains: ChainId,
  taskName: taskName,
  refueltaskName: RefueltaskName,
  simpleMiddleware: SimpleMiddleware
};

export * from './types';