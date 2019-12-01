import React from 'react';

// ICONS
import add from '../../images/icons/add_icon.png';
import albums from '../../images/icons/albums_icon.png';
import artists from '../../images/icons/artists_icon.png';
import explore from '../../images/icons/explore_icon.png';
import heart from '../../images/icons/heart_icon.png';
import home from '../../images/icons/home_icon.png';
import mix from '../../images/icons/mix_icon.png';
import more from '../../images/icons/more_icon.png';
import playlists from '../../images/icons/playlists_icon.png';
import songs from '../../images/icons/songs_icon.png';
import videos from '../../images/icons/videos_icon.png';
import addTrack from '../../images/icons/add_icon_track.png';

// ALBUMS
import bowie from '../../images/albums/bowie.jpg';
import clash from '../../images/albums/clash.jpg';
import jeffersonairplane from '../../images/albums/jeffersonairplane.jpg';
import ledZeppelin from '../../images/albums/ledZeppelin.jpg';
import oasis from '../../images/albums/oasis.jpg';
import theBeatles from '../../images/albums/theBeatles.jpg';
import album1 from '../../images/albums/album1.jpg';
import album2 from '../../images/albums/album2.jpg';
import album3 from '../../images/albums/album3.jpg';
import album4 from '../../images/albums/album4.jpg';
import album5 from '../../images/albums/album5.jpg';
import album6 from '../../images/albums/album6.jpg';

// RECENTLY PLAYED
import Funkadelic from '../../images/recentlyplayed/Funkadelic.jpg';
import Greenday from '../../images/recentlyplayed/Greenday.jpg';
import JanetJackson from '../../images/recentlyplayed/JanetJackson.jpg';
import LadyGaga from '../../images/recentlyplayed/LadyGaga.jpg';
import Metallica from '../../images/recentlyplayed/Metallica.jpg';
import NoDoubt from '../../images/recentlyplayed/NoDoubt.jpg';
import YeahYeahYeahs from '../../images/recentlyplayed/YeahYeahYeahs.jpg';

import './style.css';

const HomePage = () => (
  <div className="app">
    <div className="sidebar">
      <div className="section">
        <h5 className="section-title">
          {/* this should be done with spans and a container div for the icon */}
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

      {/* not enough specificity for the class name */}
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
          <span className="section-title__create_playlist">
            Create new playlist
          </span>
          {/* css ellipsis */}
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
      {/* differentiate between the top section and the rest of the section */}
      <div className="main-page__search-bar">
        <input type="search" name="search" placeholder="Search" />
      </div>

      {/* add another wrapper for the rest of the section */}
      <div className="main-page__wrapper">
        {/* add a wrapper div for each section: title + category */}
        <div className="title title-featured">Featured</div>
        <div className="category">
          <div className="category__item item-large">
            <img className="item-image" src={bowie} alt="icon" />
          </div>
          <div className="category__item item-large">
            <img className="item-image" src={clash} alt="icon" />
          </div>
          <div className="category__item item-large">
            <img className="item-image" src={jeffersonairplane} alt="icon" />
          </div>
          <div className="category__item item-large">
            <img className="item-image" src={ledZeppelin} alt="icon" />
          </div>
          <div className="category__item item-large">
            <img className="item-image" src={oasis} alt="icon" />
          </div>
          <div className="category__item item-large">
            <img className="item-image" src={theBeatles} alt="icon" />
          </div>
        </div>

        <div className="title title-mixes">Mixes For You</div>
        <div className="category">
          <div className="category__item item-small">
            <img className="item-image" src={album1} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={album2} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={album3} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={album4} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={album5} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={album6} alt="smaller-icon" />
          </div>
        </div>

        <div className="title title-recent">Recently Played</div>
        <div className="category">
          <div className="category__item item-small">
            <img className="item-image" src={Funkadelic} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={Greenday} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img
              className="item-image"
              src={YeahYeahYeahs}
              alt="smaller-icon"
            />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={JanetJackson} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={LadyGaga} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={Metallica} alt="smaller-icon" />
          </div>
          <div className="category__item item-small">
            <img className="item-image" src={NoDoubt} alt="smaller-icon" />
          </div>
        </div>

        <div className="category category__suggested">
          <div className="title title-suggested">Suggested New Tracks</div>
          <div className="table-container">
            <div className="row">
              <div className="column__item header-column item--fixed-width">
                TITLE
              </div>
              <div className="column__item header-column">ARTIST</div>
              <div className="column__item header-column">ALBUM</div>
              <div className="column__item header-column">TIME</div>
              <div className="column__item header-column actions" />
            </div>
            <div className="row">
              <div className="column__item item--fixed-width">
                <img
                  className="item--thumbnail"
                  src={Funkadelic}
                  alt="thumbnail"
                />
                <span>The Winners</span>
              </div>
              <div className="column__item artist">Tanya Tucker</div>
              <div className="column__item album">The Winners</div>
              <div className="column__item">3:35</div>
              <div className="column__item actions">
                <img
                  className="header-column__image"
                  src={addTrack}
                  alt="add-icon"
                />
                <img
                  className="header-column__image"
                  src={heart}
                  alt="love-icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="column__item item--fixed-width">
                <img
                  className="item--thumbnail"
                  src={Metallica}
                  alt="thumbnail"
                />
                <span>The Winners</span>
              </div>
              <div className="column__item artist">Tanya Tucker</div>
              <div className="column__item album">The Winners</div>
              <div className="column__item">3:35</div>
              <div className="column__item actions">
                <img
                  className="header-column__image"
                  src={addTrack}
                  alt="add-icon"
                />
                <img
                  className="header-column__image"
                  src={heart}
                  alt="love-icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="column__item item--fixed-width">
                <img
                  className="item--thumbnail"
                  src={NoDoubt}
                  alt="thumbnail"
                />
                <span>The Winners</span>
              </div>
              <div className="column__item artist">Tanya Tucker</div>
              <div className="column__item album">The Winners</div>
              <div className="column__item">3:35</div>
              <div className="column__item actions">
                <img
                  className="header-column__image"
                  src={addTrack}
                  alt="add-icon"
                />
                <img
                  className="header-column__image"
                  src={heart}
                  alt="love-icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="column__item item--fixed-width">
                <img
                  className="item--thumbnail"
                  src={Greenday}
                  alt="thumbnail"
                />
                <span>The Winners</span>
              </div>
              <div className="column__item artist">Tanya Tucker</div>
              <div className="column__item album">The Winners</div>
              <div className="column__item">3:35</div>
              <div className="column__item actions">
                <img
                  className="header-column__image"
                  src={addTrack}
                  alt="add-icon"
                />
                <img
                  className="header-column__image"
                  src={heart}
                  alt="love-icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="column__item item--fixed-width">
                <img
                  className="item--thumbnail"
                  src={JanetJackson}
                  alt="thumbnail"
                />
                <span>The Winners</span>
              </div>
              <div className="column__item artist">Tanya Tucker</div>
              <div className="column__item album">The Winners</div>
              <div className="column__item">3:35</div>
              <div className="column__item actions">
                <img
                  className="header-column__image"
                  src={addTrack}
                  alt="add-icon"
                />
                <img
                  className="header-column__image"
                  src={heart}
                  alt="love-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
