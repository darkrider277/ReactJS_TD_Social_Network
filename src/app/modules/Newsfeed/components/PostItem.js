import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {toAbsoluteUrl, toAbsoluteAvatarUrl} from '../../../../_metronic/_helpers';
import SVG from 'react-inlinesvg';
import {FormattedMessage, injectIntl} from 'react-intl';

const PostItem = props => {
  const {user} = useSelector(state => state.auth);

  return (
    <div className="card card-custom gutter-b feed-item">
      {/*begin::Body*/}
      <div className="card-body">
        {/*begin::Header*/}
        <div className="d-flex align-items-center justify-content-between">
          {/*begin::Symbol*/}
          <div className="symbol symbol-40 symbol-circle symbol-light-success mr-5">
            <div className="symbol-label" style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
          </div>
          {/*end::Symbol*/}
          {/*begin::Info*/}
          <div className="d-flex flex-column flex-grow-1">
            <span>
              <a href="#" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                Grace Logan
              </a>{' '}
              đăng trong nhóm <a href="#">Tin tức</a>
            </span>
            <span className="text-muted">
              Hôm qua <i className="fas fa-globe-asia" title="Công khai" />
            </span>
          </div>
          {/*end::Info*/}
          {/*begin::Dropdown*/}
          <div className="dropdown dropdown-inline ml-2">
            <a
              href="#"
              className="btn btn-hover-light-primary btn-sm btn-icon"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <i className="ki ki-bold-more-hor" />
            </a>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right" style={{}}>
              {/*begin::Navigation*/}
              <ul className="navi navi-hover">
                <li className="navi-header">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon-notes" />
                    </span>
                    <span className="navi-text">Theo dõi bài viết</span>
                  </a>
                </li>
                <li className="navi-separator mb-0 opacity-70" />
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon-interface-10" />
                    </span>
                    <span className="navi-text">Lưu bài viết</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon-warning" />
                    </span>
                    <span className="navi-text">Ẩn bài viết</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-list-3" />
                    </span>
                    <span className="navi-text">Copy link</span>
                  </a>
                </li>
                <li className="navi-separator mb-0 opacity-70" />
                <li className="navi-footer">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon-cancel" />
                    </span>
                    <span className="navi-text">Xóa bài viết</span>
                  </a>
                </li>
              </ul>
              {/*end::Navigation*/}
            </div>
          </div>
          {/*end::Dropdown*/}
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="pt-5">
          {/*begin::Text*/}
          <p className="text-dark-75 font-size-lg font-weight-normal mb-2">
            Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you
            focused on the overall structure of your post
          </p>
          {/*end::Text*/}
          <div
            className="bgi-no-repeat bgi-size-cover rounded min-h-295px"
            style={{backgroundImage: 'url(assets/media/stock-600x400/img-39.jpg)'}}
          />
          {/*begin::Action*/}

          {/*end::Action*/}
        </div>
        <div className="separator separator-solid mt-2 mb-4" />

        <div className="d-flex align-items-center">
          <div className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger font-size-sm p-2 mr-auto">
            <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
              <i className="flaticon-black" />
            </span>
            75 Thích
          </div>
          <div className="btn btn-text-primary btn-text-dark-50 btn-hover-icon-primary btn-hover-text-primary font-size-sm p-2 ">
            <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
              <i className="flaticon-share" />
            </span>
            24 lượt chia sẻ
          </div>
          <div className="btn btn-text-primary btn-text-dark-50 btn-hover-icon-primary btn-hover-text-primary font-size-sm p-2 ">
            <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
              <i className="flaticon-comment" />
            </span>
            24 bình luận
          </div>
        </div>

        <div className="separator separator-solid mt-2 mb-4" />

        <div>
          <div
            className="View CommentItem"
            style={{display: 'flex', flexDirection: 'row', padding: '10px 10px 0px 8px', backgroundColor: 'white'}}>
            <div className="symbol symbol-40 symbol-circle symbol-light-success mr-5">
              <div className="symbol-label" style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
            </div>
            <div className="View" style={{paddingLeft: '6px', paddingRight: '6px', flexShrink: 1, minWidth: '120px'}}>
              <div className="View" style={{display: 'flex', flexFlow: 'row nowrap', flexShrink: 1, alignItems: 'center'}}>
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
                  <a
                    className="TouchableOpacity"
                    href="/u/132244"
                    style={{
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      alignItems: 'center',
                      userSelect: 'auto',
                      alignSelf: 'flex-start',
                    }}>
                    <div
                      className="Text CommentItem-displayNameLabel"
                      style={{
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                        color: 'var(--main-color)',
                        fontSize: '1.0715em',
                        fontWeight: 'normal',
                      }}>
                      Hoàng Khánh Quyền
                    </div>
                  </a>
                  <div className="Text" style={{fontSize: '0.9286em', flexWrap: 'wrap', textAlign: 'left', marginTop: '2px'}}>
                    Chắc lúc bầu mom áp lực lắm
                  </div>
                </div>
              </div>
              <div className="View" style={{display: 'flex', flexDirection: 'row', marginTop: '4px'}}>
                <div
                  className="Text"
                  style={{paddingTop: '3px', paddingLeft: '10px', paddingRight: '10px', fontSize: '0.8571em'}}>
                  26 phút
                </div>
                <div
                  className="TouchableOpacity TouchableSimple CommentItem-bubbleFooterButton"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    placeContent: 'center',
                    alignItems: 'center',
                    padding: '3px 10px',
                    borderRadius: '5px',
                    overflow: 'hidden',
                  }}>
                  <div
                    className="TouchableOpacity TouchableSimple CommentItem-bubbleFooterButton "
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      placeContent: 'center',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '5px',
                      overflow: 'hidden',
                    }}>
                    <i
                      className="icon-thumbs-up-solid"
                      style={{
                        fontSize: '14px',
                        color: 'rgb(142, 107, 159)',
                        width: '14px',
                        height: '16px',
                        lineHeight: '14px',
                        alignSelf: 'center',
                      }}
                    />
                    <div
                      className="Text  "
                      style={{color: 'rgb(142, 107, 159)', fontSize: '0.8571em', fontWeight: 600, lineHeight: '20px'}}>
                      {' '}
                      Thích
                    </div>
                  </div>
                </div>
                <div
                  className="TouchableOpacity TouchableSimple CommentItem-bubbleFooterButton"
                  style={{padding: '3px 10px', borderRadius: '5px', overflow: 'hidden'}}>
                  <div
                    className="Text"
                    style={{fontSize: '0.8571em', lineHeight: '20px', fontWeight: 600, color: 'rgb(112, 112, 112)'}}>
                    Trả lời
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="View CommentItem"
            style={{display: 'flex', flexDirection: 'row', padding: '0px 10px 0px 58px', backgroundColor: 'white'}}>
            <div className="symbol symbol-25 symbol-circle symbol-light-success mr-5">
              <div className="symbol-label" style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
            </div>
            <div className="View" style={{paddingLeft: '6px', paddingRight: '6px', flexShrink: 1, minWidth: '120px'}}>
              <div className="View" style={{display: 'flex', flexFlow: 'row nowrap', flexShrink: 1, alignItems: 'center'}}>
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
                  <a
                    className="TouchableOpacity"
                    href="/u/ntthuyvy"
                    style={{
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      alignItems: 'center',
                      userSelect: 'auto',
                      alignSelf: 'flex-start',
                    }}>
                    <div
                      className="Text CommentItem-displayNameLabel"
                      style={{
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                        color: 'var(--main-color)',
                        fontSize: '1.0715em',
                        fontWeight: 'normal',
                      }}>
                      Thuý Vy
                    </div>
                  </a>
                  <div className="Text" style={{fontSize: '0.9286em', flexWrap: 'wrap', textAlign: 'left', marginTop: '2px'}}>
                    Dạ hên em bầu lúc đó 6th vẫn ráng thi tốt nghiệp cho xong. Mỗi lần học xong muốn chạy nhanh ra khỏi cổng
                    <span
                      title=":joy:"
                      style={{
                        textIndent: '-9999em',
                        fontSize: 'inherit',
                        height: '20px',
                        width: '20px',
                        top: '-2px',
                        position: 'relative',
                        display: 'inline-block',
                        lineHeight: 'normal',
                        verticalAlign: 'middle',
                        backgroundImage: 'url("/static/emojione/emojione-4.0-64x64.png")',
                        backgroundRepeat: 'no-repeat',
                        minWidth: '20px',
                        minHeight: '20px',
                        backgroundPosition: '-121.875px 0px',
                        backgroundSize: '203.125px 223.438px',
                      }}>
                      😂
                    </span>
                    bao ánh mắt nhìn em như sinh vật lạ vậy
                  </div>
                </div>
              </div>
              <div className="View" style={{display: 'flex', flexDirection: 'row', marginTop: '4px'}}>
                <div
                  className="Text"
                  style={{paddingTop: '3px', paddingLeft: '10px', paddingRight: '10px', fontSize: '0.8571em'}}>
                  25 phút
                </div>
                <div
                  className="TouchableOpacity TouchableSimple CommentItem-bubbleFooterButton"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    placeContent: 'center',
                    alignItems: 'center',
                    padding: '3px 10px',
                    borderRadius: '5px',
                    overflow: 'hidden',
                  }}>
                  <div
                    className="Text"
                    style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em', fontWeight: 600, lineHeight: '20px'}}>
                    Thích
                  </div>
                </div>
                <div
                  className="TouchableOpacity TouchableSimple CommentItem-bubbleFooterButton"
                  style={{padding: '3px 10px', borderRadius: '5px', overflow: 'hidden'}}>
                  <div
                    className="Text"
                    style={{fontSize: '0.8571em', lineHeight: '20px', fontWeight: 600, color: 'rgb(112, 112, 112)'}}>
                    Trả lời
                  </div>
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
            <textarea
              className="AutoSizeInput form-control border-0 m-1"
              placeholder="Viết bình luận..."
              autoCapitalize="sentences"
              style={{
                flexGrow: 1,
                flexShrink: 1,
                padding: '0px 10px',
                fontSize: '1em',
                maxHeight: '150px',
                minHeight: '25px',
                resize: 'none',
                background: 'transparent',
                boxSizing: 'border-box',
              }}
              defaultValue={''}
              rows={1}
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
