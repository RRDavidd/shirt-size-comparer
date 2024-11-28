import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/states';

const Figure: React.FC = () => {
  const userSizes = useSelector((state: RootState) => state.size.userSizes);
  const shirtSizes = useSelector((state: RootState) => state.size.shirtSizes);

  return (
    <div>
      <h1>Figure Component</h1>
      <p>User Sizes:</p>
      <ul>
        <li>Height: {userSizes.height}</li>
        <li>Neck: {userSizes.neck}</li>
        <li>Chest: {userSizes.chest}</li>
        <li>Waist: {userSizes.waist}</li>
      </ul>
      <p>Shirt Sizes:</p>
      <ul>
        <li>Neck: {shirtSizes.neck}</li>
        <li>Chest: {shirtSizes.chest}</li>
        <li>Waist: {shirtSizes.waist}</li>
      </ul>
    </div>
  );
};

export default Figure;
