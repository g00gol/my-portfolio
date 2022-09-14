export default function Contact() {
  return (
    <div className="my-32 w-full h-full">
      <div className="w-screen h-2/6 py-16 bg-gray-300 flex justify-center items-center">
        <div className="flex flex-col justify-center items-start [&>p]:font-playfair [&>p]:text-3xl [&>p]:font-bold">
          <p className="text-gray-400">like my stuff?</p>
          <p>get in touch!</p>
        </div>
      </div>

      <form
        action=""
        className="w-9/12 mx-auto mt-20 flex flex-col [&>input]:font-quicksand [&>input]:p-4 [&>input]:border [&>input]:border-b-0 [&>input]:outline-none"
      >
        <input placeholder="name" type="text" />
        <input placeholder="e-mail" type="text" />

        <div className="flex justify-end items-end">
          <textarea
            placeholder="message"
            className="flex items-start w-full h-60 !border-b font-quicksand p-4 border outline-none"
            type="text"
          />
          <button className="absolute m-4 px-6 py-2 bg-black text-white font-quicksand">
            send
          </button>
        </div>
      </form>
    </div>
  );
}
