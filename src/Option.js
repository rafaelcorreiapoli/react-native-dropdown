import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Option extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      label,
      isSelected,
      disabled,
      selectedStyle,
      textSelectedStyle,
      iconSelectedStyle
    } = this.props
    return (
      <View style={[styles.container, isSelected && [styles.selected, selectedStyle]]}>
        <Text
          style={[styles.label, disabled && styles.disabled, isSelected && [styles.textSelected, textSelectedStyle]]}
        >
          {label}
        </Text>

        {isSelected &&
          <Ionicons
            name='ios-checkmark-outline'
            style={[styles.icon, iconSelectedStyle]}
            size={26}
          />
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: 'lightgrey'
  },
  label: {
    flex: 1,
  },
  selected: {
    backgroundColor: 'lightblue',
  },
  disabled: {
    color: 'lightgrey'
  },
  textSelected: {
    fontWeight: 'bold'
  }
})
