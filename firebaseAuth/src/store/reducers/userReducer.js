const initialState = {
  profiles: [{
    id: 1,
    firstname: 'Paul',
    lastname: 'Terry',
    message: 'Some message',
    occupation: 'Software Developer'
  }, {
    id: 2,
    firstname: 'Gemma',
    lastname: 'Lunn',
    message: 'Some other message',
    occupation: 'AA'
  }]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
