import React from "react";

const About = () => {
  return (
    <div className="bg-white px-[24px] py-10 mt-[132px] text-[#424F47] md:px-36">
      <div className="flex flex-col space-y-8 font-helvetica md:flex-row md:items-start md:space-y-0 gap-12 ">
          <p className="md:basis-1/2">
            <span className="font-semibold">Run through walls</span> is a phrase coined from the popular English idiom,
            “run through a brick wall”. It is a figure of speech for the ability to
            do whatever it takes to succeed. The expression, likens a goal with
            scarce optimism to the sturdiness of a brick wall. As great Randy Pausch
            memorably said: “The brick walls are there to give us a chance to show
            how badly we want something”.
          </p>
          <p className="md:basis-1/2">
            This exhibition reveals an opportunity for the artist to reflect inwards and detect the ardor that initiated their creativity by addressing moments in their personal lives in which they ran through mental and emotional predicaments and prevailed.
          </p>
      </div>
    </div>
  );
};

export default About;
