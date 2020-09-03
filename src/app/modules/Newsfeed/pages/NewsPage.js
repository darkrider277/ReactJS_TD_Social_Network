/* eslint-disable no-restricted-imports */
import React from 'react';
import {BottomNavigation, BottomNavigationAction, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {KTCodeExample} from '../../../../_metronic/_partials/controls';

import NewPost from '../components/NewPost';

// Example 1
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

// Example 2
const useStyles2 = makeStyles({
  root: {
    width: 500,
  },
});

export default function NewsPage() {
  // Example 1
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // Example 2
  const classes2 = useStyles2();
  const [value2, setValue2] = React.useState('recents');

  function handleChange2(event, newValue) {
    setValue2(newValue);
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <NewPost />
        </div>
        <div className="col-lg-4">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Bottom Navigation with no label">
            <span>If there are four or five actions, display inactive views as icons only.</span>
            <div className="separator separator-dashed my-7"></div>
            <BottomNavigation value={value2} onChange={handleChange2} className={classes2.root}>
              <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
              <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
            </BottomNavigation>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
    </BottomNavigation>
  );
}
`;
