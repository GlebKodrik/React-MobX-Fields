import { action, makeObservable, observable } from 'mobx';

class LocationStore {
  private _posts: any = [];

  constructor() {
    makeObservable<LocationStore, '_posts' | 'updatePosts'>(this, {
      _posts: observable,
      updatePosts: action,
    });
  }

  public async init() {
    await this.requestGettingPosts();
  }

  private requestGettingPosts = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos');
      const response = await data.json();
      this.updatePosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  private updatePosts(posts: any) {
    this._posts = posts;
  }

  public get posts() {
    return this._posts;
  }
}

export default LocationStore;
