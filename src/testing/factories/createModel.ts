export type Model<T> = {
  getModel: () => T;
  resetModel: () => void;
  updateModel: (updates: Partial<T>) => void;
};

/**
 * Creates a model management object.
 *
 * @param {Object} initialModel - The initial data for the model.
 * @returns {Object} An object containing functions to interact with the model:
 * - `getModel`: A function that returns the current state of the model.
 * - `resetModel`: A function that resets the model to its initial state.
 * - `updateModel`: A function that updates data within the model.
 */
export const createModel = <T>(initialModel: T): Model<T> => {
  let model = initialModel;
  const originalModel = {...initialModel};

  return {
    getModel: () => model,
    resetModel: () => (model = {...originalModel}),
    updateModel: (updates: Partial<T>) => {
      model = {...model, ...updates};
    },
  };
};
