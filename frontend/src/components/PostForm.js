import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'
import uuid from 'uuid'

class PostForm extends Component {

    render() {
        return (
            <div className="post post-form">
                <Formik

                    validationSchema={Yup.object().shape({
                        title: Yup.string()
                            .min(5, 'Title must be at least 5 characters long.')
                            .required('Title is required.'),
                        body: Yup.string()
                            .min(5, 'Post details must be at least 5 characters long.')
                            .required('Post details is required.'),
                        author: Yup.string()
                            .min(5, 'Author must be at least 5 characters long.')
                            .required('Author is required.'),
                    })}

                    initialValues={{
                        id: this.props.postId || uuid.v1(),
                        timestamp: Date.now(),
                        title: this.props.title || '',
                        body: this.props.body || '',
                        author: this.props.author || '',
                        category: this.props.category || '',
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        /*
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                            this.props.closeForm()    
                        }, 1000)
                        */
                        this.props.closeForm()
                        if (this.props.postId) {
                            this.props.savePost(this.props.postId, values)
                        } else {
                            this.props.savePost(values)
                        }
                    }}

                    render={({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting }) => (
                            <Form className="post-form">
                                <div>

                                    {touched.title && errors.title && <div className="form-error">{errors.title}</div>}

                                    <Field type="text" name="title" placeholder="Title" />
                                </div>
                                <div>
                                    {touched.body && errors.body && <div className="form-error">{errors.body}</div>}
                                    <Field type="text" name="body" placeholder="Enter post details" />
                                </div>

                                <div>
                                    {touched.author && errors.author && <div className="form-error">{errors.author}</div>}
                                    <Field type="text" name="author" placeholder="Enter author" />
                                </div>

                                <div>
                                    <label>
                                        Category
                                        <Field component="select" name="category">
                                            {Object.keys(this.props.categories).map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </Field>
                                    </label>
                                </div>
                                <button type="submit" disabled={isSubmitting}>Submit</button>

                            </Form>
                        )}
                />
            </div>
        )
    }
}




export default PostForm

