/*Flight Booking fullname function*/
function getFullName(firstName,lastName,useFormalName){
    //if useFormalName not issued
    if(useFormalName==undefined){
        return firstName+" "+lastName;
    } else {
        //if useformalName =true add Lord to first name
        if(useFormalName==true){
            return "Lord "+ firstName+" "+lastName;
        }
        //if useformalName =false return normal name
        return firstName+" "+lastName;
    }            
}