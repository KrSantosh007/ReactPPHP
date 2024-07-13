import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import { createContext } from 'react'
const MyContext = createContext();

function App() {
    return (
        <>
            <BrowserRouter>
                <MyContext.Provider>
                    <section className='main flex'>
                        <div className='sidebarWrapper w-[15%]'>
                            <Sidebar/>
                        </div>
                        <div className='contentRight w-[85%] px-3'>
                            <Routes>
                                <Route path='/' exact={true}  element={ <Dashboard />}/>
                            </Routes>
                        </div>
                    </section>
                </MyContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App
