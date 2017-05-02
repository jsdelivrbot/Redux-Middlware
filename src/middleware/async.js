export default function({ dispatch }) {
  return next => action => {
    //not a promise
    if (!action.payload || !action.payload.then) {
      return next(action)
    }
    //is a promise
    //make sure it resolves
    action.payload
      .then(response => {
        const newAction = {
          ...action,
          payload: response
        }
        dispatch(newAction);
      });
  }
}
