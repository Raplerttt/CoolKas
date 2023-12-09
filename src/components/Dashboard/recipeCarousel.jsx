import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import "../../style/recipe.css";

function CarouselRecipe() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="carousel-container-recipedash">
      <ReactSimplyCarousel
        containerProps={{
            style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
            },
        }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: '#c19875',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: '#c19875',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 1280,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {Array.from({ length: 10 }).map((item, index) => (
        <div className="gap-card" key={index}>
            <div className="card">
            <img
                src="./assets/sushi-api.jpg"
                className="card-img-top"
                alt="food_image"
            />
            <div id="card-content" className="card-body">
                <h5 class="card-title">Resep Nusantara</h5>
                <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
                <div id="seeMore" className="d-flex justify-content-center">
                <button
                    className="btn btn-primary"
                //   onClick={() => navigate(`#`)}
                >
                    Lihat
                </button>
                </div>
            </div>
            </div>
        </div>
        ))}

      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselRecipe;