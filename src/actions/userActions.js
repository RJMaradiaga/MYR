import * as types from "../constants/ActionTypes";

const googleLoginRef = "apiv1/googlelogins";

export function updateFontSize(fontSize){
    return{ type: types.UPDATE_FONT_SIZE, fontSize };
}

export function updateUserSettings(id,settings){
    return ()=>{
        if(id){
            fetch(`${googleLoginRef}/settings`,{
                method:"PUT",
                body:JSON.stringify(settings),
                headers: { 
                    "Content-Type":"application/json",
                    "x-access-token":id
                }
            });
        }
    };
}

/*
export function updateUserCourses(id,courses){
    return ()=>{
        if(id){
            fetch(`${googleLoginRef}/courses`,{
                method:"PUT",
                body:JSON.stringify(coruses),
                headers: { 
                    "Content-Type":"application/json",
                    "x-access-token":id
                }
            });
        }
    };
}*/

export function asyncUserSettings(id){
    return dispatch => {
        if(id){
            fetch(`${googleLoginRef}/settings`,{headers:{"x-access-token": id}}).then(response=>{
                if(response.status === 200){
                    response.json().then(json =>{
                        dispatch(syncUserSettings(json));
                    });
                }
            });
        }
    };
}

/*
export function asyncUserCourses(id){
    return dispatch => {
        if(id) {
            fetch(`${googleLoginRef}/courses`,{headers:{"x-access-token": id}}).then(response=>{
                if(response.status === 200){
                    response.json().then(json =>{
                        dispatch(syncUserCourses(json));
                    });
                }
            });
        }
    }
}*/

export function syncUserSettings(settings){
    return { type: types.SYNC_USER_SETTINGS, settings: settings };
}

export default {
    updateFontSize,
    asyncUserSettings,
    syncUserSettings,
    updateUserSettings
    /*asyncUserCourses*/
};