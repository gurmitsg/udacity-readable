import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'

class PostForm extends Component {
    render() {
        return (
            <div className="post post-form">
                <Formik

                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .min(10, 'Email must be at least 10 characters long.')
                            .required('Email is required.'),
                        password: Yup.string().required('Password is required.')
                    })}

                    initialValues={{
                        title: 'asdf',
                        releaseYear: '',
                        genre: '',
                        price: '12',
                        email: this.props.email || '',
                        password: ''

                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        // this could also easily use props or other
                        // local state to alter the behavior if needed
                        // this.props.sendValuesToServer(values)

                        

                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                            this.props.closeForm()    
                        }, 1000)
                    }}

                    render={({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting }) => (
                            <Form>
                                <div>
                                    {touched.email && errors.email && <p>{errors.email}</p>}
                                    <Field type="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    {touched.password && errors.password && <p>{errors.password}</p>}
                                    <Field type="password" name="password" placeholder="Password" />
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

