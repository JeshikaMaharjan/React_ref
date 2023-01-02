// working with inputs
import React, {useState} from "react";

function HookCounterThree(){
    const [name,setName] = useState({firstName : ' ', lastName : ''})

    return(        
        <form>
            <input 
            type ="text"
            value = {name.firstName}
            onChange = {event => setName({ ...name, firstName : event.target.value })}
            />
            {/* onChange = {event => setName({ firstName : event.target.value }
                yo matra garda firstname type garda lastname dekhdaina and vice versa so spreading gareko hoo
                .i.e onChange = {event => setName({ ...name, firstName : event.target.value }
                this means copy every property in name object and then just overwrite firstName 
                see changes in json.stringify
            */}
            <input 
            type ="text"
            value = {name.lasttName}
            onChange = {event => setName({ ...name, lastName : event.target.value })}
            />
            <h2>Firstname is {name.firstName}</h2>
            <h2>Lastname is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
            
        </form>
    )       
    
}
export default HookCounterThree