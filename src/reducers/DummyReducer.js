// written and Example Reducer which does nothing
const DummyReducer = (state={}, action) => {
  console.group('reducers : DummyReducer : DummyReducer');
  console.log('DummyReducer : action',action);
  console.log('DummyReducer : state',state);
  var a = 0;
  if (state.called >= 0) {
    a = state.called + 1;
  }
  var newState = {version:0.1,called:a};
  console.log('DummyReducer : newState',newState);
  console.groupEnd();

  return newState;
}

export default DummyReducer
