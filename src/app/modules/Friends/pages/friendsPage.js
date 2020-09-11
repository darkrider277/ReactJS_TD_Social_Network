import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import AllFriendsPage from './AllFriendsPage';

import {LayoutSplashScreen, ContentRoute} from '../../../../_metronic/layout';

export default function friendsPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path="/friends" component={AllFriendsPage} />
      </Switch>
    </Suspense>
  );
}
