import React from "react";
import styled from "styled-components";
import LinkedIn from "../images/LinkedIn";
import GitHub from "../images/Github";
import Twitter from "../images/Twitter";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <footer className=" dark:bg-background-dark bg-background-light h-96">
        <h3 className="text-5xl mb-6">Have an idea?</h3>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <h4 className="text-4xl mb-6">Lets talk!</h4>

            <a
              href="mailto:rsft6000@gmail.com"
              title="Contact"
              className="hover:underline text-left w-max mt-6 hover:text-orange transition-all duration-500 font-semibold text-xl cursor-pointer"
            >
              rsft6000@gmail.com
            </a>
          </div>
          <div className="w-1/2 ">
            <h4 className="text-3xl mb-6">Social Media</h4>
            <div className="flex ">
              <a
                href="https://www.linkedin.com/in/robert-ramirez-marin/"
                title="LinkedIn Robert Ramirez"
                className="cursor-pointer block mb-4 sm:mb-0 sm:mr-2 mr-4"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/robertram"
                title="Github Robert Ramirez"
                className="cursor-pointer block mr-3"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHub />
              </a>
              <a
                href="https://twitter.com/robertramdev"
                title="Twitter Robert Ramirez"
                className="cursor-pointer block my-auto mt-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div``;

export default Footer;
