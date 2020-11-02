import React, { useState } from 'react'
import './Todo.css'
import { makeStyles } from '@material-ui/core/styles'
import { Button , FormControl , Input , InputLabel , List, ListItem, ListItemText, Modal } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit'
import db from './firebase'

const useStyles = makeStyles((theme) => ({
    paper:
    {
        position: 'absolute',
        width: '400',
        top: '35%',
        left: '40%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxshadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },


}));

function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false);
    };

    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1> I am a Modal</h1>
                    <form>
                        <FormControl>
                            <InputLabel>✅ Update Todo </InputLabel>
                            <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                        </FormControl>
                        <Button type="submit" onClick={updateTodo} variant="contained" color="secondary">Update Todo</Button>
                    </form>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰" />
                </ListItem>
                <EditIcon onClick={e => setOpen(true)} />
                <DeleteForeverIcon onClick={event => {db.collection('todos').doc(props.todo.id).delete()}} />
            </List>

        </>
    )   
}

export default Todo
