export default {
  single: {
    removeMatchCase: (state, action, key) => {
      return state.map(a => a.resource_name !== action[key].resource_name);
    },
    updateMatchCase: (state, action, key) => {
      return state.map(a =>
        a.resource_name === action[key].resource_name
          ? { ...a, ...action[key] }
          : a
      );
    }
  },
  multi: {
    join: (state, action) => {
      return;
    }
  }
};
