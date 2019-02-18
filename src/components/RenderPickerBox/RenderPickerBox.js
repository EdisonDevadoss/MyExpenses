import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PickerBox from '../PickerBox';

class renderPickerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: props.input.value
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.input.value !== prevProps.input.value) {
      this.setState({ itemValue: this.props.input.value });
    }
  }
  render() {
    const {
      input: { onChange, ...restInput },
      meta: { touched, error }
    } = this.props;

    return (
      <View>
        <PickerBox
          {...restInput}
          {...this.props}
          selectedValue={this.state.itemValue}
          options={this.props.options}
          onValueChange={(itemValue) => {
            this.setState({ itemValue });
            onChange(itemValue);
          }}
        />
        {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
      </View>
    );
  }
}

export default renderPickerBox;
