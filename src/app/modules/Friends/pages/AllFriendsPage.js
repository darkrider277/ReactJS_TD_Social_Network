/* eslint-disable no-restricted-imports */
import React from 'react';
import {Tabs, Tab, Row, Col, Nav} from 'react-bootstrap';
import Friends from '../components/Friends';

export default function NewsPage() {
  return (
    <div className="card card-custom overflow-hidden position-relative mb-8">
      <div className="position-relative px-20">
        <Tab.Container id="left-tabs-example" defaultActiveKey="friends">
          <Nav className="nav nav-tabs nav-tabs-line">
            <Nav.Item className="nav-item mr-14 mt-4">
              <Nav.Link eventKey="friends" className=" nav-link font-size-h5 font-weight-bold border-2 pb-6 mx-0">
                Bạn bè
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item mr-14 mt-4">
              <Nav.Link eventKey="pending" className=" nav-link font-size-h5 font-weight-bold border-2 pb-6 mx-0">
                Danh sách kết bạn
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item mr-14 mt-4">
              <Nav.Link eventKey="request" className=" nav-link font-size-h5 font-weight-bold border-2 pb-6 mx-0">
                Danh sách chờ kết bạn
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="friends">
              <Friends />
            </Tab.Pane>
            <Tab.Pane eventKey="pending">
              <Friends />
            </Tab.Pane>
            <Tab.Pane eventKey="request">
              <Friends />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}
