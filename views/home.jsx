const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              <div>
                <img src="/images/wheat.jpg" alt="wheat field" />
              <div>
                Photo by <a href="https://unsplash.com/@saadchdhry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Saad Chaudhry</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
            </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
