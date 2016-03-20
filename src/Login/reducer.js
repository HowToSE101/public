import * as actions from 'Login/actions';
import {bindActionCreators} from 'redux';

const initialState: Object = {username: '', password: ''};
// reducers
export default function login(
    state: Object = initialState,
    action: Object
): Object
{
    switch(action.type) {
        case 'SUBMIT_LOGIN':
            return Object.assign({}, state, {
                username: action.username,
                password: action.password
            });
        case 'CHANGE_USERNAME':
            return Object.assign({}, state, {
                username: action.username
            });
        case 'CHANGE_PASSWORD':
            return Object.assign({}, state, {
                password: action.password
            });
        default:
            return state;
    }
}

// maps redux store's state -> component props
export const mapStateToProps: Object = (state: Object) => {
    const {username, password} = state.login;
    return {username, password};
};

// maps action creators wrapped by dispatch -> component props
// can also do bindActionCreators(actionCreators, dispatch) to wrap
// them all in one go
export const mapDispatchToProps: Object = (dispatch: Function) => {
    return bindActionCreators(actions, dispatch);
};
// now props username, onEnterUsername, and onClickSubmit are available.
