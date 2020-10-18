import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        marginBottom: 15,
        borderRadius: 30,
        color: 'white',
        fontSize: 32,
        padding: '5px 30px',
    },
})

function CustomStyledButton() {
    const classes = useStyles()
    return <Button className={classes.root}>Custom Styled Button</Button>
}

function CheckboxExample() {
    const [checked, setChecked] = React.useState(false)
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    icon={<DeleteIcon />}
                    checkedIcon={<SaveIcon />}
                    color='secondary'
                    inputProps={{
                        'aria-label': 'secondary checkbox',
                    }}
                />
            }
            label='Testing Checkbox'
        />
    )
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h3>Textfields</h3>
                <TextField
                    variant='filled'
                    color='secondary'
                    type='time'
                    label='The time'
                />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='email'
                    label='Type your email'
                    placeholder='test@test.com'
                />
                <h3>Cutom Checkbox</h3>
                <CheckboxExample />
                <h3>Button Styles</h3>
                <CustomStyledButton />
                <ButtonGroup>
                    <Button
                        startIcon={
                            <SaveIcon
                                style={{
                                    fontSize: 32,
                                }}
                            />
                        }
                        variant='contained'
                        color='primary'
                        size='large'
                        style={{
                            fontSize: 32,
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        startIcon={
                            <DeleteIcon
                                style={{
                                    fontSize: 32,
                                }}
                            />
                        }
                        variant='contained'
                        color='secondary'
                        size='large'
                        style={{
                            fontSize: 32,
                        }}
                    >
                        Discard
                    </Button>
                </ButtonGroup>
                <img src={logo} className='App-logo' alt='logo' />
            </header>
        </div>
    )
}

export default App
