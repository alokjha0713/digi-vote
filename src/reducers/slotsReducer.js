import { UPDATE_SLOT_FAIL,
    UPDATE_SLOT_REQUEST,
    UPDATE_SLOT_RESET,
    UPDATE_SLOT_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/slotsConstant";


export const slotDetailsReducer = (state = { }, action) => {

    switch (action.type) {
        case UPDATE_SLOT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_SLOT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
       
        case UPDATE_SLOT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_SLOT_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        default:
            return state;
    }
    
}
    