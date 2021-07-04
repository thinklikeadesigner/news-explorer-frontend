import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { CardsList } from '../CardsList/CardsList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as api from '../../utils/NewsApi';
import * as auth from '../../utils/auth';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import { NothingFound } from '../NothingFound/NothingFound';
import { Preloader } from '../Preloader/Preloader';
import { NewRegister } from '../Popup/NewRegister/NewRegister';
import { Popup } from '../Popup/Popup';
import { NewLogin } from '../Popup/NewLogin/NewLogin';
import { Main } from '../Main/Main';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import {ProtectedRoute} from '../../components/HOC/ProtectedRoute';
import './App.css';

function App() {
  const history = useHistory();
  const jwt = localStorage.getItem('token');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(false);
  
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const [currentUser, setCurrentUser] = useState({});
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const [message, setMessage] = useState('');
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSavedNewsPage, setIsSavedNewsPage] = useState(false);
  
  console.log('jwt', jwt);
  function handleSavedNewsClick() {
    setIsSavedNewsPage(true);
    setCards([]);
    setResults(false);
    setNoSearch(true);
  }

  function handleHomeClick() {
    setIsSavedNewsPage(false);
  }

  function handleNavOpen(e) {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  }



  function handleSignInClick() {
    setIsPopupOpen(true);
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
    
  }

  function handleSwitchToRegister(e) {
    e.preventDefault();
    setIsPopupOpen(true);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  }
  function handleSwitchToLogin(e) {
    e.preventDefault();
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
    setIsPopupOpen(true);
  }

  //NOTE card functions

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  //NOTE sign up log in functions

  const handleLoginSubmit = ({ email, password }) => {
    setCards([]);
    setNoSearch(true);
    setResults(false);
    console.log(isSuccess);
    if (!email || !password) {
      setMessage('400 - one or more of the fields were not provided');
      setSuccess(false);
      handleInfoToolTip();
      console.log('no email or password');
    }
    auth
      .authorize(email, password)
      .then((user) => {
        setLoggedIn(true);
        
        setCurrentUser(user);
        console.log('user', user);
      })
      // .then(resetForm)
      .then(() => {
        history.push('/');
        closeAllPopups();
      })
      .catch(() => {
        setSuccess(false);
        setMessage('Oops, something went wrong! Please try again.');
        handleInfoToolTip();
      });
  };

  const handleRegisterSubmit = ({ email, password, name }) => {
    if (!password || !email || !name) {
      console.log('no email or password');
      console.log(email);
      return;
    }
    auth
      .register(email, password, name)
      .then((res) => {
        setSuccess(true);
        setMessage('Success! You have now been registered.');
        handleInfoToolTip();

        return res;
      })
      // .then(resetForm)
      .then(history.push('/login'))
      .catch((res) => {
        if (res.status === 400) {
          setMessage('One of the fields was filled in incorrectly');
          setSuccess(false);
          handleInfoToolTip();
        } else if (res.status === 403) {
          setMessage('This user already exists!');
          setSuccess(false);
          handleInfoToolTip();
        }
      });
  };
  console.log('app logged in?', loggedIn);

  function handleInfoToolTip() {
    setIsInfoToolTipOpen(true);
  }

  function handleLogOut() {
    console.log('logged out');
    localStorage.removeItem('token');
    history.push('/main');
    setLoggedIn(false);
    setCurrentUser({});
    closeAllPopups();
    setCards([]);
    setResults(false);
    setNoSearch(true);
  }

  function closeAllPopups() {
    setSelectedCard(false);
    setIsInfoToolTipOpen(false);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsPopupOpen(false);
    setIsNavOpen(true);
    setCards([]);
    setResults(false);
    setNoSearch(true);
  }

  const [keyword, setKeyword] = useState('');
  const [noResults, setNoResults] = useState(true);
  const [resultError, setResultError] = useState(false);
  const [results, setResults] = useState(false);
  const [noSearch, setNoSearch] = useState(true);
  const [loading, setLoading] = useState(true);

  function handleSearchSubmit(keyword) {
    setNoSearch(false);
    setKeyword(keyword);
    console.log('hello');
    setNoResults(false);
    setResultError(false);
    setResults(false);
    setLoading(true);
    api
      .search(keyword)
      .then((res) => {
        console.log(res);
        setCards(res);
        // console.log('cards', cards);
        setLoading(false);
        console.log('length', res.length)
        if (res.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
          setResults(true);
        }
      })

      .catch((err) => {
        setLoading(false);
        setResultError(true);
        console.log(err);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('token', token);
      console.log('has token', token);

      auth
        .getContent(token)
        .then((res) => {
          if (!res) {
            setMessage('400 - one or more of the fields were not provided');
            return;
          }
          return setCurrentUser(res);
        })
        .then(setLoggedIn(true))
        .then(() => {
          history.push('/main');
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [history, loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)

    if (token) {
      history.push('/main');
    }
  }, [history]);
console.log('user', currentUser.name)

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path='/main'>
            <Main

noSearch={noSearch}
              onSearch={handleSearchSubmit}
              isSaved={isSavedNewsPage}
              isOpen={isNavOpen}
              loggedIn={loggedIn}
              cards={cards}
              component={Main}
              onLogOut={handleLogOut}
              onSignIn={handleSignInClick}
              onNavBarClick={handleNavOpen}
              onSavedNewsClick={handleSavedNewsClick}
              onClose={closeAllPopups}
              keyword={keyword}
            >
              
            {noResults && <NothingFound noResults={true}  resultError={false}/> }
{/* <Preloader /> */}

 {results &&           <CardsList
              cards={cards}
              keyword={keyword}
    
              loggedIn={loggedIn}
            />}
{loading && <Preloader /> }

{resultError && <NothingFound noResults={false}  resultError={true} />}
            </Main>
          </Route>
  

          <Route path='/savedNewsPage'>
            
            <ProtectedRoute
              isSaved={isSavedNewsPage}
              onLogOut={handleLogOut}
              component={SavedNewsPage}
              onNavBarClick={handleNavOpen}
              isOpen={isNavOpen}
              onHomeClick={handleHomeClick}
              loggedIn={loggedIn}
              onClose={closeAllPopups}
              signInRedirect={handleSignInClick}
            />
          </Route>
          <Route exact path='/'>
            {loggedIn ? (
              <Redirect to='/savedNewsPage' />
            ) : (
              <Redirect to='/main' />
            )}
          </Route>
          <Route path="/*">
          <Redirect to="/" />
        </Route>
        </Switch>

        {console.log('log', isLoginPopupOpen)}
        <NewLogin
          isLoginPopupOpen={isLoginPopupOpen}
          handleSubmit={handleLoginSubmit}
          onClose={closeAllPopups}
          linkClick={handleSwitchToRegister}
        />

        <NewRegister
          isRegisterPopupOpen={isRegisterPopupOpen}
          handleSubmit={handleRegisterSubmit}
          onClose={closeAllPopups}
          linkClick={handleSwitchToLogin}
        ></NewRegister>

        <InfoToolTip
          isOpen={isInfoToolTipOpen}
          isItSuccess={isSuccess}
          onClose={closeAllPopups}
          message={message}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

// REFACTOR IMHO best practice would be to assign paths to the
// signin and signup modals, and use react router and its Link component
// (which is basically an <a>) to navigate to it. Would have to think about
// how to design the path scheme to work with keeping the backing page the same.
// Or the cheap and easy route is to use javascript:void() or # or something
