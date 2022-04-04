import { useEffect, useState } from "react"

export const ReviewHook=()=>{
    const[books, setBooks] =useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res=>res.json())
        .then(data=> setBooks(data))
    },[])

    return [books, setBooks];
}