import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    render() {
        return(
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title with at least 3 characters!";
    }
    if(!values.tags){
        errors.tags = "Enter atleast one tag!";
    }
    if(!values.content || values.content.length < 10){
        errors.content = "Enter some content, min 10 characters!";
    }

    // If errors is empty, the form is fine to submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);