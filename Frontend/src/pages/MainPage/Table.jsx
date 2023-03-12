import React, {useState} from "react";

const Table = ({Customers, onDelete, onEdit }) => {
    const [customers, setCustomers] = useState(Customers);
    return (
        <div className="table">
            <h2 className="table-title">Customer list</h2>
            <ul className="table-list">
                    <li  className="table-item">
                        <div className="table-info">
                            <div className="table-name"></div>
                            <div className="table-name"></div>
                            <div className="table-participation"></div>
                        </div>
                        <button onClick={() => onEdit(setCustomers)}>edit</button>
                        <button onClick={() => onDelete(null)}>delete</button>
                    </li>
            </ul>
        </div>
    );
}

export default Table;