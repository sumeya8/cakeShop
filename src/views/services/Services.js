 
import React from 'react'
import ser1 from 'src/assets/images/service4.png'
import "./services.css"
import { TitleStyles } from "src/components/ReusableStyle";
import styled from "styled-components";

export default function Services() {
  return (
    <Section className='s2' id="services">
        <div className="title">
            <h1 className='yellow'>what do we do?</h1>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in ratione beatae ut harum itaque id distinctio et sit tenetur.</p>
        </div>
        <div className="services">
            <div className="service">
            <img src= {ser1} alt="" />
          <p className='p'>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industrys
          </p>
          <button>Read More</button>
        </div>

        <div className="service yellow">
            <img src= {ser1} alt="" />
          <p className='p'>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industrys
          </p>
          <button>Read More</button>
        </div>

        <div className="service">
            <img src= {ser1} alt="" />
          <p className='p'>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industrys
          </p>
          <button>Read More</button>
        </div>


        </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #AE5263;
        transition: 0.3s ease-in-out;
        &:hover {
            background: linear-gradient(to right, #AE5263, #DDABAE);
          color: black;
        }
      }
    }
    .yellow {
      button {
        background: linear-gradient(to right, #AE5263, #DDABAE);
        color: black;
        &:hover {
          background: linear-gradient(to right, #AE5263, #2E2532);
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;

