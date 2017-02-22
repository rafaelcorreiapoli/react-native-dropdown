# react-native-dropdown

### Usage
```js
const options = [{
  label: 'Windows',
  value: 'windows'
}, {
  label: 'OS X',
  value: 'osx'
}, {
  label: 'Linux',
  value: 'linux'
}]
```

```js
<Dropdown
  options={options}
  value={this.state.favoriteOS} 
  onChange={favoriteOS => this.setState({ favoriteOS })}
  
  placeholder="Select your favorite OS..."  // optional
  limitDropdownOptionsOnView={4} // optional
  floating  // optional, defaults to true
  appearence={'flat'}  // '3d' or 'flat', defaults to '3d'

  containerStyle={{  // optional
    borderColor: 'red'
  }} 
  selectedStyle={{ // optional
    backgroundColor: 'mediumorchid'
  }}
  textSelectedStyle={{ // optional
    color: 'white'
  }}
  iconSelectedStyle={{ // optional
    color: 'white'
  }}

  optionsContainerStyle={{ // optional
    marginTop: 0
  }}

  placeholderStyle={{ // optional
    color: 'lightgrey'
  }} 
  labelStyle={{ // optional
    color: 'darkgray'
  }}
/>
```
