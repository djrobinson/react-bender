import React from 'react'
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import BigCalendar from 'react-big-calendar';
import Moment from 'moment';
import events from '../events';

function handleSubmit(values) {
  props.addBlogPost(values);
  console.log("Submitted form!", values);
}

function deletePost(id){
  console.log("Delete: ", id);
  props.deleteBlogPost(id);
}

function editBlogPost(id){
  console.log("Edit blog post");
}

BigCalendar.momentLocalizer(Moment);

export const Blog = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Blog Entries</h2>
        {
          props.blog.blogPosts.map((post) => {
            if (post.isEditable) {
              return (
                <div className="table-row" key={post.id}>
                  <EditForm
                    key={post.id}
                    form={`EditForm_${post.id.toString()}`}
                    onSubmit={props.updateBlogPost}
                    initialValues={{
                      id: post.id,
                      firstName: post.firstName,
                      lastName: post.lastName,
                      selectedDate: post.date,
                      endDate: post.endDate
                    }}/>
                </div>
              )
            } else {
              return (
              <div className="table-row" key={post.id}>
                <div className="table-cell">{post.firstName}</div>
                <div className="table-cell">{post.lastName}</div>
                <div className="table-cell">{post.date.toString()}</div>
                <div className="table-cell">
                  <button onClick={() => {
                    props.deleteBlogPost(post.id)
                  }}>Delete</button>
                  <button onClick={() => {
                    props.editBlogPost(post.id)
                  }}>Edit</button>
                </div>
              </div>
              )
            }
          })
        }

    <CreateForm
      changeHandler={props.changeDate}
      selected={props.blog.selectedDate}
      onSubmit={props.addBlogPost}/>
    <div className="cal-container">
      <BigCalendar
        timeslots={30}
        events={props.eventsList}
      />
    </div>
  </div>

)

Blog.propTypes = {
  blog           : React.PropTypes.object,
  addBlogPost    : React.PropTypes.func.isRequired,
  deleteBlogPost : React.PropTypes.func.isRequired,
  editBlogPost   : React.PropTypes.func.isRequired,
  updateBlogPost : React.PropTypes.func.isRequired,
  changeDate     : React.PropTypes.func.isRequired
}


Blog.defaultProps =  ({
  blog: {
    blogPosts: []
  },
  eventsList: events
})


export default Blog