import Icon from '@components/atoms/Icon';
import React from 'react';

interface TabIconProps {
  focused: boolean;
  size: number;
  color: string;
}

export const HomeIcon: React.FC<TabIconProps> = ({color, focused, size}) => {
  return (
    <>
      <Icon
        name={focused ? 'home' : 'home-outline'}
        size={size}
        color={color}
        iconFamily="Ionicons"
      />
    </>
  );
};

export const CategoriesIcon: React.FC<TabIconProps> = ({
  color,
  focused,
  size,
}) => {
  return (
    <>
      <Icon
        name={focused ? 'grid' : 'grid-outline'}
        size={size}
        color={color}
        iconFamily="Ionicons"
      />
    </>
  );
};

export const AccountIcon: React.FC<TabIconProps> = ({color, focused, size}) => {
  return (
    <>
      <Icon
        name={focused ? 'person' : 'person-outline'}
        size={size}
        color={color}
        iconFamily="Ionicons"
      />
    </>
  );
};

export const CartIcon: React.FC<TabIconProps> = ({color, focused, size}) => {
  return (
    <>
      <Icon
        name={focused ? 'cart' : 'cart-outline'}
        size={size}
        color={color}
        iconFamily="Ionicons"
      />
    </>
  );
};
