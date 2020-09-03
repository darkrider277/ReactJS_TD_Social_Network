/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import {toAbsoluteUrl} from '../../../_helpers';

export function StickyToolbar() {
  return (
    <>
      <ul className="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
        <OverlayTrigger placement="left" overlay={<Tooltip id="layout-tooltip">Layout Builder</Tooltip>}>
          <li className="nav-item mb-2" data-placement="left">
            <Link to="/builder" className="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary">
              <i className="flaticon2-gear"></i>
            </Link>
          </li>
        </OverlayTrigger>

        <OverlayTrigger placement="left" overlay={<Tooltip id="chat-tooltip">Quick panel</Tooltip>}>
          <li className="nav-item mb-2" data-placement="left">
            <div className="btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning" id="kt_quick_chat_toggle">
              <span className="svg-icon svg-icon-xl">
                <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group-chat.svg')} />
              </span>
            </div>
          </li>
        </OverlayTrigger>
      </ul>
    </>
  );
}
