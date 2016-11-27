import React from 'react'
import ContactForm from './Form';

function handleSubmit(values) {
  console.log("Submitted form!", values);
}

export const Blog = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Blog Entries</h2>
    {
      props.blog.blogPosts.map((post) => {
        return (
          <p>{post.content}</p>
          )
      })
    }
    <ContactForm
      onSubmit={handleSubmit} />
  </div>
)

Blog.propTypes = {
  blog          : React.PropTypes.Object,
  addBlogPost   : React.PropTypes.func.isRequired
}

Blog.defaultProps =  ({
    blog: {
      blogPosts: []
    }
  })


export default Blog