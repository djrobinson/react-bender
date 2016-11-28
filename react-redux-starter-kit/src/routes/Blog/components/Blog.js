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
            if (post.isEditable) {
              return (
                <tr>
                  <td>
                  Editable Post: {post.id}
                  </td>
                </tr>
                )

            } else {
              return (
              <tr key={post.id}>
                <td>{post.email}</td>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>
                  <button onClick={() => {
                    props.deleteBlogPost(post.id)
                  }}>Delete</button>
                  <button onClick={() => {
                    props.editBlogPost(post.id)
                  }}>Edit</button>
                </td>
              </tr>
              )
            }

          })
        }
      </tbody>
    </table>
    <ContactForm
      onSubmit={props.addBlogPost}
      initialValues={{
        firstName: "tester",
        lastName: "testLast",
        email: "test@email"
      }}/>
  </div>
)

Blog.propTypes = {
  blog           : React.PropTypes.Object,
  addBlogPost    : React.PropTypes.func.isRequired,
  deleteBlogPost : React.PropTypes.func.isRequired,
  editBlogPost   : React.PropTypes.func.isRequired
}

Blog.defaultProps =  ({
    blog: {
      blogPosts: []
    }
  })


export default Blog