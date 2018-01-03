export const resources = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_RESOURCE':
            let index;
            state.forEach((resource, i) => {
                if (resource.id === action.id) {
                    index = i;
                }
            })
            if (index) {
                return [...state.slice(0, index),
                ...state.slice(index + 1)]
            }
            return [...state,
            {
                id: action.id,
                value: action.value
            }
            ];
        default:
            return state;

    }
};



