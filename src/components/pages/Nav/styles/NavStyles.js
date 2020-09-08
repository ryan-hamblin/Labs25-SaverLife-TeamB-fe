import styled from 'styled-components';

export const NavWrapper = styled.div`
  border-bottom: 8px solid rgb(189, 35, 125);
  margin-bottom: 30px;
`;

export const NavContents = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SLLogo = styled.img`
  width: 170px;
  @media (max-width: 765px) {
    width: 100%;
    margin-bottom: 10%;
  }
`;

export const LogoutButton = styled.button`
  border: 1px solid rgb(189, 35, 125);
  color: rgb(189, 35, 125);
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  background-color: white;
  padding: 0px 30px;
  height: 40px;
  :hover {
    color: white;
    background-color: rgb(189, 35, 125);
    border: 1px solid rgb(189, 35, 125);
  }
`;