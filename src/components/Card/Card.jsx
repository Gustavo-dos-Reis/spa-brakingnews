import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

export function Card({
  top,
  title,
  text,
  likes,
  comments,
  banner,
  actions = false,
  id,
}) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={top ? "true" : undefined}>
            {actions && (
              <span>
                <Link to={`/manage-news/edit/${id}`}>
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <i className="bi bi-trash3"></i>
                </Link>
              </span>
            )}
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </CardHeader>

          <CardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{likes?.length}</span>
            </section>

            <section>
              <i className="bi bi-chat"></i>
              <span>{comments?.length}</span>
            </section>
          </CardFooter>
        </div>

        <img src={banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}

Card.propTypes = {
  top: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  banner: PropTypes.string,
  likes: PropTypes.array,
  comments:PropTypes.array,
  actions: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}