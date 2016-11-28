import React from 'react'
import ContactForm from './Form';

function handleSubmit(values) {
  props.addBlogPost(values);
  console.log("Submitted form!", values);
}

function deletePost(id){
  console.log("Delete: ", id);
  props.deleteBlogPost(id);
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
                <td><button onClick={() => {
                  props.deleteBlogPost(post.id)
                }}>Delete</button></td>
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
  addBlogPost   : React.PropTypes.func.isRequired,
  deleteBlogPost : React.PropTypes.func.isRequired
}

Blog.defaultProps =  ({
    blog: {
      blogPosts: []
    }
  })


export default Blog