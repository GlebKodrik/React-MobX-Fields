import LocationStore from './pages/location-page/store/location-store';

class RootStore {
  private _location: LocationStore = null;

  public get locationStore() {
    if (!this._location) {
      this._location = new LocationStore();
    }
    return this._location;
  }
}

const rootStore = new RootStore();

export default rootStore;
