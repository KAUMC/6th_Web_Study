import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254b;
    
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 전체 데이터의 길이가 브라우저의 길이보다 길 때 아래로 내림 */
  justify-content: center;
`;

export const MovieContainer = styled.div`
  position: relative; /* 포스터 내부에 설명을 절대 위치시키기 위한 설정 */
  width: 250px;
  margin: 10px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1); /*투명도*/
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between; /* 평점 오른쪽으로 붙임 */
  align-items: center; /* 수평 맞춤 */
`;

export const MovieTitle = styled.h4`
  margin: 0; /* 남는 공간 처리 */
`;

export const MovieRating = styled.span`
  margin-left: 3px;
`;

export const MovieDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none; /* 설명이 나타날 때도 hover 이벤트가 이미지에 전달되도록 함 */
`;

export const MovieDescriptionTitle = styled.h3`
  margin-bottom: 10px; /* 설명과 제목 사이에 간격 추가 */
`;

export const MovieContainerHover = styled(MovieContainer)`
  &:hover ${MovieDescription} {
    opacity: 1;
  }
`;