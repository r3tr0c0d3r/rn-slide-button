/** @format */
import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  name: 'RNSlideButtonExample',
  host: '192.168.1.101',
  port: 9090,
});

Reactotron.useReactNative({
  asyncStorage: {ignore: ['secret']},
});

Reactotron.connect();
Reactotron.clear!();

const _log = (values: any) => __DEV__ && Reactotron.log!(values);
console.log = _log;
