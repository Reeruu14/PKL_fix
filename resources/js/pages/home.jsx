import React from 'react';
import './app.css';

const home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to Wisata Semarang</h1>
          <p>Discover the beauty and culture of Semarang, Indonesia.</p>
          <a href="#" className="btn">Explore Now</a>
        </section>

        {/* Add other components and sections here */}
      </main>

      <footer>
        <p>&copy; 2023 Wisata Semarang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default home;