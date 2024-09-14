import PropTypes from 'prop-types';

export function Card({news}){
    console.log(news);

    return (
        <section>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
            <img src={news.Image} alt="Image" />
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{news.likes}</span>
            <i className="bi bi-chat-left"></i>
            <span>{news.comments}</span>
        </section>
    );
}

// Validação das props
Card.propTypes = {
    news: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        Image: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
    }).isRequired,
};