import React, { useCallback, useRef, useState } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CounterScreen.styles';
import { stepItems } from './helpers';
import Button from '../../components/Button/Button';
import { useCounterHook } from '../../hooks/useCounterHook';
import commonStyles from '../../styles/commonStyles';

const CounterScreen = () => {
  const { counter, setCounter } = useCounterHook(0);
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const incrementCounter = useCallback(() => {
    setCounter(prevState => prevState + step);
  }, [step]);

  const decrementCounter = useCallback(() => {
    if (counter - step >= 0) {
      setCounter(prevState => prevState - step);
    } else {
      setCounter(0);
    }
  }, [counter, step]);

  return (
    <View style={[styles.paddingTop_50, commonStyles.flex]}>
      <View style={styles.contentContainer}>
        <View style={[styles.dropdownContainer, styles.shadowProp]}>
          <TouchableOpacity onPress={() => setVisible(true)} style={[styles.dropdownHeader, commonStyles.alignBothCenter]}>
            <Text style={styles.dropdownText}>Select step</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.textStyleHeader, commonStyles.alignSelfCenter]}>Counter: {counter}</Text>
        <Text style={[styles.textStyleHeaderSmall, commonStyles.alignSelfCenter]}>Step: {step}</Text>
        <Button
          containerStyle={[styles.incrementButtonContainer, styles.marginTop_24, commonStyles.alignBothCenter]}
          text="Increment"
          onPress={incrementCounter}
          textStyle={styles.buttonText}
        />
        <Button
          containerStyle={[styles.decrementButtonContainer, styles.marginTop_12, commonStyles.alignBothCenter]}
          text="Decrement"
          textStyle={styles.skipText}
          onPress={decrementCounter}
        />
      </View>
      {visible && (
        <BottomSheet ref={bottomSheetRef} index={0} snapPoints={['45%']} onClose={() => setVisible(false)} enablePanDownToClose>
          <BottomSheetScrollView contentContainerStyle={[styles.contentContainer, styles.scrollContainer]}>
            {stepItems.map(item => (
              <TouchableOpacity
                style={[styles.dropdownItem, commonStyles.alignBothCenter]}
                key={item.value}
                onPress={() => {
                  setStep(item.value);
                  setVisible(false);
                }}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </View>
  );
};

export default CounterScreen;
