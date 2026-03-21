import { Suspense } from 'react';
import './App.css'
import Countries from './compornets/countries/countries'

// const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
// .then((res)=> res.json());

 const countriesPromises = async()=> {

  const res = await fetch("https://openapi.programming-hero.com/api/all");
return res.json();
  
 }

function App() {

  const countriesPromise = countriesPromises();

  return (
    <>
       <Suspense fallback={<h1>im going to loading</h1>}>
         <Countries countriesPromise={countriesPromise}></Countries>
       </Suspense>
    </>
  )
}

export default App
