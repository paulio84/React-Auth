const initialState = {
  messages: [{
    id: 1,
    firstname: 'Paul',
    lastname: 'Terry',
    message: 'Some message',
  }, {
    id: 2,
    firstname: 'Gemma',
    lastname: 'Lunn',
    message: 'Some other message',
  }]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
