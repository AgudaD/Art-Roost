import { useEffect } from 'react';
import brownPostcard from '../assets/brownPostcard.png'
import whitePostcard from '../assets/whitePostcard.png'
import topArrow from '../assets/topArrow.svg'

const AboutOluwatobiloba = () => {
  
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  }, [])
  
  return (
    <div className="relative bg-white font-helvetica p-7 mt-10 md:px-32">
      <div className="flex flex-col md:flex-row md:justify-evenly md:gap-12 md:mt-24">
        {/* biography */}
        <div className="tracking-wide leading-6 md:basis-1/2">
          <p className="text-[#6D4E56] text-3xl font-adobe font-semibold italic md:text-center md:text-5xl">
            Biography
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            Inborn and lifelong distinctive artist. Oluwatobiloba Fasalejo (b.
            2000) is a Nigerian creative. A native of Ondo state. He live his
            better part of his life in the ancient city of Ondo where he was
            brought up. Oluwatobiloba is a disciplined artist who started art as
            a passion right from childhood.
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            He creates speculative works that expose black identity along side
            fashion, culture and personal growth. He kept on exploring different
            mediums such as drawing and painting techniques, at present, he is
            digging deeper into the use of textured canvas and acrylic for
            painting. His thematic disposition spans from concept captured from
            immediate environment which are sociocultural, psychological and
            religious in nature alongside his mother's trade business, as a core
            motivation that he explore in his works. He is presently studying
            for a Degree in Fine and Applied Arts at the esteemed Obafemi
            Awolowo University Ile-Ife, Osun State Nigeria.
          </p>
        </div>
        {/* artist statement */}
        <div className="mt-16 tracking-wide leading-6 mb-10 md:mt-0 md:basis-1/2">
          <p className="text-[#6D4E56] text-3xl font-adobe font-semibold italic md:text-center md:text-5xl">
            Artist Statement
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            My artist lens is one of a focused bystander experiencing my reality
            while observing the world around me. That world could be my local
            community, my country Nigerian which in the past years and till date
            I have had so many experience with different people in it.
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            Wherever I am, I always feel the need to talk, investigate and
            perceive the people around me. I accept the significant roles of
            ethnographer and strategic visionary that we artist have played in
            the society throughout history. My art reflect black identity, core
            fashion from my mother trade business and the culture of the people
            in my environment, their attitude to life, religion and
            relationships which is one of the way I communicate to people.
          </p>
          <p className="mt-7 text-[#c] text-base">
            My work often deals with the theme of relationship, hope and
            perseverance, using vibrant colors and dynamic compositions to
            convey a sense of truth, sharing my reality with the world. Through
            my art, I aim to give solution, hope, instruction and solve problems
            to aid a better day and a long life of peace with souls around and
            in the diaspora
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            In conclusion, I believe that art has the power to inspire,
            challenge, and heal. It is my hope that my work will engage and
            inspire others to see the world in a new light.
          </p>
        </div>

        <img src={brownPostcard} alt="" className='hidden absolute top-24 right-0 w-20 h-auto md:block' />
        <img src={whitePostcard} alt="" className='hidden absolute bottom-20 -left-7 w-24 h-auto md:block' />
      </div>

          <div className='absolute -bottom-5 right-0 md:hidden' onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});
        }}>
              <img src={topArrow} alt="" />
          </div>
    </div>
  );
};

export default AboutOluwatobiloba;
