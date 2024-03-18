import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import {
  FaEye,
  FaHeadphones,
  FaBookOpen,
  FaLeaf,
  FaDumbbell,
  FaHeartbeat,
  FaDog,
  FaBone,
  FaChair,
  FaCarrot,
} from 'react-icons/fa';
import { PiFlowerFill, PiForkKnifeBold, PiFlowerTulipBold } from 'react-icons/pi';
import { FiCoffee } from 'react-icons/fi';
import { FaMasksTheater } from 'react-icons/fa6';

const icons = {
  see: <FaEye className='w-5 h-5' />,
  hear: <FaHeadphones className='w-5 h-5' />,
  read: <FaBookOpen className='w-5 h-5' />,
  watch: <FaMasksTheater className='w-5 h-5' />,
  nature: <FaLeaf className='w-5 h-5' />,
  workout: <FaDumbbell className='w-5 h-5' />,
  relax: <PiFlowerTulipBold className='w-5 h-5' />,
  nourish: <FaHeartbeat className='w-5 h-5' />,
  play: <FaDog className='w-5 h-5' />,
  care: (
    <div className='relative'>
      <BiPlusMedical className='w-5 h-5' />
      <FaDog className='w-5 h-5' />
    </div>
  ),
  spoil: <FaBone className='w-5 h-5' />,
  starred: <PiFlowerFill className='w-5 h-5' />,
  caffeine: <FiCoffee className='w-5 h-5' />,
  scene: <PiForkKnifeBold className='w-5 h-5' />,
  alFresco: <FaChair className='w-5 h-5' />,
  market: <FaCarrot className='w-5 h-5' />,
};

const IconComponent = ({ name }) => {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon '${name}' not found`);
    return null; // You can also return a default icon or placeholder here if needed
  }

  return icon;
};

export default IconComponent;
