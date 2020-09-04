import React from 'react';
import {NavLink} from 'react-router-dom';

const PostInfo = props => {
  const {data} = props;
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="symbol symbol-40 symbol-circle symbol-light-success mr-2">
        <div
          className="symbol-label"
          style={{backgroundImage: `url("https://s1.cdn.becuame.com/small/${data.user.avatarUrl}")`}}
        />
      </div>

      <div className="d-flex flex-column flex-grow-1">
        <span>
          <NavLink
            className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
            to={`/u/${data.user.username}`}>
            {data.user.displayName}
          </NavLink>{' '}
          đăng trong nhóm <NavLink to={`/groups/${data.group.id}`}>{data.group.name}</NavLink>
        </span>
        <span className="text-muted">
          Hôm qua <i className="fas fa-globe-asia" title="Công khai" />
        </span>
      </div>
    </div>
  );
};

export default PostInfo;
