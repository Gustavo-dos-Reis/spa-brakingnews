import PropTypes from 'prop-types';
import { CardBody, CardContainer, CardFooter, CardHeader } from './CardStyled';
import { TextLimit } from '../TextLimit/TextLimit';

export function Card(props){
   

    return (
        <CardContainer>
            <CardBody >
                <div>
                <CardHeader top={props.top}>
                    <h2>{props.title}</h2>
                    <TextLimit text={props.text} limit={150} />
                </CardHeader>
                
                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{props.likes?.length}</span>
                        </section>
                        <section>
                            <i className="bi bi-chat-left"></i>
                            <span>{props.comments?.length}</span>
                        </section>              
                    </CardFooter>
                </div>                
                <img src={props.banner} alt="Image" />
            </CardBody>
            
            
            
        </CardContainer>
    );
}

// Validação das props
Card.propTypes = {
    top: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    banner: PropTypes.string,
    likes: PropTypes.array,
    comments:PropTypes.array,
}