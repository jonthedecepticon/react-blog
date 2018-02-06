import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

import '../assets/css/post-show.css';

function getRandomNum() {
  return Math.floor(Math.random() * 253);
}

let image = `https://source.unsplash.com/collection/719/${getRandomNum()}`;

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="">
        <header className="masthead" style={{backgroundImage: "url("+image+")", backgroundSize: "cover", height: "500px"}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-heading">
                  <h1>{post.title}</h1>
                  <h2 className="subheading"></h2>
                  <span className="meta">Posted by
                    <a href="" style={{pointerEvents: "none"}}>&nbsp;Anonymous&nbsp;</a>
                    under <a href="" style={{pointerEvents: "none"}}>{post.categories}</a> category.</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <p className="content-stuff">{post.content}</p>
              </div>
            </div>
            <div className="clearfix">
              <Link className="btn btn-primary float-right" to={'/posts/new'}>
                Create Post &rarr;
              </Link>
              <button
                className="btn btn-danger float-left"
                onClick={this.onDeleteClick.bind(this)}
              >
                Delete Post
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
