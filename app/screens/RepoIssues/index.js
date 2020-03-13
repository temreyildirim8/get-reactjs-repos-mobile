import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function RepoIssues(props) {
  useEffect(() => {
    // TODO(YildirimE): will be handled
    window.console.log('page', props);
  }, [props]);

  return (
    <View style={styles.container}>
      <Text>{props?.navigation?.state?.params?.name} Issues</Text>
      <Text>Api link: {props?.navigation?.state?.params?.issues_url}</Text>
    </View>
  );
}
