import React from 'react'
import ContactForm from './Form';

function handleSubmit(values) {
  props.
  console.log("Submitted form!", values);
}

export const Blog = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Blog Entries</h2>
    <table>
      <tbody>
        {
          props.blog.blogPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.email}</td>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
              </tr>
              )
          })
        }
      </tbody>
    </table>
    <ContactForm
      onSubmit={props.addBlogPost} />
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