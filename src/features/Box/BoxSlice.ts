import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../app/store';

interface BoxShadowProperties {
    [key:string]:any
}

const initialState: BoxShadowProperties = {
    rightShift: 5,
    bottomShift: 5,
    spread: 5,
    blur: 7,
    opacity: 1,
    inset: false,
    color: '#ef1510',
    borderRadius: 0,
    width: 250,
    height: 250
}
interface payloadValue {
    value: number;
    text: string
}
export const boxShadowSlice = createSlice({
    name: 'shadow',
    initialState,
    reducers: {
        changeShift: (state, action: PayloadAction<payloadValue>) => {
            Object.keys(state).forEach(option => {
                if(option === action.payload.text) {
                    state[option] = action.payload.value
                }
            })
        },
        changeInset: (state, action:PayloadAction<boolean>) => {
            const currAction = action.payload;
            if(currAction === true) {
                state.inset = true;
            } else {
                state.inset = false;
            }
        },
        resetState: () => {
            return initialState
        },
        changeColour: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        }
    }
})
export const {changeShift, changeInset, resetState, changeColour} = boxShadowSlice.actions;
export const selectBoxProperties = (state: RootState) => state.boxShadow;
export default boxShadowSlice.reducer;