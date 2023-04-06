import React from "react";

const AboutGallery = () => {
  return (
    <div className="bg-white font-helvetica p-6 mt-10 md:px-36">
      <div>
          <div>
            <p className="font-adobe text-[#6D4E56] text-xl font-semibold italic md:text-center">About the gallery</p>
            <p className="mt-5 text-[#424F47] text-sm">
              Founded in Lagos, Nigeria circa 2021 by Tochukwu Ugah, Dara Shonubi,
              Chino Okafor and Mahmud Alabi. Four friends of similar disciplines
              stemming from design, architecture and real estate to art and fashion.
              Their appreciation for art & culture is quite unique as a result of
              the society they exist in, which favors other creative expressions
              such as music and film.
            </p>
            <p className="mt-8 text-[#424F47] text-sm">
                Art roost literally means an art nest. The gallery serves as a nest for nurturing young contemporary artists while connecting to young art collectors and fostering an art community amongst youths in Nigeria. The Gallery's first exhibition titled “Run Through Walls” and it's slated for April, 2023.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-12">
              <div className="mt-8">
                <p className="font-adobe text-[#6D4E56] text-xl font-semibold italic md:text-center">Our Mission</p>
                <p className="mt-3 text-[#424F47] text-sm">
                    We aim to connect a younger audience of people to art by encouraging, supporting and nurturing young creative African artists locally and in the diaspora.
                </p>
              </div>
              <div className="mt-5">
                <p className="font-adobe text-[#6D4E56] text-xl font-semibold italic md:text-center">Our Vision</p>
                <p className="mt-3 text-[#424F47] text-sm">
                    Our vision is to become an innovative and creative nest for young African artists all over Africa and its diaspora.
                </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AboutGallery;
