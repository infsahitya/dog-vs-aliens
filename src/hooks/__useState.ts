type StateHandlerCallback<T> = (currentState: T) => T;

function __useState<T extends any>(
  arg: T,
): [T, (newState: T | StateHandlerCallback<T>) => void] {
  let state: T = arg;

  function stateHandler(newState: T | StateHandlerCallback<T>): void {
    if (typeof newState === "function") {
      const updatedState: T = (newState as StateHandlerCallback<T>)(state);
      state = updatedState;
    } else {
      state = newState;
    }
  }

  return [state, stateHandler] as const;
}

export default __useState;
