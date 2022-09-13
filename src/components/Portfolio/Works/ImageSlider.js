import { Component } from "react";
import './style.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../assets/SwireCokeWebsite', false, /\.(png|jpe?g|svg|webp)$/));

class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: [0]
    }
  }

  goLeft = (e) => {
    const image = this.state.currentImage;
    image[0] = image[0] - 1;

    if (image[0] === -1) {
      image[0] = images.length - 1;
    }
    this.setState(image);
    // const threeImages = document.querySelectorAll('.images');
    // threeImages.forEach((img) => {
    //   img.style.transition = 'ease-in-out 0.5s';
    //   img.style.transform = 'translateX(100%)';
    // });
    // setTimeout(() => {
      
    //   threeImages.forEach((img) => {
    //     img.style.transition = 'none';
    //     img.style.transform = 'translateX(0%)';
    //   });
      
    //   this.setState(image);
    // }, 500);

  }

  goRight = (e) => {

    const image = this.state.currentImage;
    image[0] = image[0] + 1;

    if (image[0] === images.length) {
      image[0] = 0;
    }
    this.setState(image);
    // const threeImages = document.querySelectorAll('.images');
    // threeImages.forEach((img) => {
    //   img.style.transition = 'ease-in-out 0.5s';
    //   img.style.transform = 'translateX(-100%)';
    // });
    // setTimeout(() => {
    //   threeImages.forEach((img) => {
    //     img.style.transition = 'none';
    //     img.style.transform = 'translateX(0%)';
    //   });
  
    //   this.setState(image);
    // }, 500);
    // timeout();
  }

  selectImage = (e) => {
    const str = e.target.id;
    const targetImage = parseInt(str.substring('dot'.length), 10);
    const image = this.state.currentImage;
    image[0] = targetImage;

    this.setState(image);
  }


  render() {
    let prevImg = this.state.currentImage[0] - 1;
    let curImg = this.state.currentImage[0];
    let nextImg = this.state.currentImage[0] + 1;

    if (prevImg === -1) {
      prevImg = images.length - 1
    }

    if (nextImg === images.length) {
      nextImg = 0
    }

    return(
      <div className='imageSlider'>
        <div onClick={this.goLeft} className='left slideButton'></div>
        <div className='imageContainer'>
          <img className="images" src={images[prevImg]} alt="previous img"></img>
          <img className="images" src={images[curImg]} alt="current img"></img>
          <img className="images" src={images[nextImg]} alt="next img"></img>
        </div>
        <div onClick={this.goRight} className='right slideButton'></div>
        <div className='scrubber'>
          {images.map((image, index) => {
            if (index === curImg) {
              return <div id={'dot' + index} onClick={this.selectImage} className='dot selected' />
            }
            return <div id={'dot' + index} onClick={this.selectImage} className='dot' />
          })}
        </div>
      </div>
    )
  }
}

export default ImageSlider