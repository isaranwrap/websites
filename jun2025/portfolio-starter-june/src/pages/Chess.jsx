import React from 'react';

function Chess() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      
      {/* Hero Section */}
      <div 
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/isaranwrap/isaranwrap.github.io/master/images/chess0100.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 2rem',
          color: 'white',
          textShadow: '1px 1px 4px black',
        }}
      >
        <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Chess Lessons by a 5-Time State Champ
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
  <strong>$5 for 5 powerful lessons.</strong> Designed to level up your game <strong><em>fast</em></strong>—whether you're just starting or want to crush your next tournament.
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>

        {/* Profile Photo */}
        <div>
          <img 
            src="https://raw.githubusercontent.com/isaranwrap/isaranwrap.github.io/master/images/profilepic.png" 
            alt="Instructor profile"
            style={{ width: '200px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          />
        </div>

        {/* Lesson Info */}
        <div style={{ flex: 1 }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>What You Get</h2>
            <div style={{ marginBottom: '1rem' }}>
            <p>✅ <strong>Personalized instruction</strong></p>
            <p>✅ <strong>Game analysis & tactics</strong></p>
            <p>✅ <strong>Time-tested strategies</strong></p>
            <p>✅ <strong>One-on-one sessions</strong></p>
            <p>✅ <strong>All for just $5</strong></p>
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>About Me</h2>
            <p>
              I’m a 5-time Nevada State Chess Champion. I teach not just moves, but mindset—how to stay calm, think ahead, and dominate on the board.
            </p>
          </section>

          <a 
            href="mailto:ishansaran65@gmail.com" 
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            Book Your First Lesson
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chess;
