import React, { useCallback, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CounterScreen.styles';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { stepItems } from './helpers';
import Button from '../../components/Button/Button';
import { useCounterHook } from '../../hooks/useCounterHook';

const CounterScreen = () => {
    const {counter, setCounter} = useCounterHook(0);
    const [step, setStep] = useState(1);
    const [visible, setVisible] = useState<boolean>(false);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const incrementCounter = useCallback (() => {
        setCounter((prevState) => prevState + step);
    }, [step]);

    const decrementCounter = useCallback (() => {
        if (counter - step >= 0) {
            setCounter((prevState) => prevState - step);
        } else {
            setCounter(0);
        }
    }, [counter, step]);

    return (
        <View style={[styles.container, styles.paddingTop_50]}>
            <View style={styles.contentContainer}>
                <View style={[styles.dropdownContainer, styles.shadowProp]}>
                    <TouchableOpacity onPress={() => setVisible(true)} style={styles.dropdownHeader}>
                        <Text style={styles.dropdownText}>Select step</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textStyleHeader}>Counter: {counter}</Text>
                <Text style={styles.textStyleHeaderSmall}>Step: {step}</Text>
                <Button
                    containerStyle={[styles.allowButtonContainer, styles.marginTop_24]}
                    text='Increment'
                    onPress={incrementCounter}
                    textStyle={styles.buttonText}
                />
                <Button
                    containerStyle={[styles.skipButtonContainer, styles.marginTop_12]}
                    text='Decrement'
                    textStyle={styles.skipText}
                    onPress={decrementCounter}
                />
            </View>
            {visible && (
                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={['45%']}
                    onClose={() => setVisible(false)}
                    enablePanDownToClose>
                    <BottomSheetScrollView contentContainerStyle={[styles.contentContainer, styles.scrollContainer]}>
                        {stepItems.map(item => (
                            <TouchableOpacity style={styles.dropdownItem}
                                key={item.value}
                                onPress={() => {
                                    setStep(item.value);
                                    setVisible(false)
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
