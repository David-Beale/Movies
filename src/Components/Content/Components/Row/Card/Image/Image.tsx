import { Skeleton } from "@mui/material";
import { useState } from "react";
import { Image, SkeletonContainer } from "./ImageStyle";

export default function ImageComponent({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  const onLoaded = () => {
    setLoaded(true);
  };

  const path = src
    ? `https://image.tmdb.org/t/p/${"w300"}/${src}`
    : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

  return (
    <>
      {!loaded && (
        <SkeletonContainer>
          <Skeleton variant="rectangular" width={300} height={169} />
        </SkeletonContainer>
      )}
      <Image src={path} alt="movie poster" onLoad={onLoaded} />
    </>
  );
}
