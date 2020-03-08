import { observable, action } from 'mobx';

class CounterStore {
  @observable counter = 0;

  @action incrementCounterAction = () => {
    this.counter++;
  }

  @action decrementCounterAction = () => {
    this.counter--;
  }
}

export default new CounterStore();
