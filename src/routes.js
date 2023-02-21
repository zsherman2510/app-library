import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './app/App'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <App />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;