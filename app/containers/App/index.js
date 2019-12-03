/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import Explore from 'containers/Explore';
import GlobalStyle from '../../global-styles';
import MyMix from '../../components/MyMix/index';
import Playlists from '../../components/Playlists/index';
import Albums from '../../components/Albums/index';
import Tracks from '../../components/Tracks/index';
import Videos from '../../components/Videos/index';
import Artists from '../../components/Artists/index';

import add from '../../images/icons/add_icon.png';
import albums from '../../images/icons/albums_icon.png';
import artists from '../../images/icons/artists_icon.png';
import explore from '../../images/icons/explore_icon.png';
import home from '../../images/icons/home_icon.png';
import mix from '../../images/icons/mix_icon.png';
import more from '../../images/icons/more_icon.png';
import playlists from '../../images/icons/playlists_icon.png';
import songs from '../../images/icons/songs_icon.png';
import videos from '../../images/icons/videos_icon.png';

const spanStyles = {
  textDecoration: 'none',
  color: 'white',
};

export default function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <div className="sidebar__section">
            <h5 className="section-title">
              <span>ACCOUNT</span>
              <img className="title__image" src={more} alt="icon" />
            </h5>
            <Link to="/home" style={spanStyles}>
              <div className="section-item">
                <img className="section__image" src={home} alt="icon" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/explore" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={explore} alt="icon" />
                </span>
                <span>Explore</span>
              </div>
            </Link>
          </div>

          <div className="sidebar__section">
            <h5 className="section-title">MY COLLECTION</h5>
            <Link to="/myMix" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={mix} alt="icon" />
                </span>
                <span>My Mix</span>
              </div>
            </Link>
            <Link to="/playlists" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={playlists} alt="icon" />
                </span>
                <span>Playlists</span>
              </div>
            </Link>
            <Link to="/albums" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={albums} alt="icon" />
                </span>
                <span>Albums</span>
              </div>
            </Link>
            <Link to="/tracks" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={songs} alt="icon" />
                </span>
                <span>Tracks</span>
              </div>
            </Link>
            <Link to="/videos" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={videos} alt="icon" />
                </span>
                <span>Videos</span>
              </div>
            </Link>
            <Link to="/artists" style={spanStyles}>
              <div className="section-item">
                <span>
                  <img className="section__image" src={artists} alt="icon" />
                </span>
                <span>Artists</span>
              </div>
            </Link>
          </div>

          <div className="sidebar__section">
            <h5 className="section-title">
              <span>MY PLAYLISTS</span>
              <img className="title__image" src={more} alt="icon" />
            </h5>
            <div className="section-item">
              <span>
                <img className="section__image" src={add} alt="icon" />
              </span>
              <span className="section-title__create_playlist">
                Create new playlist
              </span>
            </div>
            <div className="section-item">
              <span>Smoky Dishes</span>
            </div>
            <div className="section-item">
              <span>Country Roads</span>
            </div>
            <div className="section-item">
              <span>Muse</span>
            </div>
            <div className="section-item">
              <span>Lolapalozza</span>
            </div>
            <div className="section-item">
              <span>Covers</span>
            </div>
            <div className="section-item">
              <span>Santana</span>
            </div>
          </div>
        </div>
        <div className="main-page">
          <div className="container">
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/explore" component={Explore} />
              <Route path="/myMix" component={MyMix} />
              <Route path="/playlists" component={Playlists} />
              <Route path="/albums" component={Albums} />
              <Route path="/tracks" component={Tracks} />
              <Route path="/videos" component={Videos} />
              <Route path="/artists" component={Artists} />
            </Switch>
            <GlobalStyle />
          </div>
        </div>
      </div>
    </>
  );
}
