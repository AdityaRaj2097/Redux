let tasklist = {
  task: [],
};

function TudoReducer(state = tasklist, action) {
  switch (action.type) {
    case "AddTask":
      let newtask = {
        ...state,
        task: [...state.task, action.currentTask],
      };
      console.log(" simple in tudo", state);
      return newtask;

    default:
      return state;
  }
}
export default TudoReducer;
