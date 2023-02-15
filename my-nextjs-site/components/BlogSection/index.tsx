import React, { use, useMemo, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import fetchEntries from "@/utils/contentfulPosts";
import BlogPost from "@/components/BlogPost";
const TinderCard = dynamic(
  () => {
    return import("react-tinder-card");
  },
  { ssr: false }
);

function BlogSection() {
  const posts = use(fetchEntries());
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  // const currentIndexRef = useRef(currentIndex);

  // const childRefs = useMemo(
  //   () =>
  //     Array(posts.length)
  //       .fill(0)
  //       .map((i) => React.createRef()),
  //   []
  // );

  // useEffect(() => {
  //   setCurrentIndex(posts.length - 1);
  // }, [posts]);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <section
      id="section-blog"
      className={`flex relative z-10 h-screen flex-col snap-start section mx-4`}
    >
      {posts.map((post: { sys: { id: React.Key | null | undefined } }) => (
        <TinderCard
          className="swipe"
          key={post.sys.id}
          preventSwipe={["up", "down"]}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        >
          <BlogPost key={post.sys.id} post={post} />
        </TinderCard>
      ))}
      {/* {posts.map((post) => (
        <BlogPost key={post.sys.id} post={post} />
      ))} */}
    </section>
  );
}

export default BlogSection;
