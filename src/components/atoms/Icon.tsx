import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type ICON_FAMILY =
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'EvilIcons'
  | 'AntDesign';
type IconProps = {
  name: string;
  size: number;
  color?: string;
  iconFamily: ICON_FAMILY;
};
export default function Icon({iconFamily, name, size, color}: IconProps) {
  return (
    <>
      {iconFamily === 'Ionicons' && (
        <>
          <Ionicons name={name} size={size} color={color} />
        </>
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <>
          <MaterialCommunityIcons name={name} size={size} color={color} />
        </>
      )}
      {iconFamily === 'AntDesign' && (
        <>
          <AntDesign name={name} size={size} color={color} />
        </>
      )}
      {iconFamily === 'EvilIcons' && (
        <>
          <EvilIcons name={name} size={size} color={color} />
        </>
      )}
      {iconFamily === 'MaterialIcons' && (
        <>
          <MaterialIcons name={name} size={size} color={color} />
        </>
      )}
    </>
  );
}
