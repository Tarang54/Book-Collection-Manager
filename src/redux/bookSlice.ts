import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = { books: [] };

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) state.books[index] = action.payload;
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((b) => b.id !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
