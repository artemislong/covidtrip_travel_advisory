import G_State from "g_state-management"
let GlobalState = {
    language: {
        value: '',
        change: () => { },
    },
    user: {},
}
// //Define properties further.
GlobalState.language.value = () => {
    const language = navigator.language; //getting browser's language
    return (language === "vi") ? "vi" : "en"; //if Vietnamese then save 'vi', else use English
}

//Design events below explicitly or implicitly.

GlobalState.language.change = () => {
    //Explicitly:
    let newState = {} //Define a new state object.
    newState.language = () => {
        GlobalState.language = (GlobalState.language === 'vi') ? 'en' : 'vi';

        return "changed language to" + GlobalState.language;
    }
    G_State.changesTo(newState)//Commit the event using the G_State library.
    //----------//
}
export default GlobalState;
// GlobalState.property.increment = () => {
//     //Implicitly: *note that it only works with properties that have a values property
//     let newValue = GlobalState.property.value++
//     GlobalState.property.changesTo("incremented", newValue)
//     //The embedded method changesTo is only available to properties that have a value property.
//     //It can be overrided.
//     //-------------------//
// }
