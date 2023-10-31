import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null); 

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      Alert.alert('Do you need help?');
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    Alert.alert('Login submitted: ' + formData.username + ', ' + formData.password);
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInput
          placeholder="your-email@email.com"
          onChangeText={(text) => handleChange('username', text)}
          value={formData.username}
        />
      </View>
      <View>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => handleChange('password', text)}
          value={formData.password}
        />
      </View>
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

export default Login;
