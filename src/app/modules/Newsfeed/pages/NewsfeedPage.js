import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import NewsPage from './NewsPage';

import {LayoutSplashScreen, ContentRoute} from '../../../../_metronic/layout';

export default function NewsfeedPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path="/newsfeed" component={NewsPage} />
      </Switch>
    </Suspense>
  );
}
