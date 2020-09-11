import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import PostItem from './PostItem';

import datademo from '../_data/data.json';

const ListPost = props => {
  const {user} = useSelector(state => state.auth);

  const [loadMore, setLoadMore] = useState(true);

  const [data, setData] = useState(datademo.data.findPostListInTimeline);

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById('list');
    if (props.scrollable) {
      // list has fixed height
      list.addEventListener('scroll', e => {
        const el = e.target;
        if (el.scrollTop + el.clientHeight === el.scrollHeight) {
          setLoadMore(true);
        }
      });
    } else {
      // list has auto height
      window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
          setLoadMore(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    const list = document.getElementById('list');

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props.state]);

  const getData = load => {
    if (load) {
      /*   fetch('https://dog.ceo/api/breeds/image/random/15')
        .then(res => {
          return !res.ok 
          ? res.json().then(e => Promise.reject(e)) 
          : res.json();
        })
        .then(res => {
          props.setState([...props.state, ...res.message]);
        }); */
    }
  };

  return (
    <>
      <div id="list">
        {data.map((item, i) => (
          <PostItem key={i} itemData={item} />
        ))}
      </div>
    </>
  );
};

export default ListPost;
