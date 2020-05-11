import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Alert } from 'react-native';


export default function Button({ onPress, children }) {
  return <TouchableHighlight onPress={() => Alert.alert('Teste')}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
