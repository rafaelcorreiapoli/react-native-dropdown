Usage:
```js
<Dropdown
  placeholder="Select your favorite OS..."
  options={options}
  value={this.state.favoriteOS}
  onChange={favoriteOS => this.setState({ favoriteOS })}
  containerStyle={styles.dropdownContainerStyle}
  limitDropdownOptionsOnView={4}
  floating
  appearence={'flat'}
  selectedStyle={{
    backgroundColor: 'mediumorchid'
  }}
  textSelectedStyle={{
    color: 'white'
  }}
  iconSelectedStyle={{
    color: 'white'
  }}

  optionsContainerStyle={{
    marginTop: 0
  }}

  placeholderStyle={{
    color: 'lightgrey'
  }}
  labelStyle={{
    color: 'darkgray'
  }}
/>
```
