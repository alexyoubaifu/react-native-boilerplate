import { observable, action } from 'mobx';
import NavigationService from 'App/Services/NavigationService';

class StartupStore {
  @action startupAction() {
    NavigationService.navigateAndReset('MainScreen');
  }
}

export default new StartupStore();
