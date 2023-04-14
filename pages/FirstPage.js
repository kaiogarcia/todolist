import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Essa é a sua primeira página
          </Text>
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Ir para ToDoList"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FirstPage;