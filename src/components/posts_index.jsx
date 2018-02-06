import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <div className="">
          <div className="post-preview">
            <a href="">
              <h2 className="post-title">
                {post.title}
              </h2>
              <h3 className="post-subtitle">
                {post.content}
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href=""> Anonymous </a>
              on September 24, 2018 in <a href=""> {post.categories} </a> category</p>
          </div>
          <hr />
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {this.renderPosts()}
          </div>
        </div>
        <div class="clearfix">
          <Link className="btn btn-primary float-right" to={'/posts/new'}>
            Create Post &rarr;
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
