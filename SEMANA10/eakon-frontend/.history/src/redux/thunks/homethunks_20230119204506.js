import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReadHeroProducts = createAsyncThunk(
    'home/fetchReadHeroProducts',
    async (_, { rejectWithValue }) => {
        try {
            const options = {
                method: 'GET',
                url: `https://eakon.fly.dev/api/productos?filters[posicion][slug][$eq]=cabecera&populate=subcategoria,marca,imagen`
            }; 
        } catch (error) {
            
        }
    }   
);