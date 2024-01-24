import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/headerSection/Header'
import Main from './components/mainSection/Main'
import Create from './components/createSection/Create'
import Letter from './components/Letter'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/create" element={<Create />} />
                <Route path="/letter/:letterid" element={<Letter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
