import Image from "next/image";

export default function ProjectContainer(props) {
  return (
    <div className="w-full h-full">
      {props.image ? (
        <div className="relative w-full bg-gray-300">
          <Image src={props.image} layout="responsive" />
        </div>
      ) : (
        <></>
      )}
      <p className="font-playfair font-bold text-xl">{props.title}</p>
      <p className="font-quicksand text-gray-500 text-lg">{props.time}</p>
      <p className="font-quicksand text-lg">
        {props.tags && props.tags.join(", ")}
      </p>
    </div>
  );
}
