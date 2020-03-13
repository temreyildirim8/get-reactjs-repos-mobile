import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function RepoPullRequests(props) {
  return (
    <View style={styles.container}>
      <Text>{props?.navigation?.state?.params?.name} Pull Requests</Text>
      <Text>Api link: {props?.navigation?.state?.params?.pulls_url}</Text>
    </View>
  );
}
