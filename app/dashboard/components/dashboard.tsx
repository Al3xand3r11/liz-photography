import { getCustomers } from "@/app/actions/formActions"
import { useState, useEffect } from "react";

interface Customer {
    name: string;
    email: string;
    phone: number | null;
    serviceType: string | null;
}

export default function Dashboard() {

    const [entries, setEntries] = useState<Customer[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCustomers()
            setEntries(result.map((entry) => ({
                name: entry.name,
                email: entry.email,
                phone: entry.phone,
                serviceType: entry.serviceType,
            })))
        }
        fetchData()
    },[])

    return(
        <div className="w-full rounded-md text-white drop-shadow-md  bg-[#151515] h-[100vh]">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-300 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-[#151515]">
            Your Clients
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">List of people who have submitted their information and are ready for you to reach out.</p>
        </caption>
        <thead className="text-xs text-gray-300 uppercase bg-[#141414]  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Service Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
            </tr>
        </thead>
        <tbody>
        {(entries.map((entry) => 
            <tr className="odd:bg-[#222222]  even:bg-[#141414] " key={entry.name}>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                    {entry.name}
                </th>
                <td className="px-6 py-4">
                    {entry.email}
                </td>
                <td className="px-6 py-4">
                    {entry.serviceType}
                </td>
                <td className="px-6 py-4">
                    {entry.phone}
                </td>
            </tr>
                ))}
        </tbody>
    </table>
</div>
        </div>
    )
}