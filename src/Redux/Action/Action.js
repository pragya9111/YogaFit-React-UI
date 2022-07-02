import { OnPage1Load, OnClassLoad, OnPage3Load } from "./ActionType";

export const Page1Load = (result)=>{
    return{
        type:OnPage1Load,
        payload:result
    }
}
export const ClassLoad = (result2)=>{
    return{
        type:OnClassLoad,
        payload:result2
    }
}

export const Page3Load = (result3)=>{
    return{
        type:OnPage3Load,
        payload:result3
    }
}