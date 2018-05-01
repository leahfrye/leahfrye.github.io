import React from 'react'
import Lightbox from 'react-images';

// Lightbox by react-images: https://github.com/jossmac/react-images/

export default class Gallery extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }
    this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
  }

  openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
  }
  
  closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
  }
  
  gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }
  
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
  }
  
  renderGallery () {
		const { images } = this.props;

		if (!images) return;

		const gallery = images.map((obj, i) => {
			return (
				<a
					href={obj.src}
					key={i}
          onClick={(e) => this.openLightbox(i, e)}
          className="thumbnail"
				>
          <div style={{backgroundImage: `url(${obj.src})`}}>
            <div className="overlay"/>
          </div>
        </a>
			);
		});

		return gallery;
	}

  render() {
    let { images } = this.props;
    return (
      <div className="gallery">
        {this.renderGallery()}
        <Lightbox 
          currentImage={this.state.currentImage}
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />      
    </div>
    );
  }

};