import { REQUEST_POSTS, RECEIVE_POSTS, Side_Collapse } from "../action/MainAction";


const MainReducer = (state = { isFetching: false,collapsed:false }, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data,
                error: action.error
            })
        case Side_Collapse:
            return Object.assign({}, state, {
                collapsed: !state.collapsed
            })
        default:
            return state;
    }
}
export default MainReducer;