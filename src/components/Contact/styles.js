import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    h2 {
      font-size: 4rem;
    }
    p {
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;
    
    .contact-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 50%;
      max-width: 30rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      border: none;
      cursor: pointer;
      
      img {
        width: 4rem;
      }
      
      span {
        color: var(--black);
        font-weight: 500;
      }

      &:hover {
        background-color: var(--pink);
        span {
          color: #FFF;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      .contact-item {
        width: 100%;
      }
    }
  }
`;