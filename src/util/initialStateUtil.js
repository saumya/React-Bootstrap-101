//
// initial state must have keys as per the reducers passed to combineReducers
export function getInitialState(){
  console.log('getInitialState');
  var a = {
    UIState: "home",
    LoginStatus: "Not Logged in",
    DummyReducer:{version:0,called:0},
    OneReducer:{version:0,called:0}
  }
  return a;
}

export function generateTree() {
  console.log('generateTree');
  let tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: []
    }
  }

  for (let i = 1; i < 1000; i++) {
    let parentId = Math.floor(Math.pow(Math.random(), 2) * i)
    tree[i] = {
      id: i,
      counter: 0,
      childIds: []
    }
    tree[parentId].childIds.push(i)
  }

  return tree
}

export default function initialStateUtil() {
  console.log('initialStateUtil');
}
