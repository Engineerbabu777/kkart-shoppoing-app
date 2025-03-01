/* eslint-disable react/react-in-jsx-scope */
import {Colors} from '@utils/Constants';
import { ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';

interface CustomSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

export default function CustomSafeAreaView(
  props: CustomSafeAreaViewProps,
): JSX.Element {
  return (
    <View style={[styles.container, props?.style]}>
      <SafeAreaView />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
