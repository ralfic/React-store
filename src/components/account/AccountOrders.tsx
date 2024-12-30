import { useGetOrdersQuery } from '@/api/user/userApi';

export default function AccountOrders() {
  const { data } = useGetOrdersQuery(null);
  
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
    </div>
  );
}
