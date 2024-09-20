import PropTypes from 'prop-types';
import { CardBody, CardContainer, CardFooter } from './CardStyled';
import { TextLimit } from '../TextLimit/TextLimit';

export function Card({ title, text, banner, likes, comments }){
   

    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{title}</h2>
                    <img src={banner} alt="Image" />
                </div>                
                <p>{text}</p>
            </CardBody>
            
             <TextLimit text={text} limit={150} />
            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{likes}</span>
                </div>
                <div>
                    <i className="bi bi-chat-left"></i>
                    <span>{comments}</span>
                </div>              
            </CardFooter>
        </CardContainer>
    );
}

// Validação das props.
Card.propTypes = {
       
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        banner: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
}