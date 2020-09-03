/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React from 'react';
import {useSelector} from 'react-redux';
import {toAbsoluteUrl, toAbsoluteAvatarUrl} from '../../../../_helpers';
import {FormattedMessage, injectIntl} from 'react-intl';

import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Typography} from '@material-ui/core';

const ListFriend = props => {
  const {data} = props;

  return (
    <>
      {data.map((item, index) => (
        <div className="d-flex align-items-center justify-content-between mb-5" key={index}>
          <div className="d-flex align-items-center">
            <div className="symbol symbol-circle symbol-40 mr-3">
              <img alt="Pic" src={toAbsoluteUrl('/media/users/300_18.jpg')} />

              <i className="symbol-badge bg-success" />
            </div>
            <div className="d-flex flex-column">
              <a href="#" className="text-dark-75 text-hover-primary font-size-lg">
                {item.fullName}
              </a>
              <span className="text-muted font-size-sm">{item.possition}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function QuickChat() {
  const {user} = useSelector(state => state.auth);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const friends = [
    {
      id: 1,
      username: 'demo1',
      fullName: 'Nguyễn Văn A',
      possition: 'Chuyên Viên',
    },
    {
      id: 2,
      username: 'demo2',
      fullName: 'Trần Minh Anh',
      possition: 'Chuyên Viên',
    },
  ];

  return (
    <div id="kt_quick_chat" className="offcanvas offcanvas-right offcanvas p-10">
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 className="font-weight-bold m-0">
          <FormattedMessage id="CHAT.MENU.MENU" />
          {/* <small className="text-muted font-size-sm ml-2">12 messages</small> */}
        </h3>
        <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_chat_close">
          <i className="ki ki-close icon-xs text-muted" />
        </a>
      </div>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto">
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>

      {value === 0 && (
        <TabContainer>
          <div className="offcanvas-content pr-5 mr-n5">
            <div className="navi navi-spacer-x-0 p-0">
              <ListFriend data={friends} />
            </div>
          </div>
        </TabContainer>
      )}
      {value === 1 && <TabContainer>Item Two</TabContainer>}

      <div className="offcanvas-content pr-5 mr-n5">
        <div className="navi navi-spacer-x-0 p-0">
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-40 mr-3">
                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_18.jpg')} />

                <i className="symbol-badge bg-success" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-size-lg">
                  Nguyễn Minh Anh
                </a>
                <span className="text-muted font-size-sm">Chuyên viên</span>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-40 mr-3">
                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_18.jpg')} />
                <i className="symbol-badge bg-success" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-size-lg">
                  Nguyễn Minh Anh
                </a>
                <span className="text-muted font-size-sm">Chuyên viên</span>
              </div>
            </div>
          </div>
        </div>

        <div className="separator separator-dashed my-7"></div>
      </div>
    </div>
  );
}
