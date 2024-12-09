
import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { addReviews } from '../api'
import CardR from '../components/CardR'
import '../App.css'


const Reviews =()=> {
    const [name,setName] = useState("")
    const [text,setText] = useState("")
 
    const handleClick = async() => {
        await addReviews(name, text)
        console.log(name, text)
    } 

    const handleOnChange = (event) =>{
        setName(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setText(event.target.value)
    }
 

        return (
            <div className = "fon">
            <CardR/>
                <div style={{margin: '2%'}}>
    
                    <h1>Оставьте отзыв о нас:</h1>
                
                        <Form.Group controlId="formBasicCity">
                        <Form.Label>Ваше имя:</Form.Label>
                        <Form.Control  as="textarea" value={name} onChange={(event)=>handleOnChange(event)}>
                        
                        </Form.Control>
                           

                        </Form.Group>
                       
                        <Form.Group controlId="formBasicDis">
                            <Form.Label>Отзыв:</Form.Label>
                            <Form.Control as="textarea" rows="8" value={text} onChange={(event)=>handleOnChange1(event)} />
                            {/* <Form.Text>Опи</Form.Text> */}
                        </Form.Group>
                       
                        <Button variant="danger" type="submit" onClick={handleClick} >Отправить</Button>

                    
                   
                    </div>
            </div>
        )
    }

export default  Reviews