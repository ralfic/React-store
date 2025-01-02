import { useGetOrdersQuery } from '@/api/user/userApi';

export default function AccountOrders() {
  const { data } = useGetOrdersQuery(null);

  return (
    <>
      <h2 className="text-xl font-semibold mb-10">Orders History</h2>
      <table className="w-full text-left max-xs:hidden">
        <thead>
          <tr className="text-gray-400 text-sm border-b">
            <th className="pb-2">Number ID</th>
            <th className="pb-2">Dates</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="py-6 text-nowrap whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] pr-2">
                  {order.id}
                </td>
                <td className="py-6">{order.dateCreated}</td>
                <td className="py-6">Delivered</td>
                <td className="py-6">${order.totalPrice}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex-col w-full hidden max-xs:flex">
        {data &&
          data.map((order, index) => (
            <div key={index} className="border-b grid grid-cols-2 py-4 gap-4">
              <p className="text-gray-300">Number ID</p>
              <p>{order.id}</p>
              <p className="text-gray-300">Dates</p>
              <p>{order.dateCreated}</p>
              <p className="text-gray-300">Status</p>
              <p>Delivered</p>
              <p className="text-gray-300">Price</p>
              <p>${order.totalPrice}</p>
            </div>
          ))}
      </div>
    </>
  );
}
