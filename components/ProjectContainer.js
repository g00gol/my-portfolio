import Image from "next/image";

export default function ProjectContainer(props) {
  return (
    <div className="w-full font-quicksand space-y-4 text-lg">
      {props.image ? (
        <div className="overflow-hidden border rounded-xl relative w-full bg-gray-300">
          <Image src={props.image} layout="responsive" />
        </div>
      ) : (
        <></>
      )}
      <div>
        <p className="font-playfair font-bold text-xl">{props.title}</p>
        <p className="text-textGray">{props.tags && props.tags.join(", ")}</p>
      </div>

      <div className="flex space-x-4 text-accent underline">
        {!props.links ? (
          <></>
        ) : (
          props.links.map((arr, i) => (
            <a key={i} href={arr[1]}>
              {arr[0]}
            </a>
          ))
        )}
      </div>
    </div>
  );
}
