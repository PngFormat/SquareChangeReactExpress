import React, { useState } from 'react';
import Modal from 'react-clear-modal';
import { IColor } from '../App';
import axios from 'axios';


interface UpdateModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  item: IColor;
  colors: IColor[];
  setColors: (value: IColor[]) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  setIsOpen,
  item,
  colors,
  setColors
}) => {
  const [name, setName] = useState<string>(item.name ?? '');
  const [color, setColor] = useState<string>(item.color ?? '');

  const handleUpdateColor = async () => {
    await axios
      .put(`http://localhost:5001/colors/${item.id}`, {
        name,
        color
      })
      .then(() => {
        setColors([
          ...colors,
          {
            name: name,
            color: color,
            id: Date.now()
          }
        ]);
      });
  };

  return (

      <Modal className='backdrop-blur-2xl' isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <div className='bg-gray-50' style={{height:450,width:570}}>
            <h1 className='ml-10 text-4xl'>name color:</h1>
              <input
                className="shadow appearance-none border border-red-500 rounded w-100 py-4 px-6 mt-3 ml-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-4xl"
                placeholder="name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            <h1 className='ml-10 text-4xl decoration-dotted'>rgb code:</h1>
              <input
                className="shadow appearance-none border border-red-500 rounded w-100 py-4 mt-3 ml-10 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-4xl"
                placeholder="color"
                value={color}
                type="text"
                onChange={(e) => setColor(e.target.value)}
              />
              <button
                className="bg-blue-500  text-white font-bold py-6 px-12 rounded focus:outline-none  mt-5 ml-40 focus:shadow-outline my-5 text-4xl items-stretch"
                onClick={handleUpdateColor}>
                update
              </button>
          </div>
      </Modal>

  );
};

export default UpdateModal;
