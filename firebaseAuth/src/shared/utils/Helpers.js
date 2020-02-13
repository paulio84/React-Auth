export function dispatchAction(type, payload) {
  if (payload === undefined)
    return { type };
  else
    return { type, payload };
}