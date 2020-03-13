/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
  NavigationService.navigate('Home', params);
}

export function navigateToRepo(params) {
  NavigationService.navigate('RepoPage', params);
}

export function navigateToRepoPullRequests(params) {
  NavigationService.navigate('RepoPullRequests', params);
}

export function navigateToRepoIssues(params) {
  NavigationService.navigate('RepoIssues', params);
}
