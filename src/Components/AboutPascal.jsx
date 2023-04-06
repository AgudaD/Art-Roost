import { useEffect } from 'react';
import brownPostcard from '../assets/brownPostcard.png';
import whitePostcard from '../assets/whitePostcard.png';
import topArrow from '../assets/topArrow.svg'

const AboutPascal = () => {

  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  }, [])

  return (
    <div className="relative bg-white font-helvetica p-7 mt-10 md:px-32">
      <div className="flex flex-col md:flex-row md:justify-evenly md:gap-20">
        {/* biography */}
        <div className="tracking-wide leading-6 md:basis-1/2">
          <p className="text-[#6D4E56] text-2xl font-adobe font-semibold italic md:text-center md:text-5xl">
            Biography
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            Paschal Ugwu is a Nigerian artist born in 1996 in Orba, Enugu State.
            He is currently based in Abuja where he creates his captivating
            artworks. Paschal obtained his Bachelor's degree from the University
            of Nigeria, Nsukka, and has since developed a unique style that
            showcases disjointed human images with dark skin tones, achieved
            through paint drippings. His figures possess one ear and exaggerated
            eyes, all rendered using acrylic on canvas as his preferred medium.
            Ugwu's work is a powerful expression of the human form and a
            thought-provoking commentary on the human experience.
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            Paschal has participated in numerous exhibitions in Nigeria. In
            2021, he participated in Bootcamp, organized by Rele Art Foundation,
            under Rele Gallery, Nigeria. In 2020, a group exhibition "In Time
            like This" by Orange Gallery in Calabar, Nigeria.“The Manifesto I &
            II", at the Nnamdi Azikiwe Library, University of Nigeria, Nsukka,
            2020. "Dreams Alive 13", at the Marlima Basement in the University
            of Nigeria, Nsukka (2018). He participated in the exhibition "Life
            in My City Art Festival" at Thought Pyramid, Abuja, in 2018, and in
            2017, a "Walls and Patterns Painting Workshop" by Alliance Francais,
            Enugu State.
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            He has also been featured in publications; "Shoutout Miami", Los
            Angeles, 2022; "Artmatazz" Art magazine, Nigeria, 2020 and "Voyage
            Houston Magazine, New York, USA, in 2019.
          </p>
        </div>
        {/* artist statement */}
        <div className="mt-16 tracking-wide leading-6 mb-10 md:mt-0 md:basis-1/2">
          <p className="text-[#6D4E56] text-2xl font-adobe font-semibold italic md:text-center md:text-5xl">
            Artist Statement
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            "Run Through Walls" is a series of eight paintings that explore the
            concept of self-reliance and determination. This series is born from
            a period of intense challenge in my life, when I realized that I
            needed to take control of my own destiny and push through the
            obstacles that were in my way. The paintings in this series depict
            exaggerated eyes and one ear, a recurring stylistic element in my
            work. Through these images, I strive to capture the different moods
            and emotions associated with the journey towards self-reliance.
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            Each of the eight paintings in this series possesses its own unique
            facial expression, reflecting the different stages of this
            transformative journey. The body of each image is achieved through
            the use of dark acrylic drippings, lending a raw and emotional
            quality to the work. All of these paintings are created on canvas,
            allowing me to fully immerse myself in the creative process and
            express my ideas without any limitations.
          </p>
          <p className="mt-7 text-[#424F47] text-base">
            Through this series, I aim to inspire others to find the courage and
            determination to push through their own obstacles and strive for
            self-reliance. Whether it's facing personal challenges or larger
            societal obstacles, I believe that we all have the strength and
            resilience to overcome any obstacle that stands in our way. I hope
            that these paintings will serve as a reminder of this strength and
            encourage others to keep pushing forward, even when things seem
            impossible. In conclusion, "Run Through Walls" is a powerful and
            emotional series of paintings that celebrates the strength of the
            human spirit and the unbreakable will to succeed. Through these
            images, I invite the viewer to join me on a journey of
            self-discovery, determination, and resilience.
          </p>
        </div>

        <img src={brownPostcard} alt="" className='hidden absolute top-5 right-0 w-20 h-auto md:block' />
        <img src={whitePostcard} alt="" className='hidden absolute bottom-16 -left-7 w-24 h-auto md:block' />
      </div>
      <div className='absolute bottom-0 right-0 md:hidden' onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'});
        }}>
              <img src={topArrow} alt="" />
      </div>
    </div>
  );
};

export default AboutPascal;
