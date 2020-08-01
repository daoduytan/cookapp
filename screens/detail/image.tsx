import React, { useState, useEffect } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface Props {
  source: any;
}

const ImageComp = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    Image.getSize(
      props.source,
      (w, h) => {
        setHeight(h);
        setWidth(w);
        console.log('111111', h, w);
      },
      (error) => {
        console.log(
          'ScaledImage:componentWillMount:Image.getSize failed with error: ',
          error
        );
      }
    );
  }, []);
  return (
    <Image
      source={props.source}
      resizeMode="cover"
      onLoad={(value: any) => {
        console.log(value.nativeEvent);
      }}
    />
  );
};

export default ImageComp;
