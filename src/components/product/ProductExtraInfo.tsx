export default function ProductExtraInfo({
  discount,
  popular = false,
}: {
  discount?: number;
  popular?: boolean;
}) {
  return (
    <div className="absolute top-4 left-4 flex gap-2 flex-col-reverse ">
      {discount && (
        <span className="bg-green-400 text-white text-center  rounded-[4px] px-2.5 uppercase font-bold text-sm">
          {`-${discount}%`}
        </span>
      )}
      {popular && (
        <span className="bg-gray-300 text-white  text-center   rounded-[4px] px-2.5 uppercase font-bold text-sm">
          HOT
        </span>
      )}
    </div>
  );
}
