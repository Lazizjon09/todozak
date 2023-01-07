import { createContext } from 'react';

export type myContextType = {
    setAmountOfPills: any,
    amountOfPills: {total:number, amount:number} 
}
const IcontextType = {
    setAmountOfPills: () => {},
    amountOfPills: {total:0, amount:0}
}


const amount = createContext<myContextType>(IcontextType)

export default amount