import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: #21212150;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  /* Logo Styling */
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 2rem; /* Base size for the logo */
    color: #ffff; /* Matches nav links */
    text-decoration: none;
    font-weight: 500; /* Matches nav weight */
    text-transform: uppercase; /* Matches nav style */

    &:hover {
      filter: brightness(0.6); /* Matches nav hover effect */
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a {
      color: #ffff;
      padding: 0.6rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button {
        padding: 0.6rem 2rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--pink); /* Use the same pink as the Resume button */
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px; /* Match the rounded style of the Resume button */
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    transition: filter 0.25s;

    &:hover {
      filter: brightness(0.6); /* Match the hover effect of other links */
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #ffff; /* Fixed the typo */
    position: relative;
    cursor: pointer;
    display: none;

    &:before {
      bottom: 0.5rem;
    }
    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before,
  .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #ffff;
    cursor: pointer;
    transition: 0.6s;
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    margin-right: 1rem; /* Add margin to space it from the hamburger menu */
  }

  @media only screen and (max-width: 800px) {
    label {
      position: relative;
      margin-right: 1rem; /* Ensure consistent spacing on smaller screens */
    }
  }

  label:after {
    content: "";
    background: #fff;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;


    .logo {
      font-size: 15px; /* Reduced font size to fit in one line */
      gap: 4px;
    }

    .menu {
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);
      padding: 2rem; /* Add padding to give space around the links */

      a {
        font-size: 1.5rem; /* Larger font size for better readability on mobile */
        padding: 1rem; /* Larger tap area for links */
      }

      a.button {
        background-color: var(--pink);
        padding: 0.8rem 2rem; /* Slightly larger padding for the Resume button */
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;