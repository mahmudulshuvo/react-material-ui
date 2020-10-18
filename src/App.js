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
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles'
import { green, orange, blue, pink } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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

const theme = createMuiTheme({
    typography: {
        h4: {
            margin: 15,
        },
    },
    palette: {
        primary: {
            main: blue[400],
        },
        secondary: {
            main: pink[400],
        },
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
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg'>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' style={{ flexGrow: 1 }}>
                            MUI Themeing
                        </Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
                <div className='App'>
                    <header className='App-header'>
                        <Typography variant='h2' component='div'>
                            Welcome to MUI
                        </Typography>
                        <Typography variant='h4'>Textfields</Typography>
                        <Grid container spacing={4} justify='center'>
                            <Grid item>
                                <TextField
                                    variant='filled'
                                    color='secondary'
                                    type='time'
                                    label='The time'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant='filled'
                                    color='secondary'
                                    type='email'
                                    label='Type your email'
                                    placeholder='test@test.com'
                                />
                            </Grid>
                        </Grid>
                        <Typography variant='h4'>Cutom Checkbox</Typography>
                        <CheckboxExample />
                        <Typography variant='h4'>Responsive Grid</Typography>
                        <Grid
                            container
                            spacing={2}
                            justify='center'
                            style={{
                                padding: 10,
                            }}
                        >
                            <Grid item xs={4} sm={4} md={6} lg={12}>
                                <Paper
                                    style={{ width: '100%', height: 100 }}
                                ></Paper>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} lg={12}>
                                <Paper
                                    style={{ width: '100%', height: 100 }}
                                ></Paper>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} lg={12}>
                                <Paper
                                    style={{ width: '100%', height: 100 }}
                                ></Paper>
                            </Grid>
                        </Grid>

                        <Typography variant='h4'>Button Styles</Typography>
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
            </Container>
        </ThemeProvider>
    )
}

export default App
