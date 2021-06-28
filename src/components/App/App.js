import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as api from '../../utils/NewsApi';
import * as auth from '../../utils/auth';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

import { NewRegister } from '../Popup/NewRegister/NewRegister';
import { Popup } from '../Popup/Popup';
import { NewLogin } from '../Popup/NewLogin/NewLogin';
import { Main } from '../Main/Main';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import './App.css';



function App() {
  const history = useHistory();

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

  function handleSavedNewsClick() {
    setIsSavedNewsPage(true);
  }

  function handleHomeClick() {
    setIsSavedNewsPage(false);
  }

  function handleNavOpen(e) {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  }

  function resetForm() {
    setEmail('');
    setPassword('');
    setName('');
    setMessage('');
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

  function handleCardLike(card) {
    //NOTE here it has to be card._id
    const isLiked = card.likes?.some((i) => i._id === currentUser.id);

    api
      .changeCardLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const oldCards = [...cards];

        const filteredCards = oldCards.filter(
          (oldCard) => oldCard._id !== card._id
        );
        setCards(filteredCards);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleUpdateCard(card) {
    api
      .addCard(card)
      .then((newCard) => setCards([newCard, ...cards]))
      .then(closeAllPopups)
      .catch((err) => {
        console.log(err.message);
      });
  }

  //NOTE sign up log in functions

  const handleLoginSubmit = ({ email, password }) => {
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
        console.log('user', user);
      })
      .then(resetForm)
      .then(() => {
        history.push('/login');
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
      .then(resetForm)
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
    closeAllPopups();
  }

  function closeAllPopups() {
    setSelectedCard(false);
    setIsInfoToolTipOpen(false);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsPopupOpen(false);
    setIsNavOpen(true);
  }


const [keyword, setKeyword] = useState('');
const [noResults, setNoResults] = useState(true);
const [resultError, setResultError] = useState(false);
const [results, setResults] = useState(false);
const [loading, setLoading] = useState(true);



  function handleSearchSubmit(keyword) {
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
  
    if (token) {
      history.push('/login');
    }
  }, [history]);

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path='/main'>

         
            <Main
            results={results}
            noResults={noResults}
            laoding={loading}
            resultError={resultError}
            onSearch={handleSearchSubmit}
              isSaved={isSavedNewsPage}
              isOpen={isNavOpen}
              loggedIn={loggedIn}
              cards={cards}
              component={Main}
              onCardClick={handleCardClick}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onLogOut={handleLogOut}
              onSignIn={handleSignInClick}
              onNavBarClick={handleNavOpen}
              onSavedNewsClick={handleSavedNewsClick}
              onClose={closeAllPopups}
              cards={cards} 
              keyword={keyword}


            ></Main>
          </Route>
          {/* <ProtectedRoute
          ></ProtectedRoute> */}

          <Route path='/savedNewsPage'>
            <SavedNewsPage
              isSaved={isSavedNewsPage}
              onLogOut={handleLogOut}
              onNavBarClick={handleNavOpen}
              isOpen={isNavOpen}
              onHomeClick={handleHomeClick}
              loggedIn={loggedIn}
              onClose={closeAllPopups}
            />
          </Route>
          <Route exact path='/'>
            {loggedIn ? (
              <Redirect to='/savedNewsPage' />
            ) : (
              <Redirect to='/main' />
            )}
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
