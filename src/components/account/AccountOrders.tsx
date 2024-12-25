export default function AccountOrders() {
  return (
    <div className="px-[72px] w-full">
      <h2 className="text-xl font-semibold mb-10">Orders History</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 text-sm border-b">
            <th className="pb-2">Number ID</th>
            <th className="pb-2">Dates</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b ">
            <td className="py-6">#3456_768</td>
            <td className="py-6">October 17, 2023</td>
            <td className="py-6">Delivered</td>
            <td className="py-6">$1234.00</td>
          </tr>
          <tr className="border-b">
            <td className="py-6">#3456_768</td>
            <td className="py-6">October 17, 2023</td>
            <td className="py-6">Delivered</td>
            <td className="py-6">$1234.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
