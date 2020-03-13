import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export default function RepoPage(props) {
  const goToPulls = () =>
    props.navigation.navigate(
      'RepoPullRequests',
      props?.navigation?.state?.params,
    );
  const goToIssues = () =>
    props.navigation.navigate('RepoIssues', props?.navigation?.state?.params);

  useEffect(() => {
    // TODO(YildirimE): will be handled
    window.console.log('page', props);
  }, [props]);

  return (
    <View style={styles.container}>
      <Text>Repo page of "{props?.navigation?.state?.params?.name}"</Text>
      <Text>Full name: {props?.navigation?.state?.params?.full_name}</Text>
      <Text>Forks: {props?.navigation?.state?.params?.forks_count}</Text>
      <Text>Watchers: {props?.navigation?.state?.params?.watchers}</Text>
      <View style={styles.childContainer}>
        <TouchableOpacity style={styles.child} onPress={goToPulls}>
          <Text>Pull requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.child} onPress={goToIssues}>
          <Text>Issues</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
