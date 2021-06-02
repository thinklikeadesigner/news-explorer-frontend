import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import * as api from '../utils/api';
import * as auth from '../utils/auth';
import InfoToolTip from './InfoToolTip';


import { NewRegister } from './NewRegister/NewRegister';
import { NewLogin } from './NewLogin/NewLogin';
import { Main } from './Main/Main';
import SavedNewsPage from './SavedNewsPage/SavedNewsPage';

function App() {
  const history = useHistory();

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [message, setMessage] = useState('');
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);
  
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
  setIsRegisterPopupOpen(true);
}

function handleSwitchToRegister(e) {
  e.preventDefault();
  setIsLoginPopupOpen(false);
  setIsRegisterPopupOpen(true);
  console.log('register');
}
function handleSwitchToLogin(e) {
  e.preventDefault();
  setIsRegisterPopupOpen(false);
  setIsLoginPopupOpen(true);
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(isSuccess);
    if (!email || !password) {
      setMessage('400 - one or more of the fields were not provided');
      setSuccess(false);
      handleInfoToolTip();
    }
    auth
      .authorize(email, password)
      .then((user) => {
        setLoggedIn(true);
      })
      .then(resetForm)
      .then(() => {
        history.push('/login');
      })
      .catch(() => {
        setSuccess(false);
        setMessage('Oops, something went wrong! Please try again.');
        handleInfoToolTip();
      });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!password || !email || !name) {
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

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }
  function handleSetEmail(e) {
    setEmail(e.target.value);
  }
  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleInfoToolTip() {
    setIsInfoToolTipOpen(true);
  }

  function handleLogOut() {
    localStorage.removeItem('token');
    history.push('/main');
    setLoggedIn(false);
  }

  function closeAllPopups() {
    setSelectedCard(false);
    setIsInfoToolTipOpen(false);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsNavOpen(false);
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

      api
        .getCardList()
        .then((res) => {
          setCards(res);
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
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Main
          isOpen={isNavOpen} 
            path='/main'
            loggedIn={loggedIn}
            cards={cards}
            component={Main}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            onLogOut={handleLogOut}
            onSignIn={handleSignInClick}
            onNavBarClick={handleNavOpen}
          ></Main>
          {/* <ProtectedRoute
          ></ProtectedRoute> */}

          <Route path='/savedNewsPage'>
            <SavedNewsPage onLogOut={handleLogOut} onNavBarClick={handleNavOpen}   isOpen={isNavOpen} />
          </Route>
          <Route exact path='/'>
            {loggedIn ? <Redirect to='/savednewspage' /> : <Redirect to='/main' />}
          </Route>
        </Switch>
        <NewRegister
          isOpen={isRegisterPopupOpen}
          message={message}
          onSetEmail={handleSetEmail}
          onSetPassword={handleSetPassword}
          onSetName={handleSetName}
          onRegister={handleRegisterSubmit}
          onClose={closeAllPopups}
          onSwitchToLogin={handleSwitchToLogin}
          
        />
        <NewLogin
          isOpen={isLoginPopupOpen}
          message={message}
          onSetEmail={handleSetEmail}
          onSetPassword={handleSetPassword}
          onSetName={handleSetName}
          onLogin={handleLoginSubmit}
          onClose={closeAllPopups}
          onSwitchToRegister={handleSwitchToRegister}
        />

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