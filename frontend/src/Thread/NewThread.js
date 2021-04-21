import {useState} from 'react'
import {useForm} from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';


import "./Thread.scss";

const axios = require("axios")

const AlertForm = ({error}) => {
    var errorMessage = error.ref.name == "title" ? "You must provide a title for your post": "Your post must have some content"
    
    return (
        <Alert show={true} variant="danger" className="newpost-alert">
            <Alert.Heading>{errorMessage}</Alert.Heading>
        </Alert>
        )

}

export function NewThread({user}){
    const {register, handleSubmit, formState: {errors}} = useForm()
    const submitFunction = (data) => {
        const title= data.title
        const post = data.post
        const currentUser = user
        axios.post('http://localhost:4001/posts/api/newpost', {
            title: title,
            post: post,
            user: currentUser
          })
          .then(function (response) {
            console.log(response);
          })
    }

    return (
    <div >
        {errors.title && <AlertForm  error={errors.title} />}
        {errors.post && <AlertForm error={errors.post} />}

        <Form className="newpost-padding" onSubmit={handleSubmit(submitFunction)}>
            <Form.Group>
                <Form.Label>Post Title</Form.Label>
                <Form.Control {...register("title", {required: true})} name="title" className="newpost-input" type="text" placeholder="Post Title"></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Post Content</Form.Label>
                <Form.Control {...register("post", {required: true})} name="post" className="newpost-input" as="textarea" placeholder="Write post here..."></Form.Control>
            </Form.Group>

            <Form.Group>
                <Button className="newpost-input" type="submit">Submit</Button>
            </Form.Group>
        </Form>
    </div>
    )
}