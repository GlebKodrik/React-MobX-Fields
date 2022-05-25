import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import rootStore from '../../root-store';

const Location = () => {
  const { posts } = rootStore.locationStore;

  useEffect(() => {
    rootStore.locationStore.init();
  }, []);

  return (
    <div>
      Locations
      {posts.map((post: any) => (<div>{post?.title}</div>))}
    </div>
  );
};

export default observer(Location);
