import React, { FC } from 'react';
import axios from 'axios';
import { IColor } from '../App';

interface DeleteButtonProps {
  id: string | number;
  setColors: any;
  colors: IColor[];
}

const DeleteButton: FC<DeleteButtonProps> = ({ id, setColors, colors }) => {
  const deleteColor = async () => {
    await axios.delete(`http://localhost:5001/colors/${id}`).then(() => {
      const filteredColors = colors.filter((item) => item.id !== id);
      setColors(filteredColors);
    });
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white my-5  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
        onClick={deleteColor}>
        delete
      </button>
    </div>
  );
};

export default DeleteButton;
