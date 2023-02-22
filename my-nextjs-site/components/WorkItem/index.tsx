import Image from "next/image";
import Button from "@/components/Button";

interface WorkItemType {
  id?: string;
  body: string;
  image?: string;
  isImg?: boolean;
  imgURL: string;
  ImageComponent?: React.ReactNode;
  handleOnClick: () => void;
  buttonText: string;
}

export default function WorkItem({
  body,
  ImageComponent,
  isImg,
  imgURL,
  buttonText,
  handleOnClick
}: WorkItemType) {
  return (
    <div className="flex flex-col m-6 justify-center items-center">
      <div className="pb-6">
        {isImg && imgURL ? (
          <Image src={imgURL} width={175} height={42} alt="" />
        ) : (
          ImageComponent
        )}
      </div>
      <div className="flex flex-row items-center">
        <Button text={buttonText} onClick={handleOnClick} />
        <div>
          <p className="p-4">{body}</p>
        </div>
      </div>
    </div>
  );
}
