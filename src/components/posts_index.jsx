import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div className="" key={post.id}>
          <div className="">
            <Link to={`/posts/${post.id}`}>
              <h2 className="post-title">
                {post.title}
              </h2>
              <h3 className="post-subtitle truncate">
                {post.content}
              </h3>
            </Link>
            <p className="post-meta">Posted by
              <a href="" style={{pointerEvents: "none"}}>&nbsp;Anonymous&nbsp;</a>
              under <a href="" style={{pointerEvents: "none"}}>{post.categories}</a> category.</p>
          </div>
          <hr/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="post-preview" style={{width: "100%"}}>
            {this.renderPosts()}
          </div>
        </div>
        <div className="clearfix">
          <Link className="btn btn-primary float-right" to={'/posts/new'}>
            Create Post &rarr;
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
