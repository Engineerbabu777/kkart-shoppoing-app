import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Viro360Image, ViroARScene, ViroARSceneNavigator} from '@reactvision/react-viro';

type Props = {};


const ARWorldScene = () => {
    return (
        <ViroARScene>
            {/* <Viro360Image /> */}
        </ViroARScene>
    )
}

const ArViewer = (props: Props) => {
  return (
    <>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: ARWorldScene,
        }}
        removeClippedSubviews
        renderToHardwareTextureAndroid
        style={styles.f1}
      />
    </>
  );
};

export default ArViewer;

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
});
