import React from "react";
import { useFetch } from "../Hook/useFetch";

function Users() {
    const { data } = useFetch("https://fakestoreapi.com/users");
    console.log(data);
    document.title = "Users"

    const navbar = [
        {
            id: 1,
            title: "ID",
        },
        {
            id: 2,
            title: "Name",
        },
        {
            id: 3,
            title: "Email",
        },
        {
          id: 5,
          title: "City"
        },
        {
            id: 4,
            title: "Phone",
        },
        
    ];

    return (
        <div className="relative overflow-x-auto pt-[80px] bg-violet-900 h-[91.5vh] ">
            <table className="w-[1400px] mx-auto text-sm text-left rtl:text-right border-[1px] border-white  text-gray-500 dark:text-gray-400">
                <thead className="rounded-mdtext-xs text-white uppercase bg-violet-700 dark:bg-violet-700 ">
                    <tr>
                        {navbar.map((item) => (
                            <th key={item.id} scope="col" className="px-6 py-3 text-white">
                                {item.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr
                            key={user.id}
                            className="bg-white  dark:bg-violet-800 even:bg-purple-500 dark:border-gray-700"
                        >
                            <td className="px-6 py-4 text-white">{user.id}</td>
                            <td className="px-6 py-4 text-white">{`${user.name.firstname} ${user.name.lastname}`}</td>
                            <td className="px-6 py-4 text-white">{user.email}</td>
                            <td className="px-6 py-4 text-white">{user.address.city}</td>
                            <td className="px-6 py-4 text-white">{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
