import React from "react";

function CreatePost() {

  return (
    <div className="create-post">
      <h1 className="new-post-title">New Product</h1>
      <form className="new-post-form">
        <input
          id="title"
          type="text"
          className="input-field"
          placeholder="Name"
          required
          minLength="3"
    
        />

        <textarea
          id="content"
          className="textarea-field"
          placeholder="Description..."
          required
          minLength="20"
        />

        <div className="rating-container">
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
          />
        </div>

        <div className="votes-container">
          <label htmlFor="votes">Votes:</label>
          <input
            id="votes"
            type="number"
            min="0"
          />
        </div>

        <div className="price-container">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            />
        </div>

        <input
          className="btn btn-secondary publish-button"
          type="button"
          value="Publish"
        />
      </form>
    </div>
  );
}

export default CreatePost;
