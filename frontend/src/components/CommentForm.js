import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'
import uuid from 'uuid'

class CommentForm extends Component {

    render() {
        return (
            <div>
                <Formik

                    validationSchema={Yup.object().shape({
                        body: Yup.string()
                            .min(5, 'Comment details must be at least 5 characters long.')
                            .required('Comment details is required.'),
                        author: Yup.string()
                            .min(5, 'Author must be at least 5 characters long.')
                            .required('Author is required.'),
                    })}

                    initialValues={{
                        id: this.props.id || uuid.v1(),
                        timestamp: Date.now(),
                        body: this.props.body || '',
                        author: this.props.author || '',
                        parentId: this.props.parentId
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        this.props.closeForm()
                        if (this.props.id) {
                            this.props.saveComment(this.props.id, values)
                        } else {
                            this.props.saveComment(values)
                        }
                    }}


                    render={({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting }) => (
                            <Form className="comment-form">
                                <div>
                                    {touched.body && errors.body && <div className="form-error">{errors.body}</div>}
                                    <Field type="text" name="body" placeholder="Enter comments" />
                                </div>

                                <div>
                                    {touched.author && errors.author && <div className="form-error">{errors.author}</div>}
                                    <Field type="text" name="author" placeholder="Enter author" />
                                </div>

                                <button type="submit" disabled={isSubmitting}>Submit</button>

                            </Form>
                        )}
                />
            </div>
        )
    }
}




export default CommentForm

