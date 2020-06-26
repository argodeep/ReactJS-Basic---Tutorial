import { ActionModel } from "../../models/action";

export function isSorted(state = false, action: ActionModel) {
    switch (action.type) {
        case "IS_SORTED":
            return action.data
        default:
            return state;
    }
}

