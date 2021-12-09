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
    color: 'red'
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
            Object.keys(state).map(option => {
                if(option === action.payload.text) {
                    return state[option] = action.payload.value
                }
            })
        }
    }
})
export const {changeShift} = boxShadowSlice.actions;
export const selectBoxProperties = (state: RootState) => state.boxShadow;
export default boxShadowSlice.reducer;