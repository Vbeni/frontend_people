import React from 'react'

import { Routes, Route } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
