import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {toAbsoluteUrl, toAbsoluteAvatarUrl} from '../../../../_metronic/_helpers';
import SVG from 'react-inlinesvg';
import {FormattedMessage, injectIntl} from 'react-intl';

const NewPost = props => {
  const {user} = useSelector(state => state.auth);

  return (
    <div className="card gutter-b feed-item">
      <div className="card-body p-4">
        {/*begin::Top*/}
        <div className="d-flex align-items-center">
          <div className="symbol symbol-40 symbol-light-success mr-5">
            <div className="symbol-label" style={{backgroundImage: `url(${toAbsoluteAvatarUrl(user.avatarUrl)})`}} />
          </div>
          <input placeholder={`${user.fullName} ơi, bạn đang nghĩ gì thế?`} type="text" className="form-control border-0 p-0" />
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <div className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Image.svg')} />
            </span>
            <FormattedMessage id="NEWSFEED.MENU.PHOTO_VIDEO" />
          </div>
          {/*<div className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Add-user.svg')} />
            </span>
            <FormattedMessage id="NEWSFEED.MENU.TAG_FRIEND" />
          </div>
          <div className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl('/media/svg/icons/General/Smile.svg')} />
            </span>
            <FormattedMessage id="NEWSFEED.MENU.FEELING_ACTIVITY" />
  </div> */}
          <div className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')} />
            </span>
            <FormattedMessage id="NEWSFEED.MENU.GROUP" />
          </div>
        </div>
        {/*end::Top*/}
        {/*begin::Form*/}
        {/*end::Form*/}
      </div>
    </div>
  );
};

NewPost.propTypes = {};

export default NewPost;
