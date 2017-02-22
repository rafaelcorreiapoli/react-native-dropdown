import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Option from './Option'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PLACEHOLDER_COLOR = 'lightgrey'
const BORDER_COLOR = 'rgb(245, 245, 245)'

export default class Dropdown extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this._handlePress = this._handlePress.bind(this)
    this._handlePressOption = this._handlePressOption.bind(this)
    this._renderOption = this._renderOption.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
  }



  _toggleDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }
  _hideDropdown() {
    this.setState({
      showDropdown: false
    })
  }
  _showDropdown() {
    this.setState({
      showDropdown: true
    })
  }
  _handlePress() {
    this._toggleDropdown()
  }

  _handlePressOption(option) {
    const {
      onChange
    } = this.props

    if (onChange && typeof onChange === 'function') {
      onChange(option.value, option)
      this._hideDropdown()
    }
  }
  _renderOption(option) {
    const {
      value,
      selectedStyle,
      textSelectedStyle,
      iconSelectedStyle
    } = this.props
    return (
      <View
        zIndex={999}
        style={{
          zIndex: 9999
        }}
      >
        <TouchableOpacity

          onPress={() => this._handlePressOption(option)}
        >
          <Option
            {...option}
            isSelected={option.value === value}
            selectedStyle={selectedStyle}
            textSelectedStyle={textSelectedStyle}
            iconSelectedStyle={iconSelectedStyle}
          />
        </TouchableOpacity>
      </View>

    )
  }

  _renderHeader() {
    const {
      placeholder,
      showHeader
    } = this.props

    if (!showHeader) {
      return null
    }

    return (
      <Option
        label={placeholder}
        disabled={true}
      />

    )
  }
  _getLabelForValue(value) {
    const {
      options
    } = this.props
    const optionForValue = options.find(option => option.value === value)
    return optionForValue ? optionForValue.label : null
  }
  render() {
    const {
      options,
      value,
      onChange,
      placeholder,
      containerStyle,
      valueContainerStyle,
      limitDropdownOptionsOnView,
      placeholderStyle,
      labelStyle,
      optionsContainerStyle,
      appearence,
      floating,
      style
    } = this.props

    const dataSource = this.ds.cloneWithRows(options)

    // TODO: calculate height
    const optionHeight = 40
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.valueContainer, valueContainerStyle]}>
          <TouchableOpacity
            onPress={this._handlePress}
            style={styles.valueTouchableOpacity}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                {
                  value ?
                  <Text style={[styles.label, labelStyle]}>{this._getLabelForValue(value)}</Text>
                  :
                  <Text style={[styles.placeholder, placeholderStyle]}>{placeholder}</Text>
                }
              </View>
              {
                value ?
                <Ionicons
                  name={'ios-checkmark-outline'}
                  color="lightgrey"
                  size={26}
                />
                :
                <Ionicons
                  name={'ios-arrow-down-outline'}
                  color="lightgrey"
                />
              }

            </View>

          </TouchableOpacity>
        </View>

        {
          this.state.showDropdown &&
          <View
            style={[
              styles.optionsContainer,
              limitDropdownOptionsOnView && {
                height: (limitDropdownOptionsOnView + 1) * optionHeight
              },
              appearence === '3d' && styles.shadow,
              floating && styles.floating,
              optionsContainerStyle
            ]}
          >
            <ListView
              renderHeader={this._renderHeader}
              style={styles.optionsList}
              dataSource={dataSource}
              renderRow={this._renderOption}
            />
          </View>
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    zIndex: 99
  },
  valueContainer: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: BORDER_COLOR,
  },
  valueTouchableOpacity: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  optionsContainer: {
    zIndex: 999,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: BORDER_COLOR,
    backgroundColor: 'white',
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8
    },
  },
  floating: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
  },
  placeholder: {
    color: PLACEHOLDER_COLOR,
  },
  optionsList: {
    zIndex: 999
  }
})
