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

function App() {
  const url = ('https://api.github.com/user/repos');
  const authorization = ('token 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');
  return (
    <Router>
      <MyNav />
      <div className="container py-5 text-center col col-6">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/repository/create" element={<CreateRepo url={url} authorization={authorization}/>}></Route>
            <Route path="/repository/edit" element={<EditRepo authorization={authorization}/>}></Route>
            <Route path="/repository/delete" element={<DeleteRepo authorization={authorization} />}></Route>
            <Route path="/repositories" element={<ListRepos />}></Route>
            <Route path="/repository/project/create" element={<CreateRepoProject authorization={authorization} />}></Route>
            <Route path="/repository/projects" element={<ListRepoProjects />}></Route>
            <Route path="/repository/branches" element={<ListRepoBranches />}></Route>
            <Route path="/repository/commits" element={<ListRepoCommits />}></Route>
            <Route path="/repository/collaborators" element={<ListRepoCollaborators />}></Route>
            <Route path="/user/project" element={<Home />}></Route>
            <Route path="/user/projects" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
