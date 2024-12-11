import Button from "../resuable/Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-24 gap-16 border">
      <div className="flex flex-col gap-8 w-5/6">
        <div className="flex flex-col gap-1">
          <h2 className="text-6xl font-extrabold">Govt.Portal</h2>
          <h2 className="text-6xl font-semibold text-blue-600">
            Decentralised Student Information Database
          </h2>
        </div>
        <p className="text-2xl flex-wrap w-5/6 text-gray-500">
          A decentralised database to store & access the data of students and
          colleges, to allow educational organisations to track the information.
        </p>
        <div className="">
            <Button handelFun={() => {

            }} content={"Get Started"} />
        </div>
      </div>
      <div>
        <img
          src="hero.png"
          width={1200}
          className="rounded-xl drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
