import React from 'react';
import './style.css';

import add from '../../images/icons/add_icon.png';
import albums from '../../images/icons/albums_icon.png';
import artists from '../../images/icons/artists_icon.png';
import explore from '../../images/icons/explore_icon.png';
// import heart from '../../images/icons/heart_icon.png';
import home from '../../images/icons/home_icon.png';
import mix from '../../images/icons/mix_icon.png';
import more from '../../images/icons/more_icon.png';
import playlists from '../../images/icons/playlists_icon.png';
import songs from '../../images/icons/songs_icon.png';
import videos from '../../images/icons/videos_icon.png';

import bowie from '../../images/albums/bowie.jpg';
import clash from '../../images/albums/clash.jpg';
import jeffersonairplane from '../../images/albums/jeffersonairplane.jpg';
import ledZeppelin from '../../images/albums/ledZeppelin.jpg';
import oasis from '../../images/albums/oasis.jpg';
import theBeatles from '../../images/albums/theBeatles.jpg';
// import the_velvet_underground from '../../images/albums/the_velvet_underground.jpg';

const HomePage = () => (
  <div className="app">
    <div className="sidebar">
      <div className="section">
        <h5 className="section-title">
          ACCOUNT
          <img className="title__image" src={more} alt="icon" />
        </h5>
        <div className="section-item">
          <img className="section__image" src={home} alt="icon" />
          <span>Home</span>
        </div>
        <div className="section-item">
          <span>
            <img className="section__image" src={explore} alt="icon" />
          </span>
          <span>Explore</span>
        </div>
      </div>

      <div className="section">
        <h5 className="section-title">MY COLLECTION</h5>
        <div className="section-item">
          <span>
            <img className="section__image" src={mix} alt="icon" />
          </span>
          <span>My Mix</span>
        </div>
        <div className="section-item">
          <span>
            <img className="section__image" src={playlists} alt="icon" />
          </span>
          <span>Playlists</span>
        </div>
        <div className="section-item">
          <span>
            <img className="section__image" src={albums} alt="icon" />
          </span>
          <span>Albums</span>
        </div>
        <div className="section-item">
          <span>
            <img className="section__image" src={songs} alt="icon" />
          </span>
          <span>Tracks</span>
        </div>
        <div className="section-item">
          <span>
            <img className="section__image" src={videos} alt="icon" />
          </span>
          <span>Videos</span>
        </div>
        <div className="section-item">
          <span>
            <img className="section__image" src={artists} alt="icon" />
          </span>
          <span>Artists</span>
        </div>
      </div>

      <div className="section">
        <h5 className="section-title">
          MY PLAYLISTS
          <img className="title__image" src={more} alt="icon" />
        </h5>
        <div className="section-item">
          <span>
            <img className="section__image" src={add} alt="icon" />
          </span>
          <span>Create ne...</span>
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
      <div className="search-bar">
        <input
          type="search"
          name="search"
          placeholder="Search.."
          align="right"
        />
      </div>
      <div className="title title-featured">Featured</div>
      <div className="category">
        <div className="category__item item-large">
          <img src={bowie} alt="icon" />
        </div>
        <div className="category__item item-large">
          <img src={clash} alt="icon" />
        </div>
        <div className="category__item item-large">
          <img src={jeffersonairplane} alt="icon" />
        </div>
        <div className="category__item item-large">
          <img src={ledZeppelin} alt="icon" />
        </div>
        <div className="category__item item-large">
          <img src={oasis} alt="icon" />
        </div>
        <div className="category__item item-large">
          <img src={theBeatles} alt="icon" />
        </div>
      </div>
      <div className="category">
        <div className="title title-suggested">Suggested New Tracks</div>
        <div className="table">
          <div className="table__row">
            <div className="table__cell">
              <span className="table__title">A</span>
              <i className="table__badge">A</i>
            </div>
          </div>
          <div className="table__row">
            <div className="table__cell">
              <span className="table__title">A</span>
              <i className="table__badge">A</i>
            </div>
          </div>
          <div className="table__row">
            <div className="table__cell">
              <span className="table__title">A</span>
              <i className="table__badge">A</i>
            </div>
          </div>
          <div className="table__row">
            <div className="table__cell">
              <span className="table__title">A</span>
              <i className="table__badge">A</i>
            </div>
          </div>
          <div className="table__row">
            <div className="table__cell">
              <span className="table__title">A</span>
              <i className="table__badge">A</i>
            </div>
          </div>
        </div>
      </div>
      <div className="title title-mixes">Mixes For You</div>
      <div className="category">
        <div className="category__item item-small" />
        <div className="category__item item-small" />
        <div className="category__item item-small" />
        <div className="category__item item-small" />
        <div className="category__item item-small" />
        <div className="category__item item-small" />
        <div className="category__item item-small" />
      </div>
      <div className="title title-recent">Recently Played</div>
      <div className="category">
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
        <div className="category__item" />
      </div>
    </div>
  </div>
);

export default HomePage;
