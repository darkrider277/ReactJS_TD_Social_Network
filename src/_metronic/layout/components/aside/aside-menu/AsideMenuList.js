/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import {useLocation} from 'react-router';
import {NavLink} from 'react-router-dom';
import SVG from 'react-inlinesvg';
import {FormattedMessage, injectIntl} from 'react-intl';

import {toAbsoluteUrl, checkIsActive} from '../../../../_helpers';

function AsideMenuList({layoutProps}) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url) ? ` ${!hasSubmenu && 'menu-item-active'} menu-item-open ` : '';
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*
        <li className={`menu-item ${getMenuItemActive('/dashboard', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Layout/Layout-top-panel-2.svg')} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
       */}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/newsfeed', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/newsfeed">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Layout/Layout-top-panel-2.svg')} />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.NEWSFEED" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/profile', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/profile">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')} />
            </span>
            <span className="menu-text"><FormattedMessage id="MENU.PROFILE" /></span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/friends', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/friends">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')} />
            </span>
            <span className="menu-text"><FormattedMessage id="MENU.FRIENDS" /></span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/groups', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/groups">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')} />
            </span>
            <span className="menu-text"><FormattedMessage id="MENU.GROUPS" /></span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/chat', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/chat">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group-chat.svg')} />
            </span>
            <span className="menu-text"><FormattedMessage id="MENU.CHAT" /></span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

         {/*begin::1 Level*/}
         <li className={`menu-item ${getMenuItemActive('/events', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/events">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group-chat.svg')} />
            </span>
            <span className="menu-text"><FormattedMessage id="MENU.EVENTS" /></span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Custom */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Custom</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Error Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive('/error', true)}`}
          aria-haspopup="true"
          data-menu-toggle="hover">
          <NavLink className="menu-link menu-toggle" to="/error">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Code/Error-circle.svg')} />
            </span>
            <span className="menu-text">Error Pages</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Error Pages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li className={`menu-item ${getMenuItemActive('/error/error-v1')}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/error/error-v1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 1</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li className={`menu-item ${getMenuItemActive('/error/error-v2')}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/error/error-v2">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page -2</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* eCommerce */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive('/e-commerce', true)}`}
          aria-haspopup="true"
          data-menu-toggle="hover">
          <NavLink className="menu-link menu-toggle" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Shopping/Bag2.svg')} />
            </span>
            <span className="menu-text">eCommerce</span>
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">eCommerce</span>
                </span>
              </li>
              {/*begin::2 Level*/}
              <li className={`menu-item ${getMenuItemActive('/e-commerce/customers')}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/e-commerce/customers">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Customers</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li className={`menu-item ${getMenuItemActive('/e-commerce/products')}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/e-commerce/products">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Products</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}

export default injectIntl(AsideMenuList);
