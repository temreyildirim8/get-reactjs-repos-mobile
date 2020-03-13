import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as repoActions from 'app/actions/repoActions';
import * as navigationActions from 'app/actions/navigationActions';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login(props) {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.reposReducer.repos);
  const getRepos = () => dispatch(repoActions.getRepos());
  const goToRepo = repo => () => navigationActions.navigateToRepo(repo);

  useEffect(() => {
    // TODO(YildirimE): will be handled
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {repos ? (
          repos.map((repo, index) => (
            <TouchableOpacity
              onPress={goToRepo(repo)}
              style={styles.repoContainer}
              key={index}>
              <Text>{repo.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <TouchableOpacity onPress={getRepos}>
            <Text>Get REACTJS Repos</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
