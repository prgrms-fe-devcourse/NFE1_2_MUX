import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../../assets/icons/Close.png'
import TrackIcon from '../../assets/icons/Track.png';
import PostIcon from '../../assets/icons/Post.png';
import PostUpload from './PostUpload';
import TrackUpload from './TrackUpload';

const UploadModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('track');

  return (
    <ModalContainer>
      {/* Modal Header */}
      <Header>
        <TabWrapper>
          <TabButton
            isActive={activeTab === 'track'}
            onClick={() => setActiveTab('track')}>
            <TabIcon
              src={TrackIcon}
              alt="Track Icon"
              invert={activeTab === 'track'}
            />
            음원 업로드
          </TabButton>
          <TabButton
            isActive={activeTab === 'post'}
            onClick={() => setActiveTab('post')}>
            <TabIcon
              src={PostIcon}
              alt="Post Icon"
              invert={activeTab === 'post'}
            />
            추천 포스트 업로드
          </TabButton>
        </TabWrapper>
        <CloseButton onClick={onClose} />
      </Header>

      {/* Modal Content */}
      <Content>
        {activeTab === 'track'? <TrackUpload/> : <PostUpload/>}
      </Content>

    </ModalContainer>
  );
};

export default UploadModal;

// Styled components

const ModalContainer = styled.div`
  width: 45vw;
  height: 75vh;
  background-color: #fff;
  position: fixed;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #000;
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TabButton = styled.button`
  padding: 10px 25px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#000' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: 0;
  border-right: 1px solid #000;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

const TabIcon = styled.img`
  margin-right: 8px;
  width: 18px;
  height: 18px; 
  filter: ${(props) => (props.invert ? 'invert(1)' : 'none')};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-right: 1%;
  background-image: url(${CloseIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  flex-grow: 1; 
  overflow-y: auto;
`;
