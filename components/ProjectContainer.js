import Image from "next/image";

export default function ProjectContainer(props) {
  return (
    <div className="w-5/6 lg:w-full h-full">
      {props.image ? (
        <div className="relative w-full bg-gray-300">
          <Image src={props.image} layout="responsive" />
        </div>
      ) : (
        <></>
      )}
      <p>{props.title}</p>
      <p>{props.time}</p>
    </div>
  );
}
