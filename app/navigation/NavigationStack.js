import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import RepoPage from 'app/screens/RepoPage';
import RepoIssues from 'app/screens/RepoIssues';
import RepoPullRequests from 'app/screens/RepoPullRequests';

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    RepoPage: {
      screen: RepoPage,
    },
    RepoIssues: {
      screen: RepoIssues,
    },
    RepoPullRequests: {
      screen: RepoPullRequests,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RNApp);
