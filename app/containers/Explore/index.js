import React from 'react';

// ICONS
import addTrack from '../../images/icons/add_icon_track.png';
import heart from '../../images/icons/heart_icon.png';

// RECENTLY PLAYED
import Funkadelic from '../../images/recentlyplayed/Funkadelic.jpg';
import Greenday from '../../images/recentlyplayed/Greenday.jpg';
import JanetJackson from '../../images/recentlyplayed/JanetJackson.jpg';
import LadyGaga from '../../images/recentlyplayed/LadyGaga.jpg';
import Metallica from '../../images/recentlyplayed/Metallica.jpg';
import NoDoubt from '../../images/recentlyplayed/NoDoubt.jpg';
import YeahYeahYeahs from '../../images/recentlyplayed/YeahYeahYeahs.jpg';

import './style.css';

const Explore = () => (
  <>
    <div className="main-page__search-bar">
      <input type="search" name="search" placeholder="Search" />
    </div>

    <div className="category">
      <div className="title title-recent">Recently Played</div>
      <div className="category__item item-small">
        <img className="item-image" src={Funkadelic} alt="smaller-icon" />
      </div>
      <div className="category__item item-small">
        <img className="item-image" src={Greenday} alt="smaller-icon" />
      </div>
      <div className="category__item item-small">
        <img className="item-image" src={YeahYeahYeahs} alt="smaller-icon" />
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
            <img className="item--thumbnail" src={Funkadelic} alt="thumbnail" />
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
            <img className="header-column__image" src={heart} alt="love-icon" />
          </div>
        </div>
        <div className="row">
          <div className="column__item item--fixed-width">
            <img className="item--thumbnail" src={Metallica} alt="thumbnail" />
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
            <img className="header-column__image" src={heart} alt="love-icon" />
          </div>
        </div>
        <div className="row">
          <div className="column__item item--fixed-width">
            <img className="item--thumbnail" src={NoDoubt} alt="thumbnail" />
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
            <img className="header-column__image" src={heart} alt="love-icon" />
          </div>
        </div>
        <div className="row">
          <div className="column__item item--fixed-width">
            <img className="item--thumbnail" src={Greenday} alt="thumbnail" />
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
            <img className="header-column__image" src={heart} alt="love-icon" />
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
            <img className="header-column__image" src={heart} alt="love-icon" />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Explore;
