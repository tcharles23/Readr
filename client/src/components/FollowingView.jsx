import React from 'react';
import axios from 'axios';
import {
 Typography, Paper, Tab, Tabs, CircularProgress 
} from '@material-ui/core';
import FullWidthTabs from './TabPanel.jsx';
import FollowingUser from './BookListItem.jsx';

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

  handleFollowClick(followerID) {
    return axios.post(`/readr/follow/${followerID}`)
      .then(() => this.getFollowers())
      .catch((error) => console.log(error));
  }

  handleUnfollowClick(followerID) {
    return axios.post(`/readr/unfollow/${followerID}`)
      .then(() => this.getFollowing())
      .catch((error) => console.log(error));
  }

  render() {
    const { followers, following } = this.state;
    return (
      <div>
        <div>
          <Paper>
            <FullWidthTabs followers={followers} following={following} />
          </Paper>
        </div>
      </div>
    );
  }
}

export default FollowingView;
