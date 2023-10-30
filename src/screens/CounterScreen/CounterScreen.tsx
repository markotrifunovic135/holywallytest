import { View, Text } from 'react-native'
import React, { useState } from 'react'

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  return (
    <View>
      <Text>CounterScreen</Text>
    </View>
  )
}

export default CounterScreen