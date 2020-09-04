import React from 'react';
import {useSelector} from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import {NavLink} from 'react-router-dom';

import {PostInfo, PostContent, PostStatus} from './PostItem/index';

const PostItem = props => {
  const {itemData} = props;
  const {user} = useSelector(state => state.auth);

  return (
    <div className="card card-custom gutter-b feed-item">
      <div className="card-body">
        <PostInfo data={itemData} />
        <PostContent data={itemData} />

        <div className="separator separator-solid mt-2 mb-4" />

        <PostStatus data={itemData} />

        <div className="separator separator-solid mt-2 mb-4" />

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
                    to={`/groups/${itemData.group.id}`}
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
                    to={`/groups/${itemData.group.id}`}
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
                    Dạ hên em bầu lúc đó 6th vẫn ráng thi tốt nghiệp cho xong. Mỗi lần học xong muốn chạy nhanh ra khỏi cổng bao
                    ánh mắt nhìn em như sinh vật lạ vậy
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
        </div>

        <div
          className="View "
          style={{
            padding: '10px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: '1px',
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            borderColor: 'rgb(224, 224, 224)',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
          }}>
          <div
            className="Image GroupAvatar"
            style={{width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgb(239, 239, 239)'}}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://graph.facebook.com/3118759381516727/picture?width=2048&height=2048")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            />
          </div>
          <div
            className="View QuickInputCommentItem-inputContainer"
            style={{
              marginLeft: '6px',
              borderColor: 'rgb(222, 222, 222)',
              borderWidth: '1px',
              backgroundColor: 'rgb(239, 239, 239)',
              borderRadius: '20px',
              flexGrow: 1,
              flexShrink: 1,
              display: 'flex',
              flexFlow: 'row nowrap',
              alignContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <TextareaAutosize
              className="AutoSizeInput form-control border-0 m-1"
              placeholder="Viết bình luận..."
              autoCapitalize="sentences"
              style={{
                flexGrow: 1,
                flexShrink: 1,
                padding: '0px 10px',
                fontSize: '1em',

                resize: 'none',
                background: 'transparent',
                boxSizing: 'border-box',
              }}
              defaultValue={''}
              rows={1}
              maxRows={6}
            />
            <div className="TouchableOpacity  ">
              <div className="Image " style={{width: '26px', height: '26px', margin: '3px'}}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/static/images/icon_gallery_off.png")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                />
              </div>
            </div>
            <div className=" ">
              <div style={{cursor: 'pointer'}}>
                <div className="Image " style={{width: '26px', height: '26px', margin: '3px'}}>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: 'url("/static/images/icon_heart_off@3x.png")',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className=" ">
              <div style={{cursor: 'pointer'}}>
                <div className="Image " style={{width: '26px', height: '26px', margin: '3px'}}>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: 'url("/static/images/icon_smile_off@3x.png")',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="TouchableOpacity  disabled">
              <i
                style={{
                  fontSize: '22px',
                  color: 'lightgray',
                  height: '40px',
                  lineHeight: '40px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  fontFamily: 'Ionicons',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                }}>
                
              </i>
            </div>
            <div
              className="Image "
              style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/static/images/icon_heart@3x.png")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              />
            </div>
            <div
              className="Image "
              style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/static/images/icon_heart_off@3x.png")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              />
            </div>
            <div
              className="Image "
              style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/static/images/icon_smile@3x.png")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              />
            </div>
            <div
              className="Image "
              style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/static/images/icon_smile_off@3x.png")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              />
            </div>
          </div>
        </div>
        {/*edit::Editor*/}
      </div>
      {/*end::Body*/}
    </div>
  );
};

export default PostItem;
