import { ActionModel } from "../../models/action";

export function contacts (state = [], action: ActionModel) {
    switch (action.type) {
        case "GET_CONTACTS":
            return action.data
        default:
            return state;
    }
}


