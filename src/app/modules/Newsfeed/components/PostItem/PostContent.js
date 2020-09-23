import React from 'react';
import FbImageLibrary from '../../../../components/react-fb-image-grid';
import _ from 'lodash';

const PostInfo = props => {
  const {data} = props;

  const attachments = data?.attachments ?? [];

  let arr_image = _.filter(attachments, {type: 'image'}).map(i => `https://s1.cdn.becuame.com/medium/${i.url}`);

  return (
    <div className="pt-5">
      <p className="text-dark-75 font-size-lg font-weight-normal mb-2">{data.content}</p>
      <div className="bgi-no-repeat bgi-size-cover rounded ">
        <FbImageLibrary images={arr_image} />
      </div>
    </div>
  );
};

export default PostInfo;
