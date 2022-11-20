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
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <input
        className="shadow appearance-none border border-red-500 rounded w-100 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="shadow appearance-none border border-red-500 rounded w-100 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="color"
        value={color}
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-5 "
        onClick={handleUpdateColor}>
        update
      </button>
    </Modal>
  );
};

export default UpdateModal;
