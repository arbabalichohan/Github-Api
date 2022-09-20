import './App.css';
import MyNav from './components/layout/MyNav';
import Button from 'react-bootstrap/Button';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/views/Home';
import CreateRepo from './components/views/repositories/CreateRepo';
import EditRepo from './components/views/repositories/EditRepo';
import DeleteRepo from './components/views/repositories/DeleteRepo';
import CreateRepoProject from './components/views/repositories/CreateRepoProject';
import ListRepos from './components/views/repositories/ListRepos';
import ListRepoBranches from './components/views/repositories/ListRepoBranches';
import ListRepoCommits from './components/views/repositories/ListRepoCommits';
import ListRepoCollaborators from './components/views/repositories/ListRepoCollaborators';
import ListRepoProjects from './components/views/repositories/ListRepoProjects';
import CreateUserProject from './components/views/projects/CreateUserProject';
import ListUserProjects from './components/views/projects/ListUserProjects';
import Results from './components/views/Results';

function App() {
  const username = "{{USERNAME}}";
  const headers = {
    'Authorization': 'token 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',
    'Accept': 'application/vnd.github.v3+json'
  };

  return (
    <Router>
      <MyNav header={headers}/>
      <div className="container py-5 text-center col mx-5 col-8 mx-auto">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/repository/project/create" element={<CreateRepoProject headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/create" element={<CreateRepo headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/edit" element={<EditRepo headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/delete" element={<DeleteRepo headers={headers} username={username}/>}></Route>
            <Route exact path="/repositories" element={<ListRepos headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/projects" element={<ListRepoProjects headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/branches" element={<ListRepoBranches headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/commits" element={<ListRepoCommits headers={headers} username={username}/>}></Route>
            <Route exact path="/repository/collaborators" element={<ListRepoCollaborators headers={headers} username={username}/>}></Route>
            <Route exact path="/user/project/create" element={<CreateUserProject headers={headers} username={username}/>}></Route>
            <Route exact path="/user/projects" element={<ListUserProjects headers={headers} username={username}/>}></Route>
            <Route exact path="/search-results" element={<Results />}></Route>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
