import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from '@components/atoms/Icon';
import RollingContent from 'react-native-rolling-bar';
import {searchItems} from '@utils/db';

export default function SearchBar() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <SafeAreaView />

      <View style={styles.container}>
        <Pressable onPress={toggleSwitch} style={styles.toggleContainer}>
          <Text style={styles.brandText}>Brand Mall</Text>
          <Image
            source={
              isOn
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={styles.switchIcon}
          />
        </Pressable>
        <Pressable style={styles.searchContainer}>
          <Icon name="search" iconFamily="Ionicons" size={20} color="black" />
          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}>
            {searchItems.map((searchItem: string) => (
              <Text
                key={searchItem}
                style={{fontSize: RFValue(10), color: Colors.text}}>
                {searchItem}
              </Text>
            ))}
          </RollingContent>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  toggleContainer: {
    width: '16%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: RFValue(8),
  },
  switchIcon: {
    width: '100%',
    height: 30,
    marginTop: 4,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    height: 40,
    color: 'black',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#fafafa',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
});
