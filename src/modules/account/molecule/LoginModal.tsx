import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import {loginOrSignUp} from '../api/api';
import {setData, setError} from '../api/slice';
import {navigate} from '@navigation/NavigationUtil';
import {clearCart} from '@modules/cart/api/slice';
import {modalStyles} from '@styles/modalStyles';
import Icon from '@components/atoms/Icon';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const LoginModal = ({onClose, visible}: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.account.user);
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleLogin = async () => {
    const data = await loginOrSignUp(number, address);

    if (data) {
      dispatch(setData(data));
      onClose();
    } else {
      dispatch(setError(data));
      Alert.alert('There was an error. Please try again');
    }
  };

  useEffect(() => {
    if (user?.phone) {
      setNumber(user?.phone);
      setAddress(user?.address);
    }
  }, [user]);

  const handleLogout = async () => {
    onClose();
    navigate('Home');
    setAddress('');
    setNumber('');
    await dispatch(clearCart());

    await dispatch(setData(null));
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalStyles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={modalStyles.scrollViewContent}>
              <View style={modalStyles.modalContent}>
                <TouchableOpacity
                  style={modalStyles.closeIcon}
                  onPress={onClose}>
                  <Icon
                    name="close"
                    iconFamily="Ionicons"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
                <Text style={modalStyles.title}>
                  Login for the best experience
                </Text>
                <Text style={modalStyles.subTitle}>
                  Enter your phone number to proceeded
                </Text>

                <TextInput
                  style={modalStyles.input}
                  placeholder="Enter your number"
                  value={number}
                  maxLength={10}
                  onChangeText={setNumber}
                  keyboardType="number-pad"
                  placeholderTextColor={'#ccc'}
                />

                <TextInput
                  style={modalStyles.input}
                  placeholder="Enter your address here"
                  value={address}
                  onChangeText={setAddress}
                  textAlignVertical="top"
                  multiline
                  keyboardType="number-pad"
                  placeholderTextColor={'#ccc'}
                />

                <View style={modalStyles.buttonContainer}></View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LoginModal;
