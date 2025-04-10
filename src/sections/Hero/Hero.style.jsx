import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: cover;
  display: block;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%);
  z-index: 2;
`;

export const HeroText = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }
`;
