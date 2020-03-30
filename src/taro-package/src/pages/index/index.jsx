import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { add, minus, asyncAdd } from '../../actions/counter';

import './index.styl';
import Demo from '../../components/demo';

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add());
  },
  dec () {
    dispatch(minus());
  },
  asyncAdd () {
    dispatch(asyncAdd());
  }
}))
class Index extends Component {
    config = {
      navigationBarTitleText: 'Taro Page',
      usingComponents: {
        'demo': '../../components/demo'
      }
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps);
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
      return (
        <View className='index'>
          <Button className='add_btn' onClick={this.props.add}>+</Button>
          <Button className='dec_btn' onClick={this.props.dec}>-</Button>
          <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
          <View><Text>{this.props.counter.num}</Text></View>
          <View><Text>Here is Taro page</Text></View>
          <Demo text='taro to taro props' />
        </View>
      );
    }
}

export default Index;
