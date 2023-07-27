import React from 'react';

export interface Couple {
    id: string,
    name: string,
    gender: string,
    desc: string,
    image: string
}
interface Context {
    couples: Couple[];
    addCouple: (id:string, name:string, desc:string, gender:string, image:string) => void
    deleteCouple: (id:string) => void;
}
const CouplesContext = React.createContext<Context>({
    couples: [],
    addCouple: () => { },
    deleteCouple: () => { }
});

export default CouplesContext;