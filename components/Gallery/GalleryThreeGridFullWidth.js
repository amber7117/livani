import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
  '../images/gallery/gallery1.jpg',
  '../images/gallery/gallery2.jpg',
  '../images/gallery/gallery3.jpg',
  '../images/gallery/gallery4.jpg',
  '../images/gallery/gallery5.jpg',
  '../images/gallery/gallery6.jpg',
  '../images/gallery/gallery7.jpg',
  '../images/gallery/gallery8.jpg',
  '../images/gallery/gallery9.jpg',
  '../images/gallery/gallery10.jpg',
  '../images/gallery/gallery11.jpg',
  '../images/gallery/gallery12.jpg',
];

class GalleryThreeGridFullWidth extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false,
  };
  render() {
    const { photoIndex, isOpenImage } = this.state;
    return (
      <section className='gallery-area ptb-100'>
        <div className='container-fluid'>
          <div className='row'>
            {isOpenImage && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpenImage: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
              <div className='article-video'>
              <iframe src="https://www.pornhub.com/embed/65769e14ee10c" width="528" height="526"></iframe>
              </div>

                <div className='gallery-content'>
                  <span>SHIRT</span>
                  <h3>Long Sleeve Leopard T-Shirt</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 0 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='article-video'>
                      <iframe src="https://www.pornhub.com/embed/65687ea9e3e96" frameborder="0" width="528" height="526" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>TWIST SHIRT</span>
                  <h3>Causal V-Neck Soft Raglan</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 1 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='article-video'>
               <iframe src="https://www.pornhub.com/embed/ph6149f33dcbe3a" frameborder="0" width="528" height="526" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>ECOSMART</span>
                  <h3>Hanes Men's Pullover</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 2 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
               <div className='article-video'>
               <iframe src="https://www.pornhub.com/embed/657b20c45d388" frameborder="0" width="528" height="526" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>SMART SHIRT</span>
                  <h3>Gildan Men's Crew T-Shirt</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 3 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
               <div className='article-video'>
                <iframe src="https://www.pornhub.com/embed/6478b624850bf" frameborder="0" width="528" height="526" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>T-SHIRT</span>
                  <h3>Yidarton Women's Comfy</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 4 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
               <div className='article-video'>
                <iframe src="https://www.pornhub.com/embed/ph5fb6b0bb38c31" frameborder="0" width="520" height="526" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>T-SHIRT</span>
                  <h3>Tbmpoy Men's Tapered</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 5 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
                <iframe src="https://www.pornhub.com/embed/650396bad2717" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>ECOSMART</span>
                  <h3>Womens Tops Color</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 6 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
                <iframe src="https://www.pornhub.com/embed/64d573c7bf3da" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>

                <div className='gallery-content'>
                  <span>SMART SHIRT</span>
                  <h3>Open Front Knit Sweaters</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 7 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
                <iframe src="https://www.xvideos.com/embedframe/47945797"  width="528" height="526" scrolling="no"></iframe>

                <div className='gallery-content'>
                  <span>TWIST SHIRT</span>
                  <h3>Sunnyme Women's Ponchos</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 8 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
                <iframe src="https://www.xvideos.com/embedframe/13542197" width="528" height="526" scrolling="no"></iframe>

                <div className='gallery-content'>
                  <span>SHIRT</span>
                  <h3>Block Striped Draped</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 9 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
                <iframe src="https://www.xvideos.com/embedframe/13542259" width="528" height="526"></iframe>

                <div className='gallery-content'>
                  <span>T-SHIRT</span>
                  <h3>Women's Modern-Skinny</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 10 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-gallery-item'>
                <img
                  src='../images/gallery/gallery12.jpg'
                  alt='image'
                />

                <div className='gallery-content'>
                  <span>T-SHIRT</span>
                  <h3>Fleece Hooded Sweatshirt</h3>
                </div>

                <Link href='#'>
                  <a
                    className='popup-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ isOpenImage: true, photoIndex: 11 });
                    }}
                  ></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GalleryThreeGridFullWidth;
