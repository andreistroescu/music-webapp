import React from 'react';
import './style.css';

const HomePage = () => (
  <div className="app">
    <div className="sidebar">
      <div className="section">
        <h6 className="section-title">ACCOUNT</h6>
        <div className="section-item">Home</div>
        <div className="section-item">Explore</div>
      </div>

      <div className="section">
        <h6 className="section-title">MY COLLECTION</h6>
        <div className="section-item">My Mix</div>
        <div className="section-item">Playlists</div>
        <div className="section-item">Albums</div>
        <div className="section-item">Tracks</div>
        <div className="section-item">Videos</div>
        <div className="section-item">Artists</div>
      </div>

      <div className="section">
        <h6 className="section-title">MY PLAYLISTS</h6>
        <div className="section-item">Smoky Dishes</div>
        <div className="section-item">Country Roads</div>
        <div className="section-item">Muse</div>
        <div className="section-item">Wowza</div>
        <div className="section-item">Covers</div>
        <div className="section-item">Santana</div>
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
      <div className="title">Featured</div>
      <div className="page-category">
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
      </div>
      <div className="title title-mixes">Mixes For You</div>
      <div className="page-category">
        <div className="page-category__page-item item-small" />
        <div className="page-item item-small" />
        <div className="page-item item-small" />
        <div className="page-item item-small" />
        <div className="page-item item-small" />
        <div className="page-item item-small" />
        <div className="page-item item-small" />
      </div>
      <div className="title">Recently Played</div>
      <div className="page-category">
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
        <div className="page-item" />
      </div>
    </div>
  </div>
);

export default HomePage;
