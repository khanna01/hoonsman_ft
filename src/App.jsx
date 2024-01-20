import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/createSection/headerSection/Header'
import Main from './components/mainSection/Main'
import Create from './components/createSection/Create'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
