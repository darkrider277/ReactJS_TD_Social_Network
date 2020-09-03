/* eslint-disable no-restricted-imports */
import React from 'react';

import NewPost from '../components/NewPost';
import ListPost from '../components/ListPost';

export default function NewsPage() {
  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <NewPost />
          <ListPost />
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}
