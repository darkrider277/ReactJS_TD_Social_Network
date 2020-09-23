import React from 'react';

const PostStatus = props => {
  const {data} = props;
  return (
    <div className="d-flex align-items-center">
      <div className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger font-size-sm p-2 mr-auto">
        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
          <i className="flaticon-black" />
        </span>
        {`${data?.reactionCount ?? 0} lượt thích`}
      </div>
      <div className="btn btn-text-primary btn-text-dark-50 btn-hover-icon-primary btn-hover-text-primary font-size-sm p-2 ">
        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
          <i className="flaticon-share" />
        </span>
        {`${data?.shareCount ?? 0} lượt chia sẻ`}
      </div>
      <div className="btn btn-text-primary btn-text-dark-50 btn-hover-icon-primary btn-hover-text-primary font-size-sm p-2 ">
        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
          <i className="flaticon-comment" />
        </span>
        {`${data?.commentCount ?? 0} bình luận`}
      </div>
    </div>
  );
};

export default PostStatus;
