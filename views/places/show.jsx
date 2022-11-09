const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <img src={data.place.pic} alt="restaurant pic" />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <h2>Description</h2>
            <p>{data.place.cuisines}</p>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <h2>Comments</h2>
            <p>{comments}</p>
            <form method="POST" action={`/places/${data.id}/comment`}>
              <div className="form-group">
              <label htmlFor="author">Your Name</label>
              <input className="form-control" id="author" name="author" required />
              </div>
              <div className= "form-group">
                <label htmlFor="content">Content</label>
              <input className="form-control" id="content" name="content" required/>
              </div>
              <div className="form-group">
                <label htmlFor="stars">Stars</label>
                <input className= "form-control" type="number" id="stars" name="stars" min="1" max="5" step=".5"></input>
              </div>
              <div className="form-group">
                <label htmlFor="rant">Rant</label>
                <input className= "form-control" type="checkbox" id ="rant" name="rant"  />
              </div>
              <button type= "submit" className= "btn btn-primary" value="add comment"></button>
            </form>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show

