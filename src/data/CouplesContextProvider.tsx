import React, {useState} from 'react';
import CouplesContext, {Couple} from "./couple-context";

const CouplesContextProvider: React.FC = props => {
    const [couples, setCouples] = useState<Couple[]>([]);

    const addCouple1 = (id:string, name:string, desc:string, gender:string, image:string) => {
        const newCouple: Couple = {
            id: id,
            name: name,
            gender: gender,
            desc: desc,
            image: image
        }
        setCouples((currCouple) => {return currCouple.concat(newCouple)})
    }

    const deleteCouple1 = (id:string) => {
        for(let i=0 ;i<couples.length; i++){
            if(couples[i].id == id){
                couples.splice(i,1);
                break;
            }
        }
    };

    return(
        <CouplesContext.Provider value={{
            couples,
            addCouple: addCouple1,
            deleteCouple: deleteCouple1
        }}>
            {props.children}    
        </CouplesContext.Provider>
    );
};

export default CouplesContextProvider;