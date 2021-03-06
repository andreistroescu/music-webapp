import React from 'react';

// ICONS

import addTrack from '../../images/icons/add_icon_track.png';
import heart from '../../images/icons/heart_icon.png';

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

// const tracksHeaderProps = [
//   {
//     name: 'Title',
//     key: 'title',
//   },
//   {
//     name: 'Artist',
//     key: 'artist',
//   },
//   {
//     name: 'Album',
//     key: 'album',
//   },
//   {
//     name: 'Time',
//     key: 'time',
//   },
// ];

// const tracksData = [
//   {
//     id: 1,
//     title: 'The Winners 1',
//     artist: {
//       id: 1,
//       name: 'Tanya Tucker',
//     },
//     album: {
//       id: 1,
//       name: 'The Winners',
//     },
//     time: 215,
//     isFavorite: false,
//   },
//   {
//     id: 2,
//     title: 'The Winners 2',
//     artist: {
//       id: 2,
//       name: 'Tanya Tucker',
//     },
//     album: {
//       id: 2,
//       name: 'The Winners',
//     },
//     time: 215,
//     isFavorite: true,
//   },
//   {
//     id: 3,
//     title: 'The Winners 3',
//     artist: {
//       id: 3,
//       name: 'Tanya Tucker',
//     },
//     album: {
//       id: 3,
//       name: 'The Winners',
//     },
//     time: 215,
//     isFavorite: false,
//   },
//   {
//     id: 4,
//     title: 'The Winners 4',
//     artist: {
//       id: 4,
//       name: 'Tanya Tucker',
//     },
//     album: {
//       id: 4,
//       name: 'The Winners',
//     },
//     time: 215,
//     isFavorite: false,
//   },
//   {
//     id: 5,
//     title: 'The Winners 5',
//     artist: {
//       id: 5,
//       name: 'Tanya Tucker',
//     },
//     album: {
//       id: 5,
//       name: 'The Winners',
//     },
//     time: 215,
//     isFavorite: false,
//   },
// ];

const HomePage = () => (
  <>
    <div className="main-page__search-bar">
      <input type="search" name="search" placeholder="Search" />
    </div>

    <div className="category">
      <div className="title title-featured">Featured</div>
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

    <div className="category">
      <div className="title title-mixes">Mixes For You</div>
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

export default HomePage;
