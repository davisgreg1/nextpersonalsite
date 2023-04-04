import { useSession } from "next-auth/react";

function AboutMeText() {
  const { data: session } = useSession();

  const userName = session?.user?.name;

  const trimmedUserName = userName?.trim();

  const firstName = trimmedUserName?.split(" ")[0];

  const firstNameAvailable = !!firstName;
  return (
    <>
      <p className="flex py-4 px-4 text-base hiddenAnim dark:text-[#a7aec7]">
        {`\u00A0\u00A0\u00A0Hi${
          firstNameAvailable ? ` ${firstName}` : ""
        }, I'm Gregory Davis, a passionate software developer from
          Harlem, NY with a love for sports, travel, and animals. I
          discovered my love for coding in 2017, and since then, I have
          been actively pursuing my passion for creating innovative
          websites that are both functional and aesthetically pleasing.`}
      </p>
      <p className="flex py-4 px-4 text-base hiddenAnim dark:text-[#a7aec7]">
        {`\u00A0\u00A0\u00A0When I'm not working on exciting new projects, I'm either on the
          basketball court shooting some hoops or exploring new
          destinations. I believe that travel is not only an excellent way
          to unwind but also a great opportunity to learn about different
          cultures and lifestyles.`}
      </p>
      <p className="flex py-4 px-4 text-base hiddenAnim dark:text-[#a7aec7]">
        {`\u00A0\u00A0\u00A0I'm also an animal lover and enjoy spending time with my furry
          and less furry friends. There's nothing quite like the
          unconditional love and companionship that pets provide.`}
      </p>
      <p className="flex py-4 px-4 text-base hiddenAnim dark:text-[#a7aec7]">
        {`\u00A0\u00A0\u00A0I'm excited to be on this journey of self-discovery and growth
          and look forward to using my skills and experiences to create
          meaningful solutions for real-world problems.`}
      </p>
    </>
  );
}

export default AboutMeText;
