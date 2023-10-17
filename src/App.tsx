import React, {useEffect, useState} from 'react';
import './App.css';
import {
    Avatar,
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText, MenuItem, Select, SelectChangeEvent,
    TextField
} from "@mui/material";
import {CATEGORY_BUTTONS_MAPPING, EXACT_COMPANIES_MAPPING} from "./contentScript/constants";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface ExactCompanyMatchStorageItem {
    company: string;
    button: CATEGORY_BUTTONS_MAPPING
}

function App() {
    const [data, setData] = useState<ExactCompanyMatchStorageItem[]>([])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("EFA_EXACT_COMPANY_MATCH")) || [])
        console.log(JSON.stringify(EXACT_COMPANIES_MAPPING))
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("EFA_EXACT_COMPANY_MATCH", JSON.stringify(data))
    // }, [data])

    const onDeleteClick = (companyName: string) => {
        setData(data.filter(entry => entry.company !== companyName))
    }
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [company, setCompany] = React.useState('');

    const handleAddNewEntry = () => {
        setData([
            ...data,
            {
                company,
                button: Number(selectedCategory)
            }])
    }

    return (
        <Grid container>
            <Grid item>
                {data.length &&
                    <List>
                        {data.map((elem: ExactCompanyMatchStorageItem) =>
                            <>
                                <ListItem key={elem.company} secondaryAction={
                                    <IconButton edge="end" aria-label="delete"
                                                onClick={() => onDeleteClick(elem.company)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                }>
                                    <ListItemText primary={elem.company}
                                                  secondary={CATEGORY_BUTTONS_MAPPING[elem.button]}/>
                                </ListItem>
                                <Divider component="li" sx={{marginLeft: "16px"}}/>
                            </>
                        )}
                    </List>}
            </Grid>

            <Grid container sx={{padding: "16px", margin: 2}} spacing={1}>
                <div style={{fontSize: "25px"}}>Adicionar nova empresa</div>

                <Grid item xs={12}>
                    <TextField fullWidth={true} size="small"
                               onChange={(event) => setCompany(event.target.value)}
                               value={company}
                               id="standard-basic" label="NIF - Nome empresa (como no portal)"
                               variant="standard"/>
                </Grid>


                <Grid item xs={12}>
                    <FormControl variant="standard" sx={{minWidth: 100}}>
                        <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={selectedCategory}
                            onChange={(event: SelectChangeEvent) => setSelectedCategory(event.target.value)}
                            label="Categoria"
                            size="small"
                        >
                            {Object.keys(CATEGORY_BUTTONS_MAPPING).filter(e => !isNaN(Number(e))).map(categoryIndex =>
                                <MenuItem
                                    value={Number(categoryIndex)}>{CATEGORY_BUTTONS_MAPPING[Number(categoryIndex)]}</MenuItem>)}

                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button style={{
                        marginTop: "16px"
                    }} variant="outlined" color="success" size="small" endIcon={<AddCircleOutlineIcon/>} onClick={handleAddNewEntry}>
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App;
