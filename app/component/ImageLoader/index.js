/**
 * Created by eastiming on 16/7/13.
 */
import React, { Component, PropTypes } from 'react';
import isEmpty from 'lodash/lang/isEmpty';

export default class LoadImage extends Component {
  constructor(props) {
    super(props);
  }

  state = { imageStatus: true };

  componentWillReceiveProps(nextProps) {
    if (nextProps.imgSrc !== this.props.imgSrc) {
      this.setState({ imageStatus: true });
    }
  }

  _handleImageLoaded = () => {
  };

  _handleImageErrored = () => {
    this.setState({ imageStatus: false });
  };

  render() {
    const { imgSrc, defaultSrc, className, style } = this.props;
    const { imageStatus } = this.state;
    let src = imgSrc;
    if (isEmpty(imgSrc)) {
      src = defaultSrc;
    }

    return (
      <img className={className} style={style} src={imageStatus ? src : defaultSrc}
           onLoad={this._handleImageLoaded}
           onError={this._handleImageErrored}
      />
    );
  }
}

LoadImage.propTypes = {
  imgSrc: PropTypes.string,
  defaultSrc: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
