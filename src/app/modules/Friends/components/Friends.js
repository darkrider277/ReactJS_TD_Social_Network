import React, {useEffect, useMemo, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as actions from '../_redux/friendsActions';
import {FriendDeleteDialog} from './FriendDeleteDialog';

const FriendsItem = props => {
  const {data, TuChoiKetBan, DongYKetBan, TroChuyen} = props;
  return (
    <div className="col-xl-4">
      {/*begin::Card*/}
      <div className="card card-custom gutter-b card-stretch">
        {/*begin::Body*/}
        <div className="card-body pt-4 d-flex flex-column justify-content-between">
          {/*begin::Toolbar*/}

          {/*end::Toolbar*/}
          {/*begin::User*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Pic*/}
            <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
              <div className="symbol symbol-lg-75">
                <img alt="Pic" src="/media/users/300_1.jpg" />
              </div>
              <div className="symbol symbol-lg-75 symbol-primary d-none">
                <span className="font-size-h3 font-weight-boldest">{data.username}</span>
              </div>
            </div>
            {/*end::Pic*/}
            {/*begin::Title*/}
            <div className="d-flex flex-column">
              <span className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{data?.fullName ?? ''}</span>
              <span className="text-muted font-weight-bold">{data?.position ?? ''}</span>
            </div>
            {/*end::Title*/}
          </div>
          {/*end::User*/}
          {/*begin::Desc*/}

          {/*end::Desc*/}
          {/*begin::Info*/}
          <div className="mb-7">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark-75 font-weight-bolder mr-2">Email:</span>
              <span className="text-muted text-hover-primary">{data?.email ?? ''}</span>
            </div>
            <div className="d-flex justify-content-between align-items-cente my-1">
              <span className="text-dark-75 font-weight-bolder mr-2">Điện thoại:</span>
              <span className="text-muted text-hover-primary">{data?.phoneNumber ?? ''}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark-75 font-weight-bolder mr-2">Địa chỉ:</span>
              <span className="text-muted font-weight-bold">{data?.address ?? ''}</span>
            </div>
          </div>
          {/*end::Info*/}

          <div className="mt-2">
            <span
              className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
              onClick={() => TroChuyen(data)}>
              Trò chuyện
            </span>
            <span
              className="btn btn-sm btn-success font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
              onClick={() => TuChoiKetBan(data)}>
              Hủy kết bạn
            </span>
            <span
              className="btn btn-sm btn-success font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
              onClick={() => DongYKetBan(data)}>
              Đồng ý kết bạn
            </span>
          </div>
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Card*/}
    </div>
  );
};

const Friends = props => {
  const type = props?.type ?? '';

  const [show, setShow] = useState(false);

  const [idContact, setIdContact] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {currentState} = useSelector(state => ({currentState: state.friends}), shallowEqual);

  const {entities} = currentState;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchFriends(type));
  }, [dispatch, type]);

  const DongYKetBan = dataItem => {
    console.log('chapnhanketban');
    console.log(dataItem);
  };

  const TroChuyen = dataItem => {
    console.log('tro chuyen');
    console.log(dataItem);
  };

  const HuyKetBan = () => {
    dispatch(actions.huyKetBan(idContact)).then(() => {
      dispatch(actions.fetchFriends(type));
    });
  };

  const TuChoiKetBan = dataItem => {
    console.log(dataItem);
    if (dataItem.datacontact && dataItem.datacontact.id) {
      setIdContact(dataItem.datacontact.id);
    }
    handleShow();
  };

  return (
    <>
      <div className="card card-custom gutter-b">
        <div className="card-body">
          <div className="flex-row-lg-fluid">
            <div className="row">
              {entities &&
                entities.map((item, index) => (
                  <FriendsItem
                    data={item}
                    key={`friend_${index}`}
                    DongYKetBan={DongYKetBan}
                    TuChoiKetBan={TuChoiKetBan}
                    TroChuyen={TroChuyen}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <FriendDeleteDialog show={show} handleClose={handleClose} HuyKetBan={HuyKetBan} />
    </>
  );
};

export default Friends;
