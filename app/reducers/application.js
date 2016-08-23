/**
 * Created by eastiming on 16/8/3.
 */

const initialState = {
  name: '',
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_NAME':
      return {
        name: action.name
      }
    default:
      return state
  }
}

export default application
