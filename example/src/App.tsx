import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  I18nManager,
  SafeAreaView,
  ImageStyle,
  StyleProp,
} from 'react-native';

import SlideButton from 'rn-slide-button';
import Button from './Button';

export default function App() {
  const [animating, setAnimating] = React.useState<boolean>();
  // const [isRTL, setIsRTL] = React.useState<boolean>(I18nManager.isRTL);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [timerCount, setTimerCount] = React.useState(5);

  const timer = React.useCallback(() => {
    let interval = setInterval(() => {
      setTimerCount((lastTimerCount) => {
        if (lastTimerCount <= 1) {
          clearInterval(interval);
          setAnimating(false);
          return 0;
        }
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  const handleToggle = React.useCallback(() => {
    // I18nManager.forceRTL(!isRTL);
    // setIsRTL((prev) => !prev);
    // console.log(`isRTL: ${I18nManager.isRTL}`);
    // setToggle((prev) => !prev);
    setTimerCount(5);
  }, []);

  const renderIcon = React.useCallback((style: StyleProp<ImageStyle>) => {
    return (
      <Image
        style={style}
        source={require('../assets/icons/arrow-right.png')}
      />
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.header]}>
        <Text style={styles.title}>RN SLIDE BUTTON</Text>
      </View>
      <View style={styles.container}>
        <Text>Default:</Text>
        <SlideButton
          title="Slide To Unlock"
        />
        <Text>Disabled:</Text>
        <SlideButton
          disabled
          title="Slide To Unlock"
          icon={renderIcon(styles.icon)}
          height={54}
          borderRadius={27}
        />
        <Text>Customized: reached to {toggle ? 'END' : 'START'}</Text>
        <SlideButton
          title="Slide To Save"
          icon={renderIcon(styles.saveIcon)}
          containerStyle={styles.saveButton}
          underlayStyle={styles.saveButtonUnderlay}
          thumbStyle={styles.saveThumb}
          height={52}
          borderRadius={12}
          reverseSlideEnabled
          padding={0}
          onReachedToStart={() => setToggle(false)}
          onReachedToEnd={() => setToggle(true)}
        />

        <Text>Animated:</Text>
        <SlideButton
          title="Slide To Unlock"
          icon={renderIcon(styles.unlockIcon)}
          height={54}
          borderRadius={27}
          containerStyle={styles.unlockButton}
          underlayStyle={styles.unlockButtonUnderlay}
          thumbStyle={styles.unlockThumb}
          reverseSlideEnabled
          animation={true}
        />
        <Text>Animated with auto reset:</Text>
        <SlideButton
          title="Slide To Verify"
          icon={renderIcon(styles.verifyIcon)}
          height={52}
          borderRadius={12}
          padding={2}
          containerStyle={styles.verifyButton}
          underlayStyle={styles.verifyButtonUnderlay}
          reverseSlideEnabled={false}
          autoReset={true}
          animation={true}
        />
        <Text>Timer: auto reset after {timerCount} second</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SlideButton
            title="Slide To Unlock"
            icon={renderIcon(styles.timerIcon)}
            height={54}
            borderRadius={27}
            containerStyle={styles.timerButton}
            underlayStyle={styles.timerButtonUnderlay}
            onReachedToEnd={() => {
              setAnimating(true);
              timer();
              // setTimeout(() => {
              //   setAnimating(false)
              // }, 5000)
            }}
            // reverseSlideEnabled
            animation={true}
            dynamicResetEnabled={true}
            dynamicResetDelaying={animating}
          />
          <Button onPress={handleToggle} title="Reset" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0095FF',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#0095FF',
  },
  saveIcon: {
    width: 24,
    height: 24,
    tintColor: '#00E096',
  },
  saveButton: {
    backgroundColor: '#00E096',
  },
  saveButtonUnderlay: {
    backgroundColor: '#51F0B0',
  },
  saveThumb: {
    width: 50,
    height: 60,
  },
  unlockIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFAA00',
  },
  unlockButton: {
    backgroundColor: '#FFAA00',
    borderColor: '#b0b',
    borderWidth: 1,
  },
  unlockButtonUnderlay: {
    backgroundColor: '#FFC94D',
  },
  unlockThumb: {
    width: 60,
    borderColor: '#b0b',
    borderWidth: 1,
  },

  verifyIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF3D71',
  },
  verifyButton: {
    backgroundColor: '#FF3D71',
  },
  verifyButtonUnderlay: {
    backgroundColor: '#FF708D',
  },

  timerIcon: {
    width: 24,
    height: 24,
    tintColor: '#700940',
  },
  timerButton: {
    backgroundColor: '#700940',
  },
  timerButtonUnderlay: {
    backgroundColor: '#94124E',
  },
});
