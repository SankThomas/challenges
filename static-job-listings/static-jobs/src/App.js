import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import { data } from './data'
import Jobs from './components/Jobs'

function App() {
  const [jobs, setJobs] = useState(data)

  return (
    <div>
      <Header />
      <Jobs jobs={jobs} />
    </div>
  )
}

export default App
