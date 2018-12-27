let initState =  {
    formInit : [
        { label:"Nom", id:"nom" },
        { label:"Prénom", id:"prenom" },
        { label:"Email", id:"email" },
        { label:"confirmation Email", id:"confirmEmail" },
        { label:"Tel", id:"tel" },
        { label:"Adresse", id:"adresse" },
        { label:"Code Postal", id:"codePostal" }
    ],
    values : {
        nom:"",
        prenom:"",
        email:"",
        confirmEmail:"",
        tel:"",
        adress:"",
        codePostal:""
    },
    errorMsg : {
        nom:"",
        prenom:"",
        email:"",
        confirmEmail:"",
        tel:"",
        adress:"",
        codePostal:""
    }
}
let handleNoValid= () =>{
    const SUBMIT_BTN = document.querySelector("input[type=submit]")
    SUBMIT_BTN .value = "Invalid"
    SUBMIT_BTN .disabled = true;
    SUBMIT_BTN .classList.add("btn-dark")

}
let handleValid= () =>{
    document.querySelector("input[type=submit]").disabled = false;
    document.querySelector("input[type=submit]").classList.remove("btn-dark")
}

let onVerify = (id , target)=>{
    console.log("target", target.id)
    console.log("id", id)

    switch(id){
        
        case "nom":

         let regex= /^\s*[a-zA-Z]{2,12}\s*$/;
         let test =regex.test(target.value)
         if(!test){
            target.classList.add("errorColor");
            document.querySelector(`#${id}Error`).classList.add("showErrorMsg");
            handleNoValid();
            return "Nom Invalid";

         } else {
            target.classList.remove("errorColor");
            document.querySelector(`#${id}Error`).classList.remove("showErrorMsg");
            handleValid();/* à verifier */
            return  "";
         }  
        break;

        case "prenom":
         
         let regex2= /^\s*[a-zA-Z]{2,12}\s*$/;
         let test2 =regex2.test(target.value)
         if(!test2){
            target.classList.add("errorColor");
            document.querySelector(`#${id}Error`).classList.add("showErrorMsg");
            //target.setCustomValidity(" un nom entre 3 et 5 charachter")
            return "Prénom invalid";
         } else {
            target.classList.remove("errorColor");
            document.querySelector(`#${id}Error`).classList.remove("showErrorMsg");
            return  "";
         }  
        break;
    }
}


let reducer = (state = initState,action)=>{
    switch(action.type){
        case "ON_CHANGE":

        let value = state.values;
        let errorMsg = state.errorMsg;
        let id = action.payload.id;

        value[id] =  action.payload.target.value;
        errorMsg[id] = onVerify(id, action.payload.target);

        state = {
            ...state,
            values : {...state.values, value},
            errorMsg : {...state.errorMsg, errorMsg }
        }
       // console.log(state.errorMsg)
        break;

       /*  case "ON_SUBMIT":
        state= {
            ...state,
            val : action.payload.val
        }
        break; */
    }

    return state
}







export default reducer;
