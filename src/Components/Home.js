import React from "react";

const Home = () => {
  return (
    <>
      <div class="container">
        <div class="top-text-wrapper">
          <h4>Custom HTML Elements: Checkbox/Radio/Selection</h4>
          <p>
            Custom styled <code>Radio</code> card and <code>Input</code> types.
          </p>
          <hr />
        </div>
        <div class="grid-wrapper grid-col-auto">
          {/* <label for="radio-card-1" class="radio-card">
            <input type="radio" name="radio-card" id="radio-card-1" checked />
            <div class="card-content-wrapper">
              <span class="check-icon"></span>
              <div class="card-content">
                <img
                  src="https://image.freepik.com/free-vector/group-friends-giving-high-five_23-2148363170.jpg"
                  alt=""
                />
                <h4>Lorem ipsum dolor.</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
              </div>
            </div>
          </label> */}

          <label for="radio-card-2" class="radio-card">
            <input type="radio" name="radio-card" id="radio-card-2" />
            <div class="card-content-wrapper">
              <span class="check-icon"></span>
              <div class="card-content">
                <img
                  src="https://image.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg"
                  alt=""
                />
                <h4>Lorem ipsum dolor.</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
              </div>
            </div>
          </label>
        </div>
      </div>
      <label for="radio-card-3" class="radio-card">
        <input type="radio" name="radio-card" id="radio-card-3" />
        <div class="card-content-wrapper">
          <span class="check-icon"></span>
          <div class="card-content">
            <img
              src="https://image.freepik.com/free-vector/group-friends-giving-high-five_23-2148363170.jpg"
              alt=""
            />
            <h4>Lorem ipsum dolor.</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
          </div>
        </div>
      </label>
    </>
  );
};

export default Home;
