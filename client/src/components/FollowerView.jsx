import React from 'react';
import axios from 'axios';
import { Typography, CircularProgress } from '@material-ui/core';
import FullWidthTab from './TabPanel.jsx';
class FollowingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null,
      following: null,
    };

    this.getFollowers = this.getFollowers.bind(this);
    this.getFollowing = this.getFollowing.bind(this);
  }

  componentDidMount() {
    this.getFollowers();
    this.getFollowing();
  }

  // Request to server to get a new book suggestion
  getFollowers() {
    return axios.get('/readr/followers')
      .then((followers) => {
        console.log(followers.data);
        this.setState({ followers });
      })
      .catch((error) => console.log(error));
  }

  getFollowing() {
    return axios.get('/readr/following')
      .then((following) => {
        console.log(following.data);
        this.setState({ following });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { followers, following } = this.state;
    return (
      <div>
        {followers || following === null ? (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '40%',
              transform: 'translate(-50%, -40%)',
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div>
            <FullWidthTab />
            {/* <Typography variant="button">Following</Typography>
            {Object.keys(followers).map((follower) => (
              <FollowingUser follower={followers[follower]} />
            ))} */}
          </div>
        )}
      </div>
    );
  }
}

export default FollowingView;
