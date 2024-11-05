import PropTypes from 'prop-types';

const imageCollection = [
  'https://static.wikia.nocookie.net/dragonball/images/0/00/Vegetapan-1-.jpg',
  'https://criticalhits.com.br/wp-content/uploads/2024/10/trunks-and-vegeta-696x348.webp',
  'https://i.pinimg.com/736x/92/31/2b/92312b323743d049ace8360ea5d4cac7.jpg',
  'https://wallpapers.com/images/hd/one-piece-anime-zoro-manga-pages-87om23fjumbaenyh.jpg',
  'https://i.ytimg.com/vi/9cfZ5pyfBiw/hq720.jpg',
];

function ImageSelector({ onSelectImage }) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {imageCollection.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Imagem ${index + 1}`}
          onClick={() => onSelectImage(url)}
          style={{ width: '100px', height: '100px', cursor: 'pointer', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
}

ImageSelector.propTypes = {
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageSelector;
