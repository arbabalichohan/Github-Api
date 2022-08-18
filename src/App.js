import './App.css';
import MyNav from './components/layout/MyNav';
import Button from 'react-bootstrap/Button';

import {
  Link,
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
  const url = ('https://api.github.com/user/repos');
  const authorization = ('token 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');
  const username = {{USERNAME}};
  return (
    <Router>
      <MyNav />
      <div className="container py-5 text-center col col-6">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/repository/create" element={<CreateRepo url={url} authorization={authorization}/>}></Route>
            <Route exact path="/repository/edit" element={<EditRepo authorization={authorization}/>}></Route>
            <Route exact path="/repository/delete" element={<DeleteRepo authorization={authorization} />}></Route>
            <Route exact path="/repositories" element={<ListRepos />}></Route>
            <Route exact path="/repository/project/create" element={<CreateRepoProject authorization={authorization} />}></Route>
            <Route exact path="/repository/projects" element={<ListRepoProjects />}></Route>
            <Route exact path="/repository/branches" element={<ListRepoBranches authorization={authorization}/>}></Route>
            <Route exact path="/repository/commits" element={<ListRepoCommits />}></Route>
            <Route exact path="/repository/collaborators" element={<ListRepoCollaborators authorization={authorization}/>}></Route>
            <Route exact path="/user/project/create" element={<CreateUserProject authorization={authorization} />}></Route>
            <Route exact path="/user/projects" element={<ListUserProjects authorization={authorization}/>}></Route>
            <Route exact path="/search-results" element={<Results />}></Route>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
