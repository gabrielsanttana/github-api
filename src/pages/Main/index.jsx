import React, {useState} from 'react';
import {FaGithubAlt, FaSpinner} from 'react-icons/fa';

import api from '../../services/api';

import {Container, Form, SubmitButton, RepoList} from './styles';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    
    setLoading(true);

    const response = await api.get(`${newRepo}`);

    const {data} = response;

    setRepos([...repos, data]);

    setLoading(false);
  }
  
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form 
        onSubmit={event => handleSubmit(event)}
      >
        <input
          type='text'
          placeholder='Adicionar repositório'
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
          autoFocus
          disabled={loading ? true : false}
        />

        <SubmitButton>
          {loading ? <FaSpinner size={14} color='#fff' /> : '+' }
        </SubmitButton>
      </Form>

      <RepoList>
        {repos.map(repo => (
          <li key={repo.id}>
            <span>{repo.full_name}</span>

            <span><a target="_blank" href={`https://github.com/${repo.full_name}`}> Detalhes</a></span>
          </li>
        ))}
      </RepoList>
    </Container>
  );
}
