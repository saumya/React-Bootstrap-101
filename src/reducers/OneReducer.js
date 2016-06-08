// written and Example Reducer which does nothing
const OneReducer = (state={}, action) => {
  console.group('reducers : OneReducer : OneReducer');
  console.log('OneReducer : action',action);
  console.log('OneReducer : state',state);
  var a = 0;
  if (state.called >= 0) {
    a = state.called + 1;
  }
  var newState = {version:0.1,called:a};
  console.log('OneReducer : newState',newState);
  console.groupEnd();

  return newState;
}

export default OneReducer
