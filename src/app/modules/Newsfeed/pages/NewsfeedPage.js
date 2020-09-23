import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import NewsPage from './NewsPage';
import NewPage from './NewPage';
import NewPageProfile from './NewPageProfile';

import {LayoutSplashScreen, ContentRoute} from '../../../../_metronic/layout';

export default function NewsfeedPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute exact path="/newsfeed" component={NewsPage} />
        <ContentRoute path="/newsfeed/:id/profile" component={NewPageProfile} />
        <ContentRoute path="/newsfeed/:id" component={NewPage} />
      </Switch>
    </Suspense>
  );
}
