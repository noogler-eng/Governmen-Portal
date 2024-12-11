export default function Button({ handelFun, content }: any) {
  return (
    <button
      onClick={handelFun}
      className="bg-blue-600 rounded-lg py-4 px-8 text-white font-semibold hover:bg-blue-700"
    >
      {content}
    </button>
  );
}
