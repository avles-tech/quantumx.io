import React, { ReactNode } from 'react';

interface Column<T> {
    key: keyof T;
    label: string;
    render?: (value: any, item: T) => ReactNode;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
}

const Table: React.FC<TableProps<any>> = ({ data, columns }) => (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {columns.map((column, index) => (
                    <th scope="col" className="px-6 py-3" key={index}>
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    {columns.map((column, columnIndex) => (
                        <td className="px-6 py-4" key={columnIndex}>
                            {column.render ? column.render(item[column.key], item) : item[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
