/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React from 'react';
import {useSelector} from 'react-redux';
import {toAbsoluteUrl, toAbsoluteAvatarUrl} from '../../../../_helpers';
import {FormattedMessage, injectIntl} from 'react-intl';
import 'antd/dist/antd.css';

import {Tabs} from 'antd';

const {TabPane} = Tabs;

function callback(key) {
  console.log(key);
}

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

export function QuickChat() {
  const {user} = useSelector(state => state.auth);

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
      <div className="offcanvas-content pr-5 mr-n5">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Bạn bè" key="1">
            <div className="navi navi-spacer-x-0 p-0">
              <ListFriend data={friends} />
            </div>
          </TabPane>
          <TabPane tab="Nhóm" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>

        <div className="separator separator-dashed my-7"></div>
      </div>
    </div>
  );
}
