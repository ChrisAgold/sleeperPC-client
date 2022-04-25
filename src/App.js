import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Register,Landing,Error,ProtectedRoute} from './pages'
import GlobalStyle from './globalStyles';
import {
    AllPosts,
    AddPost,
    Profile,
    SharedLayout,
    Stats,
} from './pages/dashboard'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <SharedLayout/>
                    </ProtectedRoute>
                }
                >
                    <Route path="stats" element={<Stats/>}/>
                    <Route path="all-posts" element={<AllPosts/>}/>
                    <Route path="add-post" element={<AddPost/>}/>
                    <Route path="profile" element={<Profile/>}/>

                </Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
