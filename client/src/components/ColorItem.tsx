import React, {FC, useState} from 'react';
import {IColor} from "../App";
import DeleteButton from "./DeleteButton";
import UpdateModal from "./UpdateModal";

interface ItemColorProps {
    item: IColor;
    setStr:any;
    setColors:any;
    colors: IColor[];
}

const ColorItem:React.FC<ItemColorProps> = ({item,setStr,setColors, colors}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const colorIsWhite = item.color === 'white' || item.color === "#fff" || item.color === "#ffffff"
    return (
        <>
            <div className='flex flex-row text-red-700 w-[100vw] overflow-hidden px-4'>
                <div className={`border border-pink-300 my-5 h-10 w-full ${ colorIsWhite ? 'text-black' : 'text-white' }`} style={{backgroundColor:item.color}} key={item.id} onClick={() => setStr(item.color) }>
                    {item.name}
                </div>
                <DeleteButton colors={colors} setColors={setColors} id={item.id}/>
                <button className="bg-blue-400 hover:bg-blue-700 text-white my-5 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                        onClick={() => setIsOpen(true)}>update
                </button>
            </div>
            <UpdateModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                item={item} colors={colors}
                setColors={setColors} />
        </>
    );
};

export default ColorItem;