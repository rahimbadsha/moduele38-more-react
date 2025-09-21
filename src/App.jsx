import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries';


const countriesPromises = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<p>Data loading...</p>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>
    </>
  )
}

export default App
