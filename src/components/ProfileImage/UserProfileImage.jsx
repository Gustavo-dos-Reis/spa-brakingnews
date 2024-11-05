import  { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ImageSelector from './ImageSelector';
import { ProfileImageWrapper, EditIcon, ModalWrapper, CloseButton } from './UserProfileImageStyled';
import { updateUserProfile, userLogged } from '../../services/userServices';
import { DEFAULT_USER_AVATAR } from '../../config';

function UserProfileImage({ userImage }) {
  // Certifique-se de que o estado seja declarado corretamente
  const [currentImage, setCurrentImage] = useState(userImage || DEFAULT_USER_AVATAR);
  const [isHovered, setIsHovered] = useState(false);
  const [showSelector, setShowSelector] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleEditClick = () => setShowSelector(true);
  const handleCloseSelector = () => setShowSelector(false);

  useEffect(() => {
    async function fetchUserData() {
        try {
            const response = await userLogged();
            setCurrentImage(response.data.avatar || DEFAULT_USER_AVATAR);
        } catch (error) {
            console.error("Erro ao carregar dados do usuário:", error);
        }
    }
    fetchUserData();
}, []);


  const handleImageSelect = async (url) => {
    try {
      setCurrentImage(url); // Atualize o estado corretamente
      setShowSelector(false);

      // Atualize a imagem no servidor
      await updateUserProfile({ avatar: url });
      console.log('Imagem de perfil atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar a imagem de perfil:', error);
    }
  };

  return (
    <ProfileImageWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={currentImage} alt="Perfil do usuário" />
      {isHovered && <EditIcon onClick={handleEditClick}>edit</EditIcon>}
      {showSelector && (
        <ModalWrapper>
          <CloseButton onClick={handleCloseSelector}>Fechar</CloseButton>
          <ImageSelector onSelectImage={handleImageSelect} />
        </ModalWrapper>
      )}
    </ProfileImageWrapper>
  );
}

UserProfileImage.propTypes = {
  userImage: PropTypes.string.isRequired,
};

export default UserProfileImage;
