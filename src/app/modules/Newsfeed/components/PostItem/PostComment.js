import React from 'react';
import {NavLink} from 'react-router-dom';

const PostComment = props => {
  const {data} = props;

  return (
    <div>
      <div
        className="View CommentItem"
        style={{display: 'flex', flexDirection: 'row', padding: '10px 10px 0px 8px', backgroundColor: 'white'}}>
        <div className="symbol symbol-40 symbol-circle symbol-light-success mr-2">
          <div className="symbol-label" style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
        </div>
        <div className="View" style={{paddingLeft: '6px', paddingRight: '6px', flexShrink: 1, minWidth: '120px'}}>
          <div className="View d-flex flex-nowrap align-items-center flex-shrink-1">
            <div
              className="View"
              style={{
                padding: '6px 10px',
                backgroundColor: 'rgb(239, 239, 239)',
                borderRadius: '15px',
                alignSelf: 'flex-start',
                minWidth: '140px',
                textAlign: 'left',
                flex: '1 1 0%',
              }}>
              <NavLink
                to={`/groups/${data.group.id}`}
                className="TouchableOpacity d-flex flex-nowrap align-self-start align-items-center">
                <div
                  className="Text CommentItem-displayNameLabel d-flex text-left align-self-start"
                  style={{
                    fontSize: '1.0715em',
                    fontWeight: 'normal',
                  }}>
                  Hoàng Khánh Quyền
                </div>
              </NavLink>
              <div className="Text" style={{fontSize: '0.9286em', flexWrap: 'wrap', textAlign: 'left', marginTop: '2px'}}>
                Chắc lúc bầu mom áp lực lắm
              </div>
            </div>
          </div>
          <div className="View d-flex align-items-center mt-1">
            <div className="Text pt-1 pl-2 pr-2" style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em'}}>
              25 phút
            </div>
            <div className="Text pt-1 pl-2 pr-2" style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em', fontWeight: 600}}>
              Thích
            </div>
            <div className="Text pt-1 pl-2 pr-2" style={{fontSize: '0.8571em', fontWeight: 600, color: 'rgb(112, 112, 112)'}}>
              Trả lời
            </div>
          </div>
        </div>
      </div>
      <>
        <div
          className="View CommentItem"
          style={{display: 'flex', flexDirection: 'row', padding: '0px 10px 0px 58px', backgroundColor: 'white'}}>
          <div className="symbol symbol-25 symbol-circle symbol-light-success mr-2">
            <div className="symbol-label" style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
          </div>
          <div className="View" style={{paddingLeft: '6px', paddingRight: '6px', flexShrink: 1, minWidth: '120px'}}>
            <div className="View d-flex flex-nowrap align-items-center flex-shrink-1">
              <div
                className="View "
                style={{
                  padding: '6px 10px',
                  backgroundColor: 'rgb(239, 239, 239)',
                  borderRadius: '15px',
                  alignSelf: 'flex-start',
                  minWidth: '140px',
                  textAlign: 'left',
                  flex: '1 1 0%',
                }}>
                <NavLink
                  to={`/groups/${data.group.id}`}
                  className="TouchableOpacity d-flex flex-nowrap align-self-start align-items-center"
                  href="/u/ntthuyvy">
                  <div
                    className="Text CommentItem-displayNameLabel d-flex text-left align-self-start"
                    style={{
                      fontSize: '1.0715em',
                      fontWeight: 'normal',
                    }}>
                    Thuý Vy
                  </div>
                </NavLink>
                <div className="Text d-flex flex-wrap mt-1 text-left">
                  Dạ hên em bầu lúc đó 6th vẫn ráng thi tốt nghiệp cho xong. Mỗi lần học xong muốn chạy nhanh ra khỏi cổng bao ánh
                  mắt nhìn em như sinh vật lạ vậy
                </div>
              </div>
            </div>
            <div className="View d-flex align-items-center mt-1">
              <div className="Text pt-1 pl-2 pr-2" style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em'}}>
                25 phút
              </div>
              <div className="Text pt-1 pl-2 pr-2" style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em', fontWeight: 600}}>
                Thích
              </div>
              <div className="Text pt-1 pl-2 pr-2" style={{fontSize: '0.8571em', fontWeight: 600, color: 'rgb(112, 112, 112)'}}>
                Trả lời
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PostComment;
